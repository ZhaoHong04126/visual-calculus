import React from 'react';
import './Continuity.css'; 

import ContinuityBasics from './ContinuityBasics';
import ContinuityProperties from './ContinuityProperties';
import ImportantTheorems from './ImportantTheorems';

export default function Continuity() {
  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第三章：連續 (Continuity)</h1>
        <p>本章節將深入探討函數的連續性質及其相關的重要定理。</p>
      </header>

      <ContinuityBasics />
      <ContinuityProperties />
      <ImportantTheorems />
      
    </div>
  );
}
