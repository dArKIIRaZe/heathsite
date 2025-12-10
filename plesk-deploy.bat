@echo off
REM Plesk Git Deployment Script - Build on Server
REM This script builds the Next.js static site on the Plesk server

echo ========================================
echo Building Heath Site on Server
echo ========================================
echo.

REM Try different Node.js commands (Plesk may have different setups)
if exist "C:\Program Files\nodejs\node.exe" (
    set NODE_CMD="C:\Program Files\nodejs\node.exe"
    set NPM_CMD="C:\Program Files\nodejs\npm.cmd"
    echo Using Node.js from Program Files
) else if exist "C:\Program Files (x86)\nodejs\node.exe" (
    set NODE_CMD="C:\Program Files (x86)\nodejs\node.exe"
    set NPM_CMD="C:\Program Files (x86)\nodejs\npm.cmd"
    echo Using Node.js from Program Files (x86)
) else (
    REM Try to use node from PATH
    where node >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        set NODE_CMD=node
        set NPM_CMD=npm
        echo Using Node.js from PATH
    ) else (
        echo ERROR: Node.js not found!
        echo Please install Node.js on the server or configure it in Plesk
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
