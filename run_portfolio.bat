@echo off
cd /d "%~dp0"

:: Check if we are in the root directory and need to enter the nested portfolio folder
if exist portfolio (
    cd portfolio
)

:: Check if node_modules exists, install if missing
if not exist node_modules (
    echo ==============================================================
    echo [Portfolio] node_modules not found. Installing dependencies...
    echo ==============================================================
    call npm install
) else (
    echo ==============================================================
    echo [Portfolio] Dependencies already installed.
    echo ==============================================================
)

:: Start the Vite development server
echo ==============================================================
echo [Portfolio] Starting dev server...
echo ==============================================================
call npm run dev

pause
