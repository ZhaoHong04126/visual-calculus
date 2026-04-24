import React from 'react';
import SectionNav from '../components/SectionNav';
import LimitSummary from './LimitSummary';
import ContinuitySummary from './ContinuitySummary';
import '../Limits/Limits.css';
import './Formulas.css';

export default function Formulas() {
  const sections = [
    { id: 'limit-summary', title: '極限公式表' },
    { id: 'continuity-summary', title: '連續性質表' },
    { id: 'future', title: '更多內容 (待續)' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第十章：公式整理</h1>
        <p className="text-lg mt-2 text-gray-600">
          針對微積分核心公式進行系統性整理，包含極限法則、連續性判定與重要生存定理。
        </p>
      </header>

      <SectionNav sections={sections} />

      <div id="limit-summary"><LimitSummary /></div>
      <div id="continuity-summary" className="mt-12 pt-12 border-t-2 border-gray-100">
        <ContinuitySummary />
      </div>
      
      <div id="future" className="mt-12 p-8 bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 text-center">
        <h2 className="text-2xl font-bold text-gray-400">更多公式發展中...</h2>
        <p className="text-gray-400 mt-2">包含微分公式、積分公式及後續章節整理，敬請期待。</p>
      </div>
    </div>
  );
}
