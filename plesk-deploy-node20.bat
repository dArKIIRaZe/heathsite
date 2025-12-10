@echo off
REM Plesk Git Deployment Script - Build on Server with Node.js 20+
REM This script looks for Node.js 20 and builds the Next.js static site

echo ========================================
echo Building Heath Site on Server (Node.js 20+)
echo ========================================
echo.

REM Try to find Node.js 20 in common locations
set NODE20_FOUND=0

REM Check Plesk Node.js extension locations
if exist "C:\Program Files\Plesk\NodeJS\20.*\node.exe" (
    for /f "delims=" %%i in ('dir /b /ad "C:\Program Files\Plesk\NodeJS\20.*" 2^>nul') do (
        set NODE_CMD="C:\Program Files\Plesk\NodeJS\%%i\node.exe"
        set NPM_CMD="C:\Program Files\Plesk\NodeJS\%%i\npm.cmd"
        set NODE20_FOUND=1
        echo Using Node.js 20 from Plesk: %%i
        goto :found_node20
    )
)

REM Check if nvm-windows is installed
if exist "%USERPROFILE%\AppData\Roaming\nvm\nvm.exe" (
    call "%USERPROFILE%\AppData\Roaming\nvm\nvm.exe" use 20 >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        set NODE_CMD=node
        set NPM_CMD=npm
        set NODE20_FOUND=1
        echo Using Node.js 20 via nvm-windows
        goto :found_node20
    )
)

REM Check if nodist is installed
if exist "C:\Program Files (x86)\nodist\bin\nodist.exe" (
    call "C:\Program Files (x86)\nodist\bin\nodist.exe" use 20 >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        set NODE_CMD=node
        set NPM_CMD=npm
        set NODE20_FOUND=1
        echo Using Node.js 20 via nodist
        goto :found_node20
    )
)

REM Check for standalone Node.js 20 installations
if exist "C:\Program Files\nodejs20\node.exe" (
    set NODE_CMD="C:\Program Files\nodejs20\node.exe"
    set NPM_CMD="C:\Program Files\nodejs20\npm.cmd"
    set NODE20_FOUND=1
    echo Using Node.js 20 from Program Files\nodejs20
    goto :found_node20
)

if exist "C:\nodejs20\node.exe" (
    set NODE_CMD="C:\nodejs20\node.exe"
    set NPM_CMD="C:\nodejs20\npm.cmd"
    set NODE20_FOUND=1
    echo Using Node.js 20 from C:\nodejs20
    goto :found_node20
)

REM If Node.js 20 not found, check current version and warn
:found_node20
if %NODE20_FOUND% EQU 0 (
    echo.
    echo WARNING: Node.js 20+ not found!
    echo Checking current Node.js version...
    where node >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        for /f "tokens=*" %%v in ('node --version') do set CURRENT_VERSION=%%v
        echo Current Node.js version: %CURRENT_VERSION%
        echo.
        echo This project requires Node.js 20+
        echo Please install Node.js 20 or use a version manager (nvm-windows, nodist)
        echo.
        echo Attempting to use current Node.js version anyway...
        set NODE_CMD=node
        set NPM_CMD=npm
    ) else (
        echo ERROR: Node.js not found at all!
        echo Please install Node.js 20+ on the server
        exit /b 1
    )
)

echo.
echo Checking Node.js version...
%NODE_CMD% --version
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not working correctly
    exit /b 1
)

echo.
echo Checking npm version...
%NPM_CMD% --version
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm is not working correctly
    exit /b 1
)

echo.
echo Installing dependencies...
%NPM_CMD% install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: npm install failed
    exit /b 1
)

echo.
echo Building static site...
%NPM_CMD% run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed
    exit /b 1
)

echo.
echo Copying .htaccess to out directory...
if exist .htaccess (
    copy .htaccess out\ >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        echo .htaccess copied successfully
    ) else (
        echo Warning: Could not copy .htaccess
    )
) else (
    echo Warning: .htaccess not found in repository root
)

echo.
echo ========================================
echo Build completed successfully!
echo ========================================
echo.
echo Files are ready in the 'out' directory
echo Deployment path should be set to: out/
echo.

