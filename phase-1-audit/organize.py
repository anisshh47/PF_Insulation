import sys,json,re,html,shutil,hashlib
from pathlib import Path
sys.path.insert(0,str(Path(__file__).parent/'python-deps'))
from bs4 import BeautifulSoup
R=Path(__file__).parent
pages=json.loads((R/'pages.json').read_text(encoding='utf-8'))
assets=json.loads((R/'assets-manifest.json').read_text(encoding='utf-8'))
forms=[]; inventory=['# Page and content inventory','Captured 19 September 2026. Raw copy is preserved as observed, including errors and unverified claims.','']
for p in pages:
    soup=BeautifulSoup((R/p['file']).read_text(encoding='utf-8'),'html.parser')
    inventory += ['## '+p['url'],'','Title: '+p['title'],'','Source: ['+p['file']+']('+p['file']+')','', 'Headings:']
    inventory += ['- '+x['level'].upper()+': '+x['text'] for x in p['headings']]
    inventory += ['','Links:']+['- '+a['text']+' — '+a['url'] for a in {a['url']:a for a in p['links']}.values()]+['']
    for script in soup.select('script'):
        text=script.string or script.get_text()
        if '"formFields"' in text:
            try:
                obj=json.loads(text.strip())
                forms.append({'page':p['url'],'name':obj.get('formName'),'fields':obj.get('formFields'),'submit':obj.get('formSubmitButtonText'),'success':obj.get('formSubmissionMessage'),'captcha':obj.get('captchaEnabled'),'redirect':obj.get('successRedirect'),'privacyPolicyUrl':obj.get('privacyPolicyUrl')})
            except: pass
(R/'content-inventory.md').write_text('\n'.join(inventory),encoding='utf-8')
(R/'forms.json').write_text(json.dumps(forms,indent=2,ensure_ascii=False),encoding='utf-8')
(R/'logos').mkdir(exist_ok=True)
for src,dst in [('993ed264-2.jpg','pf-insulation-header-logo.jpg'),('7d30ec77-IMG_3778.jpeg','pf-insulation-social-logo.jpeg'),('162596c8-PF-Insulation.zip---2.png','pf-insulation-blog-branding.png')]:shutil.copyfile(R/'assets'/src,R/'logos'/dst)
cards=[]; assetnotes=['# Downloaded asset inventory','','Original files, without image transformations. Source URLs, pages, dimensions, checksums and MIME types are in assets-manifest.json.','']
seen={}
for a in assets:
    a['pages']=sorted(set(a['pages']))
    same=seen.get(a['sha256']);seen[a['sha256']]=a['file']
    assetnotes += ['- ['+a['file']+']('+a['file']+') — '+str(a['bytes'])+' bytes; '+a['dimensions']+('; same bytes as '+same if same else '')]
    cards.append('<figure><a href="'+html.escape(a['file'])+'"><img loading="lazy" src="'+html.escape(a['file'])+'"></a><figcaption>'+html.escape(a['file'])+'<br>'+html.escape(a['dimensions'])+' · '+str(round(a['bytes']/1024))+' KB<br><a href="'+html.escape(a['url'])+'">Original source</a></figcaption></figure>')
(R/'asset-gallery.html').write_text('<!doctype html><html><head><meta charset="utf-8"><title>PF Insulation — archived assets</title><style>body{font:16px system-ui;margin:32px;background:#f5f5f5;color:#222}main{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px}figure{margin:0;padding:15px;background:white;border:1px solid #ddd;border-radius:10px}img{width:100%;height:220px;object-fit:contain;background:#eee}figcaption{overflow-wrap:anywhere;font-size:13px;line-height:1.6;margin-top:12px}a{color:#165c48}</style></head><body><h1>PF Insulation · Asset archive</h1><p>Captured 19 September 2026. Click images for original downloaded files. This is an archive gallery, not a proposed redesign.</p><main>'+''.join(cards)+'</main></body></html>',encoding='utf-8')
(R/'asset-inventory.md').write_text('\n'.join(assetnotes),encoding='utf-8')
(R/'assets-manifest.json').write_text(json.dumps(assets,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'pages':len(pages),'asset_urls':len(assets),'unique_asset_contents':len(seen),'bytes':sum(a['bytes'] for a in assets),'forms':forms},ensure_ascii=False,indent=2))
