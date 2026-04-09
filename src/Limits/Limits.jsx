// src/Limits/Limits.jsx
import React from 'react';
import './Limits.css'; 

import LimitDefinition from './LimitDefinition';
import EpsilonDeltaProof from './EpsilonDeltaProof';
import LimitTypes from './LimitTypes'; 
import LimitsAtInfinity from './LimitsAtInfinity'; // 引入第4節
import Asymptotes from './Asymptotes';             // 引入第5節

export default function Limits() {
  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第一章：極限與連續</h1>
        <p>本章節將探討函數在某一點的趨勢，這是理解微分與積分的基礎。</p>
      </header>

      <LimitDefinition />
      <EpsilonDeltaProof />
      <LimitTypes /> 
      <LimitsAtInfinity />
      <Asymptotes />
      
    </div>
  );
}