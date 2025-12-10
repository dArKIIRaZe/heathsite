@echo off
REM Manual Deployment Script for Plesk
REM This script builds and copies files without requiring server restart
REM Run this from the repository root directory

echo ========================================
echo Manual Deployment - Heath Site
echo ========================================
echo.

REM Find Node.js 20
set NODE20_FOUND=0

REM Check Plesk Node.js extension
if exist "C:\Program Files\Plesk\NodeJS\20.*\node.exe" (
    for /f "delims=" %%i in ('dir /b /ad "C:\Program Files\Plesk\NodeJS\20.*" 2^>nul') do (
        set NPM_CMD="C:\Program Files\Plesk\NodeJS\%%i\npm.cmd"
        set NODE20_FOUND=1
        echo Using Node.js 20 from Plesk: %%i
        goto :build
    )
)

REM Check nvm-windows
if exist "%USERPROFILE%\AppData\Roaming\nvm\nvm.exe" (
    call "%USERPROFILE%\AppData\Roaming\nvm\nvm.exe" use 20 >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        set NPM_CMD=npm
        set NODE20_FOUND=1
        echo Using Node.js 20 via nvm-windows
        goto :build
    )
)

REM Check manual install
if exist "C:\nodejs20\npm.cmd" (
    set NPM_CMD="C:\nodejs20\npm.cmd"
    set NODE20_FOUND=1
    echo Using Node.js 20 from C:\nodejs20
    goto :build
)

REM Fallback to system Node.js
set NPM_CMD=npm
echo Using system Node.js (may be version 18)

:build
echo.
echo Installing dependencies...
%NPM_CMD% install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)

echo.
echo Building static site...
%NPM_CMD% run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo Copying .htaccess to out directory...
if exist .htaccess (
    copy .htaccess out\ >nul 2>&1
)

echo.
echo ========================================
echo Build complete! Now copying to httpdocs...
echo ========================================
echo.

REM Get the current directory (repository root)
set REPO_DIR=%~dp0
set REPO_DIR=%REPO_DIR:~0,-1%

REM Try to find httpdocs directory
REM Common Plesk paths on Windows:
REM W:\Inetpub\domain.com\httpdocs
REM C:\inetpub\vhosts\domain.com\httpdocs

set HTTPDOCS_FOUND=0

REM Check if we're in a Plesk-style directory structure
for %%d in ("%REPO_DIR%\..\httpdocs" "%REPO_DIR%\..\..\httpdocs" "W:\Inetpub\heath.leaditservices.co.uk\httpdocs" "C:\inetpub\vhosts\heath.leaditservices.co.uk\httpdocs") do (
    if exist "%%~d" (
        set HTTPDOCS_PATH=%%~d
        set HTTPDOCS_FOUND=1
        echo Found httpdocs at: %%~d
        goto :copy_files
    )
)

REM If not found, prompt user
if %HTTPDOCS_FOUND% EQU 0 (
    echo.
    echo Could not automatically find httpdocs directory.
    echo Please enter the full path to your httpdocs directory:
    echo (Example: W:\Inetpub\heath.leaditservices.co.uk\httpdocs)
    echo.
    set /p HTTPDOCS_PATH="httpdocs path: "
    
    if not exist "%HTTPDOCS_PATH%" (
        echo ERROR: Directory does not exist: %HTTPDOCS_PATH%
        pause
        exit /b 1
    )
)

:copy_files
echo.
echo Copying files from out/ to httpdocs...
echo Source: %REPO_DIR%\out
echo Destination: %HTTPDOCS_PATH%
echo.

REM Use robocopy for better file copying (preserves permissions, handles large files)
robocopy "%REPO_DIR%\out" "%HTTPDOCS_PATH%" /E /XD node_modules .git /XF package.json package-lock.json .gitignore /NFL /NDL /NJH /NJS

if %ERRORLEVEL% LEQ 1 (
    echo.
    echo ========================================
    echo Deployment completed successfully!
    echo ========================================
    echo.
    echo Files have been copied to: %HTTPDOCS_PATH%
    echo No server restart needed - changes are live!
    echo.
) else (
    echo.
    echo WARNING: Some files may not have been copied.
    echo Check the output above for errors.
    echo.
)

pause

