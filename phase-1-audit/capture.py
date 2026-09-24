import json, re, hashlib, csv, time
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urljoin, urlsplit, unquote
from concurrent.futures import ThreadPoolExecutor
import sys
sys.path.insert(0,str(Path(__file__).parent/'python-deps'))
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET

ROOT=Path(__file__).parent
BASE='https://pfinsulation.com.au/'
def fetch(url):
    with urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=45) as r:
        return r.read(),r.headers.get('Content-Type',''),r.status
def savejson(path,obj):
    path.write_text(json.dumps(obj,ensure_ascii=False,indent=2),encoding='utf-8')
queue=[BASE]; seen=set(); pages=[]; assets={}; errors=[]
for endpoint in ['robots.txt','sitemap.xml']:
    try:
        data,_,_=fetch(BASE+endpoint); (ROOT/'source'/endpoint).write_bytes(data)
        if endpoint.endswith('.xml'):
            for loc in ET.fromstring(data).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
                if urlsplit(loc.text).netloc==urlsplit(BASE).netloc: queue.append(loc.text)
    except Exception as e: errors.append({'url':BASE+endpoint,'error':str(e)})
while queue and len(seen)<100:
    url=queue.pop(0).split('#')[0]
    if url in seen: continue
    seen.add(url)
    try:
        data,ctype,status=fetch(url)
        if 'html' not in ctype: continue
        slug=urlsplit(url).path.strip('/').replace('/','__') or 'home'
        (ROOT/'source'/f'{slug}.html').write_bytes(data)
        soup=BeautifulSoup(data,'html.parser')
        links=[{'text':a.get_text(' ',strip=True),'url':urljoin(url,a.get('href',''))} for a in soup.select('a[href]')]
        for a in links:
            p=urlsplit(a['url'])
            if p.netloc==urlsplit(BASE).netloc and p.path not in ['/cart','/search'] and not p.query and not re.search(r'\.[a-zA-Z0-9]{2,5}$',p.path): queue.append(a['url'].split('#')[0])
        imgs=[]
        for im in soup.select('img'):
            src=im.get('data-src') or im.get('src')
            if src:
                src=urljoin(url,src).split('?')[0]
                imgs.append({'url':src,'alt':im.get('alt',''),'dimensions':im.get('data-image-dimensions','')})
        raw=data.decode('utf-8','replace').replace('\\/','/')
        extra=re.findall(r'https?://[^\s<>"\x27\\]+?\.(?:jpg|jpeg|png|webp|gif|svg|ico|mp4|pdf)(?:\?[^\s<>"\x27\\]*)?',raw,re.I)
        for src in extra:
            src=src.split('?')[0].replace('&amp;','&')
            if not any(x['url']==src for x in imgs): imgs.append({'url':src,'alt':'','dimensions':''})
        for im in imgs:
            key=im['url'].replace('http://','https://')
            assets.setdefault(key,{'url':key,'pages':[],'alt':im['alt'],'dimensions':im['dimensions']})['pages'].append(url)
        styles=[urljoin(url,x['href']) for x in soup.select('link[rel="stylesheet"][href]')]
        forms=[str(x) for x in soup.select('form')]
        meta=[dict(x.attrs) for x in soup.select('meta')]
        headings=[{'level':x.name,'text':x.get_text(' ',strip=True)} for x in soup.select('h1,h2,h3,h4,h5,h6')]
        for x in soup.select('script,style,noscript,svg'): x.decompose()
        body=soup.get_text('\n',strip=True)
        (ROOT/'source'/f'{slug}.txt').write_text(body,encoding='utf-8')
        pages.append({'url':url,'title':soup.title.get_text() if soup.title else '', 'file':f'source/{slug}.html','text_file':f'source/{slug}.txt','headings':headings,'links':links,'images':imgs,'stylesheets':styles,'meta':meta,'forms_html':forms})
        print('PAGE',url,flush=True)
    except Exception as e: errors.append({'url':url,'error':str(e)})
savejson(ROOT/'pages.json',pages)
def download(item):
    url=item['url']; name=re.sub(r'[^a-zA-Z0-9._-]','-',unquote(urlsplit(url).path.split('/')[-1]))
    filename=hashlib.sha256(url.encode()).hexdigest()[:8]+'-'+name
    try:
        data,ctype,status=fetch(url); (ROOT/'assets'/filename).write_bytes(data)
        item.update(file='assets/'+filename,bytes=len(data),content_type=ctype,sha256=hashlib.sha256(data).hexdigest(),status=status)
    except Exception as e: item.update(error=str(e))
    return item
with ThreadPoolExecutor(max_workers=6) as pool: results=list(pool.map(download,assets.values()))
savejson(ROOT/'assets-manifest.json',results)
cssurls=sorted(set(u for p in pages for u in p['stylesheets']))
(ROOT/'source'/'styles').mkdir(exist_ok=True)
css=[]
for i,url in enumerate(cssurls):
    try:
        data,_,_=fetch(url); file=f'source/styles/{i:02d}-{urlsplit(url).path.split("/")[-1]}'
        (ROOT/file).write_bytes(data); css.append({'url':url,'file':file})
    except Exception as e: errors.append({'url':url,'error':str(e)})
savejson(ROOT/'styles-manifest.json',css); savejson(ROOT/'capture-errors.json',errors)
print(json.dumps({'pages':len(pages),'assets':len(results),'successful_assets':sum('file' in x for x in results),'errors':errors}),flush=True)
