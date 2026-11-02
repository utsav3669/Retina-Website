import urllib.request
import re
import ssl
import json

ssl_context = ssl._create_unverified_context()
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

def get_page(url):
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, context=ssl_context, timeout=8) as r:
        return r.read().decode('utf-8', errors='ignore')

# 1. Bangladesh Medical College gallery
try:
    html = get_page("https://bmc-bd.edu.bd/")
    imgs = re.findall(r'src=["\']([^"\']+\.(?:jpg|jpeg|png))["\']', html, re.I)
    print("BMC homepage images:", imgs[:10])
except Exception as e:
    print("BMC error:", e)

# 2. Popular Medical College gallery
try:
    html = get_page("https://pmch-bd.org/")
    imgs = re.findall(r'src=["\']([^"\']+\.(?:jpg|jpeg|png))["\']', html, re.I)
    print("Popular images:", imgs[:10])
except Exception as e:
    print("Popular error:", e)

# 3. Green Life Medical College
try:
    # Check wikimedia Green_Life_Medical_College.png
    print("Green life commons: https://upload.wikimedia.org/wikipedia/commons/9/99/Green_Life_Medical_College.png")
except Exception as e:
    print("Green life error:", e)

# 4. Rangpur Community Medical College
try:
    # search web or get page
    html = get_page("https://rcmch.com.bd/")
    imgs = re.findall(r'src=["\']([^"\']+\.(?:jpg|jpeg|png))["\']', html, re.I)
    print("RCMCH images:", imgs[:10])
except Exception as e:
    print("RCMCH error:", e)

# 5. USTC / IAHS
try:
    html = get_page("https://ustc.ac.bd/faculty-of-medicine/")
    imgs = re.findall(r'src=["\']([^"\']+\.(?:jpg|jpeg|png))["\']', html, re.I)
    print("USTC Faculty of medicine images:", imgs[:10])
except Exception as e:
    print("USTC Faculty error:", e)
