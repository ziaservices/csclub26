import subprocess
import os
import platform

project_path = r"C:\Users\Hatim_\Desktop\ibn-tfoail-cs-hub-main"
port = 80

os.chdir(project_path)

system = platform.system().lower()
cmd = f"set PORT={port} && npm run dev" if system == "windows" else f"PORT={port} npm run dev"

subprocess.run(cmd, shell=True)
