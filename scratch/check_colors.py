from PIL import Image

for name in ["rcmch_flip1.png", "rcmch_flip4.png"]:
    im = Image.open(f"scratch/test_candidates/{name}")
    colors = im.getcolors(maxcolors=2000000)
    print(f"{name}: total unique colors = {len(colors) if colors else 'many'}")

