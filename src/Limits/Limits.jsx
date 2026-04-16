import React from 'react';
import './Limits.css'; 

import LimitDefinition from './LimitDefinition';
import LimitLaws from './LimitLaws';
import EpsilonDeltaProof from './EpsilonDeltaProof';
import LimitTypes from './LimitTypes'; 
import LimitsAtInfinity from './LimitsAtInfinity'; 
import Asymptotes from './Asymptotes';


export default function Limits() {
  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第二章：極限 (Limits)</h1>
        <p>本章節將探討函數在某一點的趨勢，這是理解微積分的基礎方式。</p>
      </header>

      <LimitDefinition />
      <LimitLaws />
      <EpsilonDeltaProof />
      <LimitTypes /> 
      <LimitsAtInfinity />
      <Asymptotes />
      
    </div>
  );
}