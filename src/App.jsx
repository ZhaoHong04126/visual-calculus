import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css'; 

// 引入各個主題的進入點元件
import Review from './Review/Review';
import Introduction from './Introduction/Introduction';
import Functions from './Functions/Functions';
import Limits from './Limits/Limits';
import Derivatives from './Derivatives/Derivatives';
// import Integrals from './Integrals/Integrals';

export default function App() {
  // 控制側邊欄開關的狀態，預設為開啟 (true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // 切換側邊欄的函數
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      
      {/* 左側導覽列：透過動態 class 控制展開或隱藏 */}
      <nav className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">微積分參考手冊</h2>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/review" className={({ isActive }) => isActive ? "active-link" : ""}>
              複習：國高中數學
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} end>
              第零章：微積分簡介
            </NavLink>
          </li>
          <li>
            <NavLink to="/functions" className={({ isActive }) => isActive ? "active-link" : ""}>
              第一章：微積分預備知識
            </NavLink>
          </li>
          <li>
            <NavLink to="/limits" className={({ isActive }) => isActive ? "active-link" : ""}>
              第二章：極限與連續
            </NavLink>
          </li>
           <li>
            <NavLink to="/derivatives" className={({ isActive }) => isActive ? "active-link" : ""}>
              第二章：微分學
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/integrals" className={({ isActive }) => isActive ? "active-link" : ""}>
              第三章：積分學
            </NavLink>
          </li> */}
        </ul>
      </nav>

      {/* 右側主要內容區 */}
      <main className="main-content">
        {/* 懸浮的選單切換按鈕 */}
        <button className={`toggle-btn ${isSidebarOpen ? 'shifted' : ''}`} onClick={toggleSidebar} title={isSidebarOpen ? '隱藏選單' : '展開選單'}>
          {isSidebarOpen ? '❯' : '☰'} 
        </button>

        <div className="content-wrapper">
          <Routes>
            <Route path="/review" element={<Review />} />
            <Route path="/" element={<Introduction />} />
            <Route path="/functions" element={<Functions />} />
            <Route path="/limits" element={<Limits />} />
            <Route path="/derivatives" element={<Derivatives />} />
            {/* <Route path="/integrals" element={<Integrals />} /> */}
          </Routes>
        </div>
      </main>

    </div>
  );
}