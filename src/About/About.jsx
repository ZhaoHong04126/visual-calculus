import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">

      <section className="about-section">
        <div className="section-header">
          <span className="section-tag">About</span>
          <h2 className="section-title">網頁介紹與宗旨</h2>
        </div>
        <div className="content-card">
          <p>
            在微積分的學習過程中，許多抽象的概念（如極限的逼近、導數的變化率、積分的面積累積）往往難以單憑文字與靜態圖像理解。
            本網頁致力於揚棄傳統講義的靜態限制，結合了嚴謹的數學邏輯（如 ε-δ 證明）與<b>動態幾何視覺化</b>，幫助學習者直觀地建立對微積分核心概念的深度理解。
          </p>
        </div>
      </section>

      <section className="about-features">
        <h2 className="section-title center">✨ 專案亮點</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🕹️</div>
            <h3>互動式幾何探索</h3>
            <p>動態展示反函數對稱性、極限逼近過程、漸近線行為以及夾擠定理，讓抽象代數瞬間具象化。</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📍</div>
            <h3>智慧導覽體驗</h3>
            <p>全域側邊欄與各章節頂部的「快速導覽列」，支援平滑捲動，讓您可以精準對位教學重點。</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🖋️</div>
            <h3>教科書級公式渲染</h3>
            <p>採用 KaTeX 渲染引擎，呈現優雅的 LaTeX 聖經級數學排版，完美呈現公式之美。</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h3>頂級響應式設計</h3>
            <p>無論是桌機還是手機，均能自動調整排版與圖表大小，隨時隨地同步學習。</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">📚 如何開始？</h2>
        <div className="start-guide">
          <div className="guide-card">
            <div className="guide-number">0</div>
            <div className="guide-text">
              <h4>第零章：微積分簡介</h4>
              <p>從幾何本質出發，快速掌握微積分的發展與地圖。</p>
            </div>
          </div>
          <div className="guide-card">
            <div className="guide-number">1</div>
            <div className="guide-text">
              <h4>基礎章節（1-3章）</h4>
              <p>建立函數、極限與連續性的嚴格基礎，這是通往導與積的門票。</p>
            </div>
          </div>
          <div className="guide-card">
            <div className="guide-number">2</div>
            <div className="guide-text">
              <h4>核心應用（4-8章）</h4>
              <p>深入探討微分與積分的層層應用，並提供精簡的公式整理，解決現代科學的核心問題。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">🔗 資料參考與資源</h2>
        <div className="resources-list-compact">
          <a href="#" className="resource-link-btn">📚 作者的學校上課講義</a>
          <a href="https://zh.wikipedia.org/zh-tw/%E5%BE%AE%E7%A7%AF%E5%88%86%E5%AD%A6" target="_blank" rel="noopener noreferrer" className="resource-link-btn">🌐 維基百科：微積分</a>
          <a href="https://zh.wikipedia.org/zh-tw/%E5%87%BD%E6%95%B0" target="_blank" rel="noopener noreferrer" className="resource-link-btn">📐 維基百科：函數</a>
          <a href="https://www.math.ntu.edu.tw/~hchu/Calculus/" target="_blank" rel="noopener noreferrer" className="resource-link-btn">🎓 台大數學系</a>
        </div>
      </section>

      <footer className="about-footer">
        <p>Made with ❤️ for Calculus Learners.</p>
      </footer>
    </div>
  );
};

export default About;
