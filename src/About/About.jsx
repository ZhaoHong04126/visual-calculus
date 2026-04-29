import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const tocData = [
    {
      chapter: "第零章：微積分簡介",
      path: "/introduction",
      sections: [
        { id: "what-is", title: "何謂微積分" },
        { id: "map", title: "學習地圖" },
      ]
    },
    {
      chapter: "第一章：函數介紹",
      path: "/functions",
      sections: [
        { id: "definition", title: "函數定義" },
        { id: "power-poly", "title": "冪函數 & 多項式" },
        { id: "trig", "title": "三角函數" },
        { id: "exp-log", "title": "指數 & 對數" },
        { id: "inverse", "title": "反函數" },
        { id: "inverse-trig", "title": "反三角函數" },
        { id: "hyperbolic", "title": "雙曲函數" },
        { id: "inverse-hyperbolic", "title": "反雙曲函數" },
      ]
    },
    {
      chapter: "第二章：極限",
      path: "/limits",
      sections: [
        { id: "definition", "title": "直觀定義" },
        { id: "laws", "title": "運算法則" },
        { id: "proof", "title": "嚴格證明" },
        { id: "types", "title": "極限類型" },
        { id: "infinity", "title": "無窮遠處" },
        { id: "asymptotes", "title": "漸近線" },
      ]
    },
    {
      chapter: "第三章：連續",
      path: "/continuity",
      sections: [
        { id: "basics", "title": "基本定義" },
        { id: "props", "title": "連續性質" },
        { id: "theorems", "title": "重要定理" },
      ]
    },
    {
      chapter: "第四章：導數與微分",
      path: "/derivatives",
      sections: [
        { id: "def", "title": "導數定義" },
        { id: "rules", "title": "微分公式" },
        { id: "chain", "title": "鏈鎖律" },
        { id: "higher", "title": "高階導數" },
        { id: "inverse-diff", "title": "反函數微分" },
        { id: "hyperbolic", "title": "雙曲函數" },
      ]
    },
    {
      chapter: "第五章：微分的應用",
      path: "/derivatives-apps",
      sections: [
        { id: "mvt", "title": "均值定理" },
        { id: "monotonicity", "title": "單調性" },
        { id: "extrema", "title": "極值" },
        { id: "concavity", "title": "凹凸性" },
        { id: "lhopital", "title": "羅必達" },
        { id: "optimization", "title": "最佳化" },
        { id: "linear", "title": "線性逼近" },
        { id: "newton", "title": "牛頓法" },
      ]
    },
    {
      chapter: "第六章：反導數與積分",
      path: "/integrals",
      sections: [
        { id: "definite", "title": "黎曼和與定積分" },
        { id: "antiderivatives", "title": "反導數與不定積分" },
        { id: "ftc", "title": "微積分基本定理" },
      ]
    },
    {
      chapter: "第七章：積分技巧",
      path: "/techniques",
      sections: [
        { id: "substitution", "title": "變數變換法" },
        { id: "parts", "title": "分部積分法" },
        { id: "trig-integrals", "title": "三角函數的積分" },
        { id: "trig-sub", "title": "三角變換法" },
      ]
    },
    {
      chapter: "第八章：積分的應用",
      path: "/integrals-apps",
      sections: [
        { id: "coming-soon", "title": "即將推出" }
      ]
    },
    {
      chapter: "第九章：公式表 / 題庫",
      path: "/reference",
      sections: [
        { id: "operations", "title": "運算法則" },
        { id: "theorems", "title": "重要定理" },
        { id: "formulas", "title": "公式表" },
        { id: "questions", "title": "題庫" }
      ]
    }
  ];

  return (
    <div className="about-container">
      <section className="about-section toc-section">
        <div className="section-header">
          <span className="section-tag">Directory</span>
          <h2 className="section-title">📑 網站目錄總覽</h2>
          <p className="toc-subtitle">一覽微積分核心架構，點擊快速前往各章節與核心單元。</p>
        </div>

        <div className="toc-grid">
          {tocData.map((chapter, idx) => (
            <div key={idx} className="toc-card">
              <Link to={chapter.path} className="toc-chapter-title">
                {chapter.chapter}
              </Link>
              <ul className="toc-sections-list">
                {chapter.sections.map((section, sIdx) => (
                  <li key={sIdx}>
                    <Link to={`${chapter.path}#${section.id}`} className="toc-section-link">
                      <span className="toc-bullet"></span>
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
        <div className="footer-main-layout">
          <div className="footer-logo-side">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40" height="40">
              <defs>
                <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <rect width="512" height="512" rx="128" fill="url(#footerLogoGrad)" />
              <path d="M160 120 L352 120 L192 256 L352 392 L160 392" fill="none" stroke="white" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="footer-info-side">
            <div className="footer-contact-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <span>Gmail：<a href="mailto:huaug9672@gmail.com">huaug9672@gmail.com</a></span>
            </div>
            <div className="footer-contact-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3.5 1.5a10.8 10.8 0 0 0-6 0C7 2 6 2 6 2c-.28 1.15-.28 2.35 0 3.5a4.6 4.6 0 0 0-1 3.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              <span>GitHub：<a href="https://github.com/ZhaoHong04126" target="_blank" rel="noopener noreferrer">ZhaoHong04126</a></span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-brand">
          <p className="footer-credit">Made with ❤️ for Calculus Learners.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;

