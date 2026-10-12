@echo off
rem Paravan arka plan denemesi. Forge --api ile acik olmali. Saati degistirmek icin asagidaki 21:15i duzenle.
cd /d %~dp0
"C:\forge\system\python\python.exe" gece.py is_listesi_mekan.json --saat 21:15
pause
