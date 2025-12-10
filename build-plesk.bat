@echo off
REM Simple Plesk Build Script - Alternative to plesk-deploy.bat
REM Use this if plesk-deploy.bat doesn't work

call npm install
if %ERRORLEVEL% NEQ 0 exit /b 1

call npm run build
if %ERRORLEVEL% NEQ 0 exit /b 1

REM Copy .htaccess to out directory
if exist .htaccess (
    copy .htaccess out\ >nul 2>&1
)

echo Build complete!

