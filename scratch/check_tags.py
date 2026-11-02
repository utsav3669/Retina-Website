import urllib.request
import re
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {'User-Agent': 'Mozilla/5.0'}

req = urllib.request.Request("https://pmch-bd.org/", headers=headers)
with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
    html = resp.read().decode('utf-8', errors='ignore')
    # find all image urls and their titles or captions
    for m in re.finditer(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html, re.I):
        print("PMCH IMG TAG:", m.group(0))

req = urllib.request.Request("https://rcmch.com.bd/", headers=headers)
with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
    html = resp.read().decode('utf-8', errors='ignore')
    for m in re.finditer(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html, re.I):
        print("RCMCH IMG TAG:", m.group(0))

