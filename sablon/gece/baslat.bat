@echo off
rem Paravan uretimi. Forge --api ile acik olmali. Once arka planlar (hemen), ardindan el (ControlNet) denemesi.
cd /d %~dp0
"C:\forge\system\python\python.exe" gece.py is_listesi_mekan.json
"C:\forge\system\python\python.exe" gece.py is_listesi.json
pause
