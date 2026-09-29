import urllib.request
import urllib.parse
import json

queries = [
    'nursing student',
    'medical examination students',
    'doctor consultation',
    'medical students campus',
    'student studying library'
]

for q in queries:
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(q)}&gsrlimit=8&prop=imageinfo&iiprop=url|size|mime&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'RetinaConsultancy/1.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as res:
            data = json.loads(res.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            print(f"\n=== {q} ({len(pages)}) ===")
            for k, v in pages.items():
                info = v.get('imageinfo', [{}])[0]
                if info.get('mime') == 'image/jpeg':
                    print(f"  [{info.get('width')}x{info.get('height')}] {v.get('title')}")
                    print(f"    {info.get('url')}")
    except Exception as e:
        print(f"Error {q}:", e)
