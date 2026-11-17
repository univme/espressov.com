from html.parser import HTMLParser
from pathlib import Path
import json
root=Path(__file__).resolve().parents[1];built=root/'.next/server/app'
routes=['/','/naplestechmeetup','/about','/contact','/entrepreneurialjourneys','/technologydelegations','/realestateinnovation','/pricing-plans/expertondemand']
class Doc(HTMLParser):
 def __init__(self):super().__init__();self.tags=[];self.json=False;self.blocks=[]
 def handle_starttag(self,t,a):
  a=dict(a);self.tags.append((t,a))
  if t=='script' and a.get('type')=='application/ld+json':self.json=True
 def handle_endtag(self,t):
  if t=='script':self.json=False
 def handle_data(self,d):
  if self.json:self.blocks.append(d)
for route in routes:
 path=built/('index.html' if route=='/' else route[1:]+'.html');s=path.read_text();d=Doc();d.feed(s)
 assert sum(t=='h1' for t,a in d.tags)==1,route
 assert sum(t=='main' and a.get('id')=='main' for t,a in d.tags)==1,route
 assert any(t=='meta' and a.get('name')=='description' and a.get('content') for t,a in d.tags),route
 assert any(t=='meta' and a.get('name')=='robots' and 'noindex' in a.get('content','') for t,a in d.tags),route
 assert any(t=='link' and a.get('rel')=='canonical' and a.get('href')=='https://www.espressov.com'+('' if route=='/' else route) for t,a in d.tags),route
 for t,a in d.tags:
  if t=='img':
   assert 'alt' in a and 'width' in a and 'height' in a,(route,a)
   assert (root/'public'/a['src'].lstrip('/')).exists(),a
  if t=='a':
   href=a.get('href','');assert href and href!='#',(route,a)
   if href.startswith('/') and not href.startswith('//'):
    target=href.split('#')[0];assert target in routes,(route,href)
 for block in d.blocks:
  obj=json.loads(block);assert obj.get('@type')=='Organization'
 print('PASS',route,'metadata, heading, landmarks, assets, routes, preview noindex, JSON-LD parsing')
assert 'Disallow: /' in (built/'robots.txt.body').read_text()
assert '<url>' not in (built/'sitemap.xml.body').read_text()
print('PASS preview robots disallows crawling; preview sitemap excludes routes')
print('NOT TESTED rendered contrast, keyboard, screen reader, embedded Luma, actual message delivery, Lighthouse')
