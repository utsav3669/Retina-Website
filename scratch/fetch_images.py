import urllib.request
import json
import ssl
import sys

ssl_context = ssl._create_unverified_context()

colleges = [
    ('jahurul-islam-medical-college', 'Jahurul_Islam_Medical_College'),
    ('bangladesh-medical-college', 'Bangladesh_Medical_College'),
    ('green-life-medical-college', 'Green_Life_Medical_College'),
    ('anwer-khan-modern-medical-college', 'Anwer_Khan_Modern_Medical_College'),
    ('dhaka-national-medical-college', 'Dhaka_National_Medical_College'),
    ('monno-medical-college', 'Monno_Medical_College'),
    ('enam-medical-college', 'Enam_Medical_College_and_Hospital'),
    ('popular-medical-college', 'Popular_Medical_College'),
    ('diabetic-association-medical-college', 'Diabetic_Association_Medical_College,_Faridpur'),
    ('dhaka-central-international-medical-college', 'Dhaka_Central_International_Medical_College'),
    ('universal-medical-college', 'Universal_Medical_College'),
    ('north-east-medical-college', 'North_East_Medical_College'),
    ('rangpur-community-medical-college', 'Rangpur_Community_Medical_College'),
    ('institute-of-applied-health-sciences', 'Institute_of_Applied_Health_Sciences')
]

headers = {
    'User-Agent': 'RetinaConsultancyVerificationBot/1.0 (info@retinaconsultancy.com)'
}

for slug, wiki_title in colleges:
    url = f'https://en.wikipedia.org/api/rest_v1/page/summary/{wiki_title}'
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ssl_context, timeout=5) as resp:
            data = json.loads(resp.read().decode())
            orig = data.get('originalimage', {}).get('source')
            thumb = data.get('thumbnail', {}).get('source')
            print(f"{slug} -> {orig or thumb}", flush=True)
    except Exception as e:
        print(f"{slug} -> ERROR: {e}", flush=True)
