import urllib.request
import re
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def inspect(url):
    print(f"\n--- URL: {url} ---", flush=True)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
            links = re.findall(r'<a[^>]+href=["\']([^"\']+)["\']', html, re.I)
            print("Images:", imgs[:10], flush=True)
            med_links = [l for l in links if any(k in l.lower() for k in ['iahs', 'medicine', 'campus', 'gallery', 'fom'])]
            print("Links:", med_links[:10], flush=True)
    except Exception as e:
        print("Error:", e, flush=True)

inspect("https://ustc.ac.bd/")
inspect("https://ustc.ac.bd/gallery")
inspect("https://rcmch.com.bd/gallery.php")
inspect("https://rcmch.com.bd/about.php")

