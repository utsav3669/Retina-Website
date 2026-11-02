import urllib.request
import re
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

print("Fetching https://rcmc.com.bd/ ...", flush=True)
try:
    req = urllib.request.Request("https://rcmc.com.bd/", headers=headers)
    with urllib.request.urlopen(req, context=ssl_context, timeout=15) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print(f"Length: {len(html)}", flush=True)
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
        print(f"Found {len(imgs)} images:", flush=True)
        for img in imgs[:15]:
            print(" ", img, flush=True)
except Exception as e:
    print("Error:", e, flush=True)

