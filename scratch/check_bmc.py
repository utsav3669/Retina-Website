import urllib.request
import re
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def get_links_and_imgs(url):
    print(f"\n--- Checking {url} ---", flush=True)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
            links = re.findall(r'<a[^>]+href=["\']([^"\']+)["\']', html, re.I)
            print("Images:", imgs[:10], flush=True)
            relevant_links = [l for l in links if any(k in l.lower() for k in ['gallery', 'campus', 'about', 'hospital', 'photo', 'infrastructure'])]
            print("Relevant links:", relevant_links[:10], flush=True)
    except Exception as e:
        print("Error:", e, flush=True)

get_links_and_imgs("https://bmc-bd.edu.bd/")
get_links_and_imgs("https://bmc-bd.edu.bd/gallery")
get_links_and_imgs("https://bmc-bd.edu.bd/about-us")
get_links_and_imgs("https://bmc-bd.edu.bd/campus")

