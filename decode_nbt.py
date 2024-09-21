import sys
import nbtlib

if len(sys.argv) != 2:
    print("Usage: python3 decode_nbt.py <file_path>")
    sys.exit(1)

file_path = sys.argv[1]

try:
    # Laden der NBT- oder DAT-Datei
    nbt_data = nbtlib.load(file_path)
    print(nbt_data)
except Exception as e:
    print(f"Fehler beim Verarbeiten der Datei: {e}")
