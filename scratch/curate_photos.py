import urllib.request
import urllib.parse
import json
import os
from PIL import Image

def get_wiki_images(query, limit=10):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(query)}&gsrlimit={limit}&prop=imageinfo&iiprop=url|size|mime&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'RetinaConsultancyPhotoCurator/1.0 (info@retinaedu.com.np)'})
    try:
        with urllib.request.urlopen(req, timeout=12) as res:
            data = json.loads(res.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            results = []
            for k, v in pages.items():
                title = v.get('title', '')
                info = v.get('imageinfo', [{}])[0]
                mime = info.get('mime', '')
                if mime == 'image/jpeg':
                    results.append({
                        'title': title,
                        'url': info.get('url'),
                        'w': info.get('width'),
                        'h': info.get('height')
                    })
            return results
    except Exception as e:
        print(f"Error searching {query}:", e)
        return []

candidates = {
    'form': ['student online application form laptop', 'student laptop registration university', 'working on laptop study desk'],
    'nursing': ['nursing students clinical skills training', 'nursing practical laboratory training', 'clinical skills simulation nursing'],
    'counseling': ['doctor consultation patient office desk', 'medical counseling consultation discussion', 'medical consultation doctor desk'],
    'motivation': ['young doctor stethoscope white coat hospital', 'medical student stethoscope hospital library', 'portrait medical doctor stethoscope'],
    'campus': ['medical college campus students walking', 'university campus medical faculty building', 'university students walking campus outside']
}

for cat, q_list in candidates.items():
    print(f"\n=================== {cat.upper()} ===================")
    for q in q_list:
        imgs = get_wiki_images(q, limit=5)
        for im in imgs:
            if im['w'] >= 1200 and im['h'] >= 800:
                print(f"  [{im['w']}x{im['h']}] {im['title']}")
                print(f"     {im['url']}")
