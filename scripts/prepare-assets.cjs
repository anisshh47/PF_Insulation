const sharp = require('C:/Users/anish/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'phase-1-audit/assets');
const target = path.join(root, 'public/images');
fs.mkdirSync(target, {recursive:true});
const assets = {
  'comfort.webp': ['22bd0a39-imgg-gg3p-BC-DQ-C-591ec6fc.png', 1376],
  'removal.webp': ['9eadd6e5-WhatsApp-Image-2026-05-02-at-4.58.05-PM.jpeg', 720],
  'ceiling.webp': ['1bcfe993-15AE9E88-8AEA-4BA5-9E75-4F89C93E90EE.jpg', 1100],
  'underfloor.webp': ['206fdf3b-news_optimo.jpg', 600],
  'wall.webp': ['45777077-unsplash-image-qJa6WDmRNwM.jpg', 850],
  'installation.webp': ['0c247caa-CEILING_0--1-.png', 900],
  'result.webp': ['530abd07-viber_image_2025-02-14_22-59-30-829.jpg', 1100]
};
Promise.all(Object.entries(assets).map(async ([name,[file,width]])=>{
  await sharp(path.join(source,file)).resize({width,withoutEnlargement:true}).webp({quality:83}).toFile(path.join(target,name));
})).then(()=>{fs.copyFileSync(path.join(source,'993ed264-2.jpg'),path.join(target,'logo.jpg'));console.log('Prepared 8 local image assets.');});
