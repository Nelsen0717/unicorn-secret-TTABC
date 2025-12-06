#!/bin/bash

# 獨角獸養成術 - GitHub 快速部署腳本
# 使用方法: bash deploy.sh "你的commit訊息"

# 顏色定義
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🦄 獨角獸養成術 - GitHub 部署工具${NC}"
echo "=================================="
echo ""

# 檢查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}📝 發現未提交的更改...${NC}"
    echo ""
    git status -s
    echo ""
    
    # 獲取 commit 訊息
    if [ -z "$1" ]; then
        echo -e "${YELLOW}請輸入 commit 訊息:${NC}"
        read COMMIT_MSG
    else
        COMMIT_MSG="$1"
    fi
    
    # 添加所有更改
    echo -e "${BLUE}📦 添加文件...${NC}"
    git add .
    
    # 提交更改
    echo -e "${BLUE}💾 提交更改...${NC}"
    git commit -m "$COMMIT_MSG"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ 提交成功！${NC}"
    else
        echo -e "${RED}❌ 提交失敗！${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✅ 沒有新的更改需要提交${NC}"
fi

# 推送到 GitHub
echo ""
echo -e "${BLUE}🚀 推送到 GitHub...${NC}"
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}=================================="
    echo -e "✅ 部署成功！"
    echo -e "==================================${NC}"
    echo ""
    echo -e "${BLUE}你的網站將在 2-3 分鐘後更新${NC}"
    echo ""
    echo -e "${YELLOW}📍 網站網址:${NC}"
    
    # 嘗試獲取 GitHub Pages URL
    REPO_URL=$(git config --get remote.origin.url)
    if [[ $REPO_URL =~ github\.com[:/]([^/]+)/([^/.]+) ]]; then
        USERNAME="${BASH_REMATCH[1]}"
        REPONAME="${BASH_REMATCH[2]}"
        echo -e "${GREEN}https://${USERNAME}.github.io/${REPONAME}/${NC}"
    else
        echo "https://你的用戶名.github.io/repository名稱/"
    fi
    
    echo ""
    echo -e "${BLUE}💡 提示: 可以前往 GitHub Actions 查看部署進度${NC}"
    echo ""
else
    echo ""
    echo -e "${RED}=================================="
    echo -e "❌ 推送失敗"
    echo -e "==================================${NC}"
    echo ""
    echo -e "${YELLOW}可能的原因:${NC}"
    echo "1. 尚未設定 GitHub remote"
    echo "2. 沒有推送權限"
    echo "3. 網路連接問題"
    echo ""
    echo -e "${BLUE}💡 請參考 GITHUB_DEPLOY_GUIDE.md 進行設定${NC}"
    echo ""
    exit 1
fi