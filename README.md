# 📘 大學微積分線上學習網 (Calculus Learning Platform)

這是一個基於 React 開發的微積分知識整理網站。專案的目標是將大學微積分的龐雜內容（定義、定理、公式、證明）有系統地組織起來，提供學生一個乾淨、易讀且排版優美的線上參考手冊。

## 🛠 技術堆疊

* **核心框架:** React (Vite)
* **路由管理:** React Router
* **數學公式渲染:** KaTeX (`react-katex`)
* **樣式:** CSS (每個主題模組獨立管理)

## 📁 專案檔案結構

本專案採用 **Feature-based (依主題模組化)** 的目錄設計，嚴格遵守以下兩大開發規範：
1. **一個主題一個資料夾**：所有該主題相關的檔案皆集中管理。
2. **一個小節一個元件**：將冗長的內容拆分為獨立的 `.jsx` 檔案，最後在主題主檔中組合。

```text
calculus-website/
├── public/                 # 靜態資源 (如 favicon)
├── index.html              # HTML 進入點
├── vite.config.js          # Vite 設定檔
├── package.json            # 專案依賴套件
├── README.md               # 專案說明文件
└── src/
    ├── App.jsx             # 應用程式主要路由設定
    ├── main.jsx            # React 渲染核心
    ├── index.css           # 全域樣式 (Global CSS)
    ├── components/         # 跨主題共用元件 (如 Navbar, 共用的排版區塊)
    │   ├── Navbar.jsx
    │   └── Layout.jsx
    │
    ├── Limits/                 # 📖 主題：極限與連續
    │   ├── Limits.jsx          # 主題主檔：負責引入並組合各小節
    │   ├── Limits.css          # 主題專屬樣式
    │   ├── LimitDefinition.jsx # 小節 1：極限的嚴格定義
    │   ├── LimitProperties.jsx # 小節 2：極限運算法則
    │   └── SqueezeTheorem.jsx  # 小節 3：夾擠定理
    │
    ├── Derivatives/            # 📖 主題：微分學
    │   ├── Derivatives.jsx     # 主題主檔
    │   ├── Derivatives.css     # 主題專屬樣式
    │   ├── DerivDefinition.jsx # 小節 1：導數的定義
    │   ├── PowerRule.jsx       # 小節 2：冪法則
    │   └── ChainRule.jsx       # 小節 3：連鎖律
    │
    └── Integrals/              # 📖 主題：積分學
        ├── Integrals.jsx       # 主題主檔
        ├── Integrals.css       # 主題專屬樣式
        └── RiemannSum.jsx      # 小節 1：黎曼和