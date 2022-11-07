from pathlib import Path
from PIL import Image

for f in Path("./assets/images").glob("*.png"):
    fname = f.parts[-1].split('.')[0]
    npath = Path(*f.parts[:-1], f"{fname}.jpg")
    Image.open(f).convert("RGB").save(npath)
    