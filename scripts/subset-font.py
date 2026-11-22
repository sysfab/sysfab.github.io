"""Regenerate the bundled Nunito subset from Google's upright variable TTF.

Source: https://github.com/google/fonts/tree/main/ofl/nunito
Source TTF SHA-256: bb55a5ca5c2042335b3991af27c4d0705d0ef41cac6164ac737fd8f2a1e85207
License: public/licenses/nunito.txt
Run with fonttools and brotli installed:
    python3 scripts/subset-font.py /path/to/Nunito[wght].ttf
Printable ASCII covers all current page and clipboard feedback text; other
characters use the CSS system-font fallback. Revisit the subset for new languages.
"""
import io
import sys
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

font = TTFont(sys.argv[1])
instantiateVariableFont(font, {"wght": (400, 700)}, inplace=True)
# Reload after instancing so lazy variation tables reflect the new glyph set.
buffer = io.BytesIO()
font.save(buffer)
buffer.seek(0)
font = TTFont(buffer)
options = subset.Options()
subsetter = subset.Subsetter(options=options)
subsetter.populate(unicodes=range(32, 127))
subsetter.subset(font)
font.flavor = "woff2"
target = Path(__file__).resolve().parents[1] / "src/assets/nunito-ascii-400-700.woff2"
font.save(target)
assert all(code in font.getBestCmap() for code in range(32, 127))
print(f"{target}: {target.stat().st_size:,} bytes")
