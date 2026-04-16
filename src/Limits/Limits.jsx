import React from 'react';
import './Limits.css'; 

import LimitDefinition from './LimitDefinition';
import LimitLaws from './LimitLaws';
import EpsilonDeltaProof from './EpsilonDeltaProof';
import LimitTypes from './LimitTypes'; 
import LimitsAtInfinity from './LimitsAtInfinity'; 
import Asymptotes from './Asymptotes';


import SectionNav from '../components/SectionNav';

export default function Limits() {
  const sections = [
    { id: 'definition', title: '直觀定義' },
    { id: 'laws', title: '運算法則' },
    { id: 'proof', title: '嚴格證明' },
    { id: 'types', title: '極限類型' },
    { id: 'infinity', title: '無窮遠處' },
    { id: 'asymptotes', title: '漸近線' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第二章：極限 (Limits)</h1>
        <p>本章節將探討函數在某一點的趨勢，這是理解微積分的基礎方式。</p>
      </header>

      <SectionNav sections={sections} />

      <div id="definition"><LimitDefinition /></div>
      <div id="laws"><LimitLaws /></div>
      <div id="proof"><EpsilonDeltaProof /></div>
      <div id="types"><LimitTypes /></div> 
      <div id="infinity"><LimitsAtInfinity /></div>
      <div id="asymptotes"><Asymptotes /></div>
      
    </div>
  );
}