# 🚀 GitHub 部署完整指南

## 📋 前置準備

### 1. 確認已安裝 Git
```bash
# 檢查 Git 版本
git --version

# 如果沒有安裝，請前往下載：
# https://git-scm.com/downloads
```

### 2. 確認有 GitHub 帳號
如果沒有，請前往註冊：https://github.com/signup

---

## 🎯 方法一：使用 GitHub Desktop（推薦給新手）

### Step 1: 下載 GitHub Desktop
https://desktop.github.com/

### Step 2: 登入 GitHub 帳號
打開 GitHub Desktop → File → Options → Sign in

### Step 3: 創建新 Repository
1. File → New Repository
2. 填寫資訊：
   - **Name**: `unicorn-masterclass` 或 `tutorabc-unicorn-story`
   - **Description**: 獨角獸養成術 - 楊正大博士的創業心法
   - **Local Path**: 選擇你的項目文件夾
   - ✅ Initialize this repository with a README（取消勾選，我們已有）
   - **Git ignore**: None
   - **License**: MIT License

### Step 4: 添加文件
1. 將所有項目文件複製到該文件夾
2. GitHub Desktop 會自動偵測變更

### Step 5: Commit
1. 查看 Changes 標籤
2. 確認所有文件都被選中
3. 在左下角填寫：
   - **Summary**: `Initial commit: 獨角獸養成術網站`
   - **Description**: `完整的互動式教育網站，包含動畫、圖表、PDF下載`
4. 點擊 "Commit to main"

### Step 6: Publish to GitHub
1. 點擊 "Publish repository"
2. 選擇：
   - ✅ Name: 確認名稱
   - ⬜ Keep this code private（取消勾選 = 公開）
   - Organization: 選擇你的個人帳號
3. 點擊 "Publish Repository"

### Step 7: 啟用 GitHub Pages
1. 前往 GitHub 網站上的 Repository
2. Settings → Pages
3. Source: 選擇 "Deploy from a branch"
4. Branch: 選擇 "main" + "/ (root)"
5. 點擊 Save

⏰ 等待 2-3 分鐘，你的網站就會上線！
📍 網址格式：`https://你的用戶名.github.io/repository名稱/`

---

## 🎯 方法二：使用命令行（進階）

### Step 1: 初始化 Git Repository

```bash
# 進入項目目錄
cd /path/to/unicorn-masterclass

# 初始化 Git
git init

# 添加所有文件
git add .

# 第一次提交
git commit -m "Initial commit: 獨角獸養成術網站

完整功能：
- 互動式一頁式網站
- 創業歷程時間軸
- 獨角獸3-2-1心法一圖流
- 5個Chart.js數據圖表
- PDF筆記下載功能
- 完整響應式設計
- 10+種動畫效果

Made with ❤️ by 111 N."
```

### Step 2: 在 GitHub 創建 Repository

1. 前往 https://github.com/new
2. 填寫：
   - **Repository name**: `unicorn-masterclass`
   - **Description**: 獨角獸養成術 - TutorABC創辦人楊正大博士的創業心法
   - **Public** （公開）
   - ⬜ 不要勾選 "Add a README file"
   - ⬜ 不要勾選 ".gitignore"
   - License: 可選 MIT License
3. 點擊 "Create repository"

### Step 3: 連接並推送

```bash
# 添加遠程倉庫（替換成你的用戶名和倉庫名）
git remote add origin https://github.com/你的用戶名/unicorn-masterclass.git

# 將主分支改名為 main
git branch -M main

# 推送到 GitHub
git push -u origin main

# 如果遇到認證問題，可能需要：
# 1. 輸入 GitHub 用戶名
# 2. 輸入 Personal Access Token（不是密碼！）
```

### Step 4: 啟用 GitHub Pages

```bash
# 或者使用 GitHub CLI（如果已安裝）
gh repo view --web

# 然後在網頁上：
# Settings → Pages → Source: main branch → Save
```

---

## 🔑 GitHub Personal Access Token 設定

如果需要 Token：

1. 前往 https://github.com/settings/tokens
2. Generate new token (classic)
3. 勾選 `repo` 權限
4. 生成並複製 Token
5. 在 git push 時使用 Token 作為密碼

---

## 📁 推薦的 .gitignore 文件

創建 `.gitignore` 文件，避免不必要的文件：

```gitignore
# macOS
.DS_Store

# Windows
Thumbs.db

# 編輯器
.vscode/
.idea/
*.swp
*.swo

# Node modules（如果之後添加）
node_modules/

# 日誌文件
*.log

# 臨時文件
*.tmp
*.bak
```

---

## 🎨 推薦的 Repository 設定

### 1. 添加 Topics（標籤）
在 Repository 首頁點擊 "Add topics"：
- `education`
- `startup`
- `entrepreneurship`
- `web-design`
- `interactive`
- `chartjs`
- `responsive-design`
- `tutosabc`
- `unicorn-company`

### 2. 編輯 Repository Description
```
🦄 獨角獸養成術 - TutorABC創辦人楊正大博士20年創業心法的互動式教育網站
```

