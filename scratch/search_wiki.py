import urllib.request
import urllib.parse
import json

queries = [
    'nurse practical training simulation',
    'medical students lecture hall',
    'doctor consultation clinic desk',
    'medical university campus building',
    'student studying library laptop'
]

for q in queries:
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(q)}&srnamespace=6&srlimit=4&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as res:
            data = json.loads(res.read().decode('utf-8'))
            results = data.get('query', {}).get('search', [])
            print(f"\n=== {q} ({len(results)}) ===")
            for r in results:
                title = r['title']
                if any(ext in title.lower() for ext in ['.jpg', '.jpeg', '.png']):
                    info_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url|size&format=json"
                    info_req = urllib.request.Request(info_url, headers={'User-Agent': 'Mozilla/5.0'})
                    with urllib.request.urlopen(info_req) as i_res:
                        i_data = json.loads(i_res.read().decode('utf-8'))
                        pages = i_data.get('query', {}).get('pages', {})
                        for pid, pdata in pages.items():
                            ii = pdata.get('imageinfo', [{}])[0]
                            print(f"  {title} | {ii.get('width')}x{ii.get('height')} | {ii.get('url')}")
    except Exception as e:
        print(f"Error {q}:", e)
