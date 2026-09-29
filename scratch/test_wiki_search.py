import urllib.request
import urllib.parse
import json

def search_commons(query, limit=5):
    # Wikimedia API search for images
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch={urllib.parse.quote(query)}&gsrlimit={limit}&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'RetinaConsultancyPhotoPicker/1.0 (contact@retinaedu.com.np)'})
    try:
        with urllib.request.urlopen(req, timeout=15) as res:
            data = json.loads(res.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            results = []
            for k, v in pages.items():
                title = v.get('title', '')
                info = v.get('imageinfo', [{}])[0]
                mime = info.get('mime', '')
                if mime in ['image/jpeg', 'image/png', 'image/webp']:
                    results.append({
                        'title': title,
                        'url': info.get('url'),
                        'width': info.get('width'),
                        'height': info.get('height'),
                        'size': info.get('size')
                    })
            return results
    except Exception as e:
        print(f"Error searching {query}:", e)
        return []

queries = {
    'blog1_online_form': 'student laptop desk',
    'blog2_nursing': 'nursing simulation',
    'blog3_counseling': 'doctor consultation office',
    'blog4_doctor_portrait': 'medical student portrait',
    'blog5_medical_campus': 'medical college building'
}

for key, q in queries.items():
    print(f"\n=================== {key} ({q}) ===================")
    items = search_commons(q, limit=6)
    for it in items:
        print(f"  {it['width']}x{it['height']} | {it['size']} bytes | {it['title']}")
        print(f"    URL: {it['url']}")
