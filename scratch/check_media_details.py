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
    print(f"\n--- Checking {url} ---", flush=True)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
            for img in imgs:
                print(" ", img, flush=True)
    except Exception as e:
        print("Error:", e, flush=True)

inspect("https://ustc.ac.bd/ustc-gallery-media/")
inspect("https://pmch-bd.org/gallery")

