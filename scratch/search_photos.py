import urllib.request
import urllib.parse
import json

queries = [
    ('blog1_form', 'student laptop online registration application'),
    ('blog2_nursing', 'nursing student simulation hospital ward'),
    ('blog3_guardian', 'counselor consultation meeting student office'),
    ('blog4_motivation', 'medical student portrait stethoscope coat'),
    ('blog5_bangladesh_campus', 'medical college students campus outdoors')
]

for label, q in queries:
    search_url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(q)}&per_page=5"
    req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as res:
            data = json.loads(res.read().decode('utf-8'))
            print(f"\n=== {label} : '{q}' (Found: {data.get('total', 0)}) ===")
            for item in data.get('results', [])[:4]:
                desc = item.get('alt_description') or item.get('description') or 'No description'
                raw_url = item['urls']['raw'] + '&w=1200&h=900&fit=crop&q=85'
                print(f"  ID: {item['id']} | {desc[:65]} | {raw_url}")
    except Exception as e:
        print(f"Error {label}:", e)
