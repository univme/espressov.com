"""Validate built HTML and crawl controls in either preview or production mode."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse, parse_qs
from urllib.robotparser import RobotFileParser
from xml.etree import ElementTree
import argparse,json
args=argparse.ArgumentParser();args.add_argument('--indexable',action='store_true');args.add_argument('--origin',default='https://www.espressov.com');opts=args.parse_args()
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
 robots=[a['content'] for t,a in d.tags if t=='meta' and a.get('name')=='robots'];assert len(robots)==1,route
 assert ('noindex' not in robots[0])==opts.indexable,(route,robots)
 assert any(t=='link' and a.get('rel')=='canonical' and a.get('href')==opts.origin+('' if route=='/' else route) for t,a in d.tags),route
 for t,a in d.tags:
  if t=='img':
   assert 'alt' in a and 'width' in a and 'height' in a,(route,a)
   src=a['src'];photo=src.startswith('/_next/image?')
   if photo:
    assert a.get('sizes') and a.get('srcset'),(route,a)
    src=parse_qs(urlparse(src).query)['url'][0]
   assert (root/'public'/src.lstrip('/')).exists(),a
  if t=='a':
   href=a.get('href','');assert href and href!='#',(route,a)
   if href.startswith('/') and not href.startswith('//'):
    assert href.split('#')[0] in routes,(route,href)
 for block in d.blocks:
  obj=json.loads(block);assert obj.get('@type')=='Organization';assert obj['url']==opts.origin
  assert obj['email']=='partners@espressov.com'
 print('PASS',route,'metadata, canonical, crawl mode, headings, responsive images, links and JSON-LD')
rp=RobotFileParser();rp.parse((built/'robots.txt.body').read_text().splitlines())
for agent in ['Googlebot','OAI-SearchBot']:
 for route in routes:assert rp.can_fetch(agent,opts.origin+route)==opts.indexable,(agent,route)
urls=ElementTree.fromstring((built/'sitemap.xml.body').read_text());ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
locs={loc.text for loc in urls.findall('s:url/s:loc',ns)}
assert locs==({opts.origin+('' if route=='/' else route) for route in routes} if opts.indexable else set()),locs
manifest=json.loads((root/'.next/routes-manifest.json').read_text());headers=[h for rule in manifest['headers'] for h in rule['headers']]
assert any(h['key'].lower()=='x-robots-tag' and 'noindex' in h['value'] for h in headers)==(not opts.indexable)
llms=(built/'llms.txt.body').read_text();assert opts.origin in llms
print('PASS robots access, sitemap inventory, HTTP-header manifest and factual page index:', 'public' if opts.indexable else 'preview')
print('NOT TESTED live new deployment, Google indexing, AI citations, email delivery, full manual accessibility, new Lighthouse/Nertia score')
