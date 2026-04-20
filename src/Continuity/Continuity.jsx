import React from 'react';
import './Continuity.css'; 

import ContinuityBasics from './ContinuityBasics';
import ContinuityProperties from './ContinuityProperties';
import ImportantTheorems from './ImportantTheorems';

import SectionNav from '../components/SectionNav';

export default function Continuity() {
  const sections = [
    { id: 'basics', title: '基本定義' },
    { id: 'props', title: '連續性質' },
    { id: 'theorems', title: '重要定理' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第四章：連續 (Continuity)</h1>
        <p>本章節將深入探討函數的連續性質及其相關的重要定理。</p>
      </header>

      <SectionNav sections={sections} />

      <div id="basics"><ContinuityBasics /></div>
      <div id="props"><ContinuityProperties /></div>
      <div id="theorems"><ImportantTheorems /></div>
      
    </div>
  );
}
