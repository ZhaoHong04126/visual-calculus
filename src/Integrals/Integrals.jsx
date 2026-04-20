// src/Integrals/Integrals.jsx
import React from 'react';
import ComingSoon from '../components/ComingSoon';

export default function Integrals() {
  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第七章：反導數與積分</h1>
        <p className="text-lg mt-2 text-gray-600">
          從無限切割到完美累積，探索如何計算圖形下的面積並還原函數的變化。
        </p>
      </header>

      <ComingSoon chapterName="反導數與積分" />
    </div>
  );
}
