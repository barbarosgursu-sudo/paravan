@echo off
rem Paravan uretimi. Forge --api ile acik olmali. Once el (ControlNet) denemesi, ardindan arka planlar.
rem Saati degistirmek icin asagidaki 21:30u duzenle.
cd /d %~dp0
"C:\forge\system\python\python.exe" gece.py is_listesi.json --saat 21:30
"C:\forge\system\python\python.exe" gece.py is_listesi_mekan.json
pause
