import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// 引入各個主題的進入點元件
import Introduction from './Introduction/Introduction';
import About from './About/About';
import Functions from './Functions/Functions';
import Limits from './Limits/Limits';
import Continuity from './Continuity/Continuity';
import Derivatives from './Derivatives/Derivatives';
import DerivativesApps from './DerivativesApps/DerivativesApps';
import Integrals from './Integrals/Integrals';
import IntegralsApps from './IntegralsApps/IntegralsApps';
import Formulas from './Formulas/Formulas';

// ChatGPT 風格側邊欄圖示（兩欄面板）
function SidebarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
    </svg>
  );
}

export default function App() {
  // 控制側邊欄開關的狀態，預設為開啟 (桌面版)，手機版預設為隱藏
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth > 768);

  // 切換側邊欄的函數
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">


      {/* 手機版遮罩：點擊可關閉側邊欄 */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} aria-hidden="true" />
      )}

      {/* 手機版浮動開啟按鈕（側邊欄關閉時顯示） */}
      <button
        className={`mobile-open-btn${isSidebarOpen ? ' hidden' : ''}`}
        onClick={toggleSidebar}
        title="展開選單"
        aria-label="展開選單"
      >
        <SidebarIcon />
      </button>

      {/* 左側導覽列：透過動態 class 控制展開或隱藏 */}
      <nav className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">微積分參考手冊</h2>
          {/* 手機版關閉按鈕 - 側邊欄右上角 */}
          <button className="sidebar-toggle-btn" onClick={toggleSidebar} title="隱藏選單" aria-label="隱藏選單">
            <SidebarIcon />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} end>
              歡迎使用
            </NavLink>
          </li>
          <li>
            <NavLink to="/introduction" className={({ isActive }) => isActive ? "active-link" : ""}>
              第零章：微積分簡介
            </NavLink>
          </li>
          <li>
            <NavLink to="/functions" className={({ isActive }) => isActive ? "active-link" : ""}>
              第一章：函數介紹
            </NavLink>
          </li>
          <li>
            <NavLink to="/limits" className={({ isActive }) => isActive ? "active-link" : ""}>
              第二章：極限
            </NavLink>
          </li>
          <li>
            <NavLink to="/continuity" className={({ isActive }) => isActive ? "active-link" : ""}>
              第三章：連續
            </NavLink>
          </li>
          <li>
            <NavLink to="/derivatives" className={({ isActive }) => isActive ? "active-link" : ""}>
              第四章：導數與微分
            </NavLink>
          </li>
          <li>
            <NavLink to="/derivatives-apps" className={({ isActive }) => isActive ? "active-link" : ""}>
              第五章：微分的應用
            </NavLink>
          </li>
          <li>
            <NavLink to="/integrals" className={({ isActive }) => isActive ? "active-link" : ""}>
              第六章：反導數與積分
            </NavLink>
          </li>
          <li>
            <NavLink to="/integrals-apps" className={({ isActive }) => isActive ? "active-link" : ""}>
              第七章：積分的應用
            </NavLink>
          </li>
          <li>
            <NavLink to="/formulas" className={({ isActive }) => isActive ? "active-link" : ""}>
              第八章：公式整理
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* 右側主要內容區 */}
      <main className="main-content">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/functions" element={<Functions />} />
            <Route path="/limits" element={<Limits />} />
            <Route path="/continuity" element={<Continuity />} />
            <Route path="/derivatives" element={<Derivatives />} />
            <Route path="/derivatives-apps" element={<DerivativesApps />} />
            <Route path="/integrals" element={<Integrals />} />
            <Route path="/integrals-apps" element={<IntegralsApps />} />
            <Route path="/formulas" element={<Formulas />} />
          </Routes>
        </div>
      </main>

    </div>
  );
}