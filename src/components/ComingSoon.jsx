import React from 'react';
import './ComingSoon.css';

export default function ComingSoon({ chapterName, message }) {
  return (
    <div className="coming-soon-wrapper">
      <div className="coming-soon-card">
        <div className="icon-container">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="construct-icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
        <h2 className="coming-soon-title">
          {chapterName ? `${chapterName}：內容建置中` : '章節建置中...'}
        </h2>
        <p className="coming-soon-message">
          {message || '為了給您最優質的微積分學習體驗，這個章節的內容我們正在精心撰寫與排版中。敬請期待後續更新！'}
        </p>
        <div className="status-badge">
          <span className="pulse-dot"></span>
          施工中 Work In Progress
        </div>
        <div className="progress-track">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
}
