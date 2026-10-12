@echo off
rem Paravan gece uretimi. Forge --api ile acik olmali. Saati degistirmek icin asagidaki 20:15i duzenle.
cd /d %~dp0
"C:\forge\system\python\python.exe" gece.py is_listesi.json --saat 20:15
pause
