@echo off
rem Paravan gece uretimi. Forge --api ile acik olmali. Saati degistirmek icin asagidaki 19:00i duzenle.
cd /d %~dp0
"C:\forge\system\python\python.exe" gece.py is_listesi.json --saat 19:00
pause
