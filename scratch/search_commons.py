import urllib.request
import urllib.parse
import json
import ssl

ssl_context = ssl._create_unverified_context()

college_queries = [
    ("jahurul-islam-medical-college", "Jahurul Islam Medical College"),
    ("bangladesh-medical-college", "Bangladesh Medical College"),
    ("green-life-medical-college", "Green Life Medical College"),
    ("anwer-khan-modern-medical-college", "Anwer Khan Modern Medical College"),
    ("dhaka-national-medical-college", "Dhaka National Medical College"),
    ("monno-medical-college", "Monno Medical College"),
    ("enam-medical-college", "Enam Medical College"),
    ("popular-medical-college", "Popular Medical College"),
    ("diabetic-association-medical-college", "Diabetic Association Medical College"),
    ("dhaka-central-international-medical-college", "Dhaka Central International Medical College"),
    ("universal-medical-college", "Universal Medical College"),
    ("north-east-medical-college", "North East Medical College"),
    ("rangpur-community-medical-college", "Rangpur Community Medical College"),
    ("institute-of-applied-health-sciences", "Institute of Applied Health Sciences USTC")
]

headers = {'User-Agent': 'RetinaConsultancyVerificationBot/1.0 (info@retinaconsultancy.com)'}

for slug, query in college_queries:
    params = urllib.parse.urlencode({
        'action': 'query',
        'generator': 'search',
        'gsrsearch': f'"{query}"',
        'gsrnamespace': '6',
        'prop': 'imageinfo',
        'iiprop': 'url|mime|size',
        'format': 'json'
    })
    url = f"https://commons.wikimedia.org/w/api.php?{params}"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
            data = json.loads(resp.read().decode())
            pages = data.get('query', {}).get('pages', {})
            print(f"=== {slug} ({query}) ===", flush=True)
            for page_id, page_info in pages.items():
                title = page_info.get('title')
                img_info = page_info.get('imageinfo', [{}])[0]
                img_url = img_info.get('url')
                print(f"  - {title}: {img_url}", flush=True)
            if not pages:
                print("  No pages found on Commons.", flush=True)
    except Exception as e:
        print(f"=== {slug} ERROR: {e} ===", flush=True)