### 3. 設定 Website
在 About 區塊添加你的 GitHub Pages URL

### 4. 添加 README Badge
在 README.md 頂部添加：
```markdown
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://你的用戶名.github.io/unicorn-masterclass/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue.svg)](https://github.com/你的用戶名/unicorn-masterclass)
```

---

## 🔄 後續更新流程

### 使用 GitHub Desktop
1. 修改文件
2. 在 GitHub Desktop 中查看變更
3. 填寫 Commit message
4. 點擊 "Commit to main"
5. 點擊 "Push origin"

### 使用命令行
```bash
# 查看變更
git status

# 添加變更
git add .

# 提交
git commit -m "更新描述"

# 推送
git push
```

---

## 🌐 自訂網域（可選）

如果你有自己的網域：

### Step 1: 添加 CNAME 文件
在項目根目錄創建 `CNAME` 文件：
```
yourdomain.com
```

### Step 2: 設定 DNS
在你的網域提供商設定：
```
Type: CNAME
Name: www
Value: 你的用戶名.github.io
```

### Step 3: GitHub 設定
Settings → Pages → Custom domain → 填入你的網域

---

## 🐛 常見問題排除

### 問題 1: Push 失敗 - 認證錯誤
**解決方法**：
```bash
# 使用 Personal Access Token
# 用戶名：你的GitHub用戶名
# 密碼：使用Token而非密碼
```

### 問題 2: GitHub Pages 404
**解決方法**：
1. 確認 Settings → Pages 已啟用
2. 確認分支選擇正確（main）
3. 等待 2-5 分鐘部署完成
4. 檢查 Actions 標籤查看部署狀態

### 問題 3: 圖片/CSS 無法載入
**解決方法**：
確保所有路徑都是相對路徑：
```html
<!-- ✅ 正確 -->
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js"></script>

<!-- ❌ 錯誤 -->
<link rel="stylesheet" href="/css/style.css">
```

### 問題 4: 外部圖片無法顯示
**原因**：Genspark API 圖片可能有跨域限制

**解決方法**：
下載圖片到本地：
```bash
# 創建 images 文件夾
mkdir images

# 下載圖片（使用瀏覽器或curl）
# 然後更新 HTML 中的圖片路徑
```

---

## 📊 部署檢查清單

部署前確認：

### 內容檢查
- [ ] 所有文字內容正確無誤
- [ ] 圖片可以正常顯示
- [ ] PDF 連結正確
- [ ] 所有內部錨點連結正常

### 功能檢查
- [ ] 導航選單正常
- [ ] 動畫效果流暢
- [ ] 圖表正確顯示
- [ ] 語錄輪播正常
- [ ] 回到頂部按鈕有效

### 響應式檢查
- [ ] 桌面端顯示正常
- [ ] 平板端顯示正常
- [ ] 手機端顯示正常
- [ ] 橫屏/直屏都正常

### 性能檢查
- [ ] 頁面載入快速（< 3秒）
- [ ] 無 console 錯誤
- [ ] 所有資源正常載入

---

## 🎓 部署後的工作

### 1. 測試網站
```
https://你的用戶名.github.io/unicorn-masterclass/
```

### 2. 分享給同學
可以準備一個短網址：
- 使用 bit.ly 或 reurl.cc
- 例如：`https://bit.ly/eiamba-unicorn`

### 3. QR Code
使用 QR Code 生成器：
- https://www.qr-code-generator.com/
- 方便手機掃描訪問

### 4. 收集反饋
創建一個 Google Form 收集同學意見：
- 哪些部分最有價值？
- 哪裡可以改進？
- 還想了解什麼內容？

---

## 💡 進階功能（可選）

### 1. 啟用 Google Analytics
在 `index.html` 的 `</head>` 前添加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. 添加 Open Graph 標籤
讓分享到社交媒體時更漂亮：
```html
<meta property="og:title" content="獨角獸養成術 - 楊正大博士創業心法">
<meta property="og:description" content="從零到十億美金的創業智慧">
<meta property="og:image" content="你的預覽圖片URL">
<meta property="og:url" content="你的網站URL">
```

### 3. 添加 Favicon
創建網站圖標：
```html
<link rel="icon" type="image/png" href="favicon.png">
```

---

## 📞 需要幫助？

### GitHub 官方資源
- [GitHub Pages 文檔](https://docs.github.com/en/pages)
- [Git 基礎教學](https://git-scm.com/book/zh-tw/v2)

### 社群支持
- [GitHub Community](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

---

## 🎉 完成！

恭喜你成功部署網站到 GitHub！

現在你可以：
1. ✅ 分享網址給台大EiMBA同學
2. ✅ 在履歷/作品集中展示
3. ✅ 持續更新維護
4. ✅ 收集反饋優化

記住你的網站網址：
```
https://你的用戶名.github.io/unicorn-masterclass/
```

---

<div align="center">

**Made with ❤️ by 111 N.**

祝部署順利！🚀🦄

</div>