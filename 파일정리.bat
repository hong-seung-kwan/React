@echo off
chcp 65001 >nul

set /p foldername=정리할 폴더 이름을 입력하세요: 

cd %foldername%
echo [%foldername%] 폴더로 이동했습니다.
echo.

set /p confirm=필요없는 파일을 삭제하시겠습니까? (Y/N): 

if /i not "%confirm%"=="Y" (
    echo 작업이 취소되었습니다.
    pause
    exit
)

del /q src\App.css
del /q src\App.test.js
del /q src\index.css
del /q src\logo.svg
del /q src\reportWebVitals.js
del /q src\setupTests.js
del /q README.md

powershell -Command "Write-Host '파일 삭제 완료!' -ForegroundColor Green"
echo.

set /p confirm=App.js와 index.js 파일을 정리하시겠습니까? (Y/N): 

if /i not "%confirm%"=="Y" (
    echo 작업이 취소되었습니다.
    pause
    exit
)

powershell -ExecutionPolicy Bypass -File "%~dp0clean-lines.ps1"
powershell -Command "Write-Host 'App.js 파일 정리 완료!' -ForegroundColor Green"
powershell -Command "Write-Host 'index.js 파일 정리 완료!' -ForegroundColor Green"
echo.

pause
