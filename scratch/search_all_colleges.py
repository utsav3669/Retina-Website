import urllib.request
import urllib.parse
import re
import ssl
import json
import sys

# Ensure UTF-8 output on Windows
sys.stdout.reconfigure(encoding='utf-8')

ssl_context = ssl._create_unverified_context()
WIKI_HEADERS = {
    'User-Agent': 'RetinaConsultancyResearch/1.0 (https://retinaconsultancy.com; info@retinaconsultancy.com)'
}

def query_commons(query):
    # gsrnamespace=6 searches exclusively Files (images)
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(query)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|size|extmetadata&format=json"
    try:
        req = urllib.request.Request(url, headers=WIKI_HEADERS)
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as r:
            data = json.loads(r.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            results = []
            for pid, p in pages.items():
                title = p.get('title', '')
                ii = p.get('imageinfo', [{}])[0]
                img_url = ii.get('url', '')
                width = ii.get('width', 0)
                height = ii.get('height', 0)
                results.append((title, img_url, width, height))
            return results
    except Exception as e:
        return [("error", str(e), 0, 0)]

def query_wikipedia_article_images(article_title):
    url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(article_title)}&prop=pageimages|images&pithumbsize=1000&format=json"
    try:
        req = urllib.request.Request(url, headers=WIKI_HEADERS)
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as r:
            data = json.loads(r.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            for pid, p in pages.items():
                thumb = p.get('thumbnail', {}).get('source', '')
                orig_title = p.get('pageimage', '')
                return thumb, orig_title
    except Exception as e:
        return None, str(e)
    return None, None

colleges = [
    ("Jahurul Islam Medical College", "Jahurul Islam Medical College"),
    ("Bangladesh Medical College", "Bangladesh Medical College"),
    ("Green Life Medical College", "Green Life Medical College"),
    ("Anwer Khan Modern Medical College", "Anwer Khan Modern Medical College"),
    ("Dhaka National Medical College", "Dhaka National Medical College"),
    ("Monno Medical College", "Monno Medical College"),
    ("Enam Medical College", "Enam Medical College"),
    ("Popular Medical College", "Popular Medical College"),
    ("Diabetic Association Medical College Faridpur", "Diabetic Association Medical College, Faridpur"),
    ("Dhaka Central International Medical College", "Dhaka Central International Medical College"),
    ("Universal Medical College Dhaka", "Universal Medical College and Hospital"),
    ("North East Medical College Sylhet", "North East Medical College"),
    ("Rangpur Community Medical College", "Rangpur Community Medical College"),
    ("Institute of Applied Health Sciences USTC", "Institute of Applied Health Sciences")
]

print("=== Wikipedia & Wikimedia Commons Search ===")
for name, wiki_title in colleges:
    print(f"\n--- {name} ---")
    thumb, orig = query_wikipedia_article_images(wiki_title)
    if thumb:
        print(f"  Wiki Article Thumbnail: {thumb}")
    
    commons_res = query_commons(name)
    if commons_res:
        for title, url, w, h in commons_res[:4]:
            print(f"  Commons: {title} ({w}x{h}) -> {url}")
    else:
        print("  No commons files found directly.")
