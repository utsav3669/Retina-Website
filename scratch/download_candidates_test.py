import urllib.request
import ssl
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
ssl_context = ssl._create_unverified_context()
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

candidates = {
    "bmc_page": "https://bmc-bd.edu.bd/assets/accounts/page_125_737.jpg",
    "bmc_photo1": "https://bmc-bd.edu.bd/assets/accounts/photo_1_1776941514.jpg",
    "bmc_photo3": "https://bmc-bd.edu.bd/assets/accounts/photo_3_1776939385.jpg",
    "pmch_dsc": "https://pmch-bd.org/uploads/gallery/media/1767692156-1664361319695cd77caee62!DSCF6268.JPG",
    "pmch_dsc5893": "https://pmch-bd.org/uploads/gallery/media/1768378912-121868840769675220dbc84!DSCF5893.JPG",
    "rcmch_flip1": "https://rcmch.com.bd/images/nw_am_r_flip_1.png",
    "rcmch_flip2": "https://rcmch.com.bd/images/nw_am_r_flip_2.png",
    "rcmch_flip4": "https://rcmch.com.bd/images/nw_am_r_flip_4.png",
    "rcmch_f2": "https://rcmch.com.bd/images/f_2.jpg",
    "rcmch_f4": "https://rcmch.com.bd/images/f_4.jpg",
    "ustc_drone": "https://ustc.ac.bd/wp-content/uploads/2026/04/Drn98-1.jpeg",
    "ustc_drone2": "https://ustc.ac.bd/wp-content/uploads/2026/04/Drn98-2.jpeg",
    "ustc_aidedc": "https://ustc.ac.bd/wp-content/uploads/2022/11/AIDEDC-1.jpg"
}

os.makedirs("scratch/test_candidates", exist_ok=True)

for name, url in candidates.items():
    print(f"Downloading {name} from {url} ...", flush=True)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=10) as resp:
            data = resp.read()
            ext = os.path.splitext(url.split("?")[0])[1] or ".jpg"
            dest = f"scratch/test_candidates/{name}{ext}"
            with open(dest, "wb") as f:
                f.write(data)
            print(f"  SUCCESS: {dest} ({len(data)/1024:.1f} KB)", flush=True)
    except Exception as e:
        print(f"  FAILED: {e}", flush=True)

