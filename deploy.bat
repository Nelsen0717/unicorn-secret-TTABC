@echo off
REM 獨角獸養成術 - GitHub 快速部署腳本 (Windows)
REM 使用方法: deploy.bat "你的commit訊息"

echo.
echo ========================================
echo   🦄 獨角獸養成術 - GitHub 部署工具
echo ========================================
echo.

REM 檢查 Git 是否安裝
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 錯誤: 未安裝 Git
    echo.
    echo 請先安裝 Git: https://git-scm.com/downloads
    echo.
    pause
    exit /b 1
)

REM 檢查是否有未提交的更改
git status --short | findstr "^" >nul
if %errorlevel% equ 0 (
    echo 📝 發現未提交的更改...
    echo.
    git status --short
    echo.
    
    REM 獲取 commit 訊息
    if "%~1"=="" (
        set /p COMMIT_MSG="請輸入 commit 訊息: "
    ) else (
        set COMMIT_MSG=%~1
    )
    
    REM 添加所有更改
    echo 📦 添加文件...
    git add .
    
    REM 提交更改
    echo 💾 提交更改...
    git commit -m "%COMMIT_MSG%"
    
    if errorlevel 1 (
        echo.
        echo ❌ 提交失敗！
        pause
        exit /b 1
    )
    
    echo ✅ 提交成功！
) else (
    echo ✅ 沒有新的更改需要提交
)

REM 推送到 GitHub
echo.
echo 🚀 推送到 GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo ========================================
    echo   ❌ 推送失敗
    echo ========================================
    echo.
    echo 可能的原因:
    echo 1. 尚未設定 GitHub remote
    echo 2. 沒有推送權限
    echo 3. 網路連接問題
    echo.
    echo 💡 請參考 GITHUB_DEPLOY_GUIDE.md 進行設定
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   ✅ 部署成功！
echo ========================================
echo.
echo 你的網站將在 2-3 分鐘後更新
echo.
echo 💡 提示: 可以前往 GitHub Actions 查看部署進度
echo.

REM 嘗試打開瀏覽器
for /f "delims=" %%i in ('git config --get remote.origin.url') do set REPO_URL=%%i
echo 📍 Repository: %REPO_URL%
echo.

pause