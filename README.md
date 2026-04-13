# 📐 微積分視覺化筆記 (Visual Calculus Notes)

這是一個專為大學微積分初學者打造的「互動式線上參考手冊」。揚棄傳統紙本講義的靜態限制，本專案結合了嚴謹的數學定義（$\epsilon-\delta$）與動態的幾何視覺化，幫助學習者直觀地理解微積分的核心概念。

🌐 **[點此觀看線上版本](https://visual-calculus.vercel.app/)**

---

## ✨ 專案特色 (Features)

* **互動式視覺探索**：包含反函數的對稱性、極限的逼近過程、漸近線行為以及夾擠定理的動態展示，讓抽象數學幾何化。
* **學術級公式渲染**：全面改用自訂的 KaTeX 原生渲染元件，提供媲美教科書等級的 LaTeX 數學公式排版，並一勞永逸地解決中文（CJK）在嚴格模式下的衝突警告。
* **現代化閱讀體驗**：採用「現代簡潔風」設計，具備舒適的留白、卡片化重點整理，以及便利的左上角懸浮導覽選單 (FAB)。
* **響應式設計 (RWD)**：完美支援桌機與行動裝置的閱讀。

## 📚 目錄架構 (Contents)

目前專案包含以下核心章節，並持續擴充中：

* **第零章：微積分簡介**
  * 微分與積分的幾何意義
  * 微積分學習地圖
* **第一章：微積分預備知識 (函數)**
  * 反函數 (Inverse Functions) 與一對一測試
  * 指數與對數函數 (尤拉數 $e$ 的幾何與代數觀點)
  * 反三角函數 (定義域限制與直角三角形法)
* **第二章：極限 (Limits)**
  * 函數極限的直觀定義
  * 極限的運算法則與夾擠定理 (Squeeze Theorem)
  * 單側極限與極限存在的條件
  * 無窮極限與漸近線的嚴格定義 ($\epsilon-M$)

## 🛠️ 技術棧 (Tech Stack)

* **前端框架**：React.js
* **建置工具**：Vite
* **路由管理**：React Router DOM
* **數學公式排版**：KaTeX (自訂無警告封裝元件 `Math.jsx`)
* **部署平台**：Vercel (支援 GitHub Actions / Pages 等)

## 🚀 本地端執行 (Local Development)

如果你想在自己的電腦上運行或修改此專案，請跟著以下步驟操作：

1. **安裝依賴套件**
   ```bash
   npm install
   ```

## 📁 專案檔案結構 (Project Structure)

本專案採用高度模組化的架構，確保「一個核心觀念對應一個獨立元件」，並以章節為單位劃分資料夾：

```text
visual-calculus/
├── public/                 # 靜態資源
├── src/
│   ├── assets/             # 圖片或其他共用資源
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/         # 共用元件
│   │   ├── ComingSoon.css           # 「即將推出」頁面樣式
│   │   ├── ComingSoon.jsx           # 「即將推出」佔位元件
│   │   └── Math.jsx                 # 自訂 KaTeX 封裝（無警告）
│   │
│   ├── App.jsx             # 網站主入口：側邊欄導覽列與路由設定 (Routes)
│   ├── App.css             # 全域樣式：雙欄獨立捲動、響應式側邊欄等設定
│   ├── index.css           # 全域基礎重置樣式
│   ├── main.jsx            # React 掛載點
│   │
│   ├── Review/             # 複習：國高中數學
│   │   ├── Review.css               # 章節專屬樣式
│   │   ├── Review.jsx               # 章節主檔
│   │   ├── TrigHexagon.css          # 三角函數六邊形視覺化樣式
│   │   ├── TrigHexagon.jsx          # 三角函數六邊形互動元件
│   │   ├── VennDiagram.css          # 文氏圖樣式
│   │   └── VennDiagram.jsx          # 文氏圖元件
│   │
│   ├── Introduction/       # 第零章：微積分簡介
│   │   ├── CalculusMap.jsx          # 學習地圖
│   │   ├── Introduction.css         # 章節專屬樣式
│   │   ├── Introduction.jsx         # 章節主檔
│   │   └── WhatIsCalculus.jsx       # 何謂微積分 (微分 vs 積分)
│   │
│   ├── Functions/          # 第一章：微積分預備知識 (函數)
│   │   ├── ExpLogFunctions.jsx      # 指數函數、尤拉數 e 與自然對數
│   │   ├── Functions.css            # 章節專屬樣式
│   │   ├── Functions.jsx            # 章節主檔
│   │   ├── InverseFunctions.jsx     # 反函數與一對一測試
│   │   └── InverseTrigFunctions.jsx # 反三角函數與幾何法
│   │
│   ├── Limits/             # 第二章：極限與連續
│   │   ├── Asymptotes.jsx           # 垂直、水平與斜漸近線
│   │   ├── Continuity.jsx           # 連續性定義與判斷
│   │   ├── DiscontinuityVisualizer.jsx # 不連續點視覺化
│   │   ├── EpsilonDeltaProof.jsx    # 嚴格 ε-δ 證明
│   │   ├── LimitDefinition.jsx      # 極限直觀定義與記號
│   │   ├── LimitLaws.jsx            # 運算法則與夾擠定理
│   │   ├── Limits.css               # 章節專屬樣式
│   │   ├── Limits.jsx               # 章節主檔
│   │   ├── LimitsAtInfinity.jsx     # 無窮遠處的極限
│   │   └── LimitTypes.jsx           # 單側極限與無窮極限
│   │
│   ├── Derivatives/        # 第三章：導數與微分
│   │   ├── ChainRule.jsx            # 鏈鎖律
│   │   ├── DerivativeDefinition.jsx # 導數定義與極限表示
│   │   ├── Derivatives.jsx          # 章節主檔
│   │   ├── DifferentiationRules.jsx # 微分公式整理
│   │   ├── HigherOrderDerivatives.jsx # 高階導數
│   │   └── ProofBox.css             # 證明框樣式
│   │
│   ├── Integrals/          # 第四章：積分學
│   │   └── Integrals.jsx            # 章節主檔（開發中）
│   │
│   └── Series/             # 第五章：無窮級數
│       └── Series.jsx               # 章節主檔（開發中）
│
├── .gitignore              # Git 版本控制忽略清單
├── eslint.config.js        # ESLint 程式碼品質檢查設定檔
├── index.html              # 網頁基礎模板
├── package-lock.json       # npm 套件版本鎖定檔
├── package.json            # 專案依賴套件與腳本指令
├── README.md               # 專案說明文件 (就是這份文件！)
└── vite.config.js          # Vite 打包配置與服務設定
```