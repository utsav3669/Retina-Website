import urllib.request
import re
import ssl
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
}

req = urllib.request.Request("https://rcmch.com.bd/", headers=headers)
with urllib.request.urlopen(req, context=ssl_context, timeout=8) as resp:
    html = resp.read().decode('utf-8', errors='ignore')
    for m in re.finditer(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html, re.I):
        print("RCMCH IMG TAG:", m.group(0))

