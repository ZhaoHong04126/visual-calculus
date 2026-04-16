// src/Series/Series.jsx
import React from 'react';
import ComingSoon from '../components/ComingSoon';

export default function Series() {
  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第六章：級數與泰勒展開</h1>
        <p className="text-lg mt-2 text-gray-600">
          將複雜的函數拆解為簡單多項式的無限疊加，探索逼近與收斂的藝術。
        </p>
      </header>

      <ComingSoon chapterName="級數與泰勒展開" />
    </div>
  );
}
