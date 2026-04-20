// src/Derivatives/Derivatives.jsx
import React from 'react';
import DerivativeDefinition from './DerivativeDefinition';
import DifferentiationRules from './DifferentiationRules';
import ChainRule from './ChainRule';
import HigherOrderDerivatives from './HigherOrderDerivatives';
import InverseDerivatives from './InverseDerivatives';
import HyperbolicDerivatives from './HyperbolicDerivatives';
import '../Limits/Limits.css'; 

import SectionNav from '../components/SectionNav';

export default function Derivatives() {
  const sections = [
    { id: 'def', title: '導數定義' },
    { id: 'rules', title: '微分公式' },
    { id: 'chain', title: '鏈鎖律' },
    { id: 'higher', title: '高階導數' },
    { id: 'inverse-diff', title: '反函數微分' },
    { id: 'hyperbolic', title: '雙曲函數' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第五章：導數與微分</h1>
        <p className="text-lg mt-2 text-gray-600">
          從割線到切線，從平均變化到瞬間變化，見證微積分最迷人的魔法。
        </p>
      </header>

      <SectionNav sections={sections} />

      <div id="def"><DerivativeDefinition /></div>
      <div id="rules"><DifferentiationRules /></div>
      <div id="chain"><ChainRule /></div>
      <div id="higher"><HigherOrderDerivatives /></div>
      <div id="inverse-diff"><InverseDerivatives /></div>
      <div id="hyperbolic"><HyperbolicDerivatives /></div>
      
    </div>
  );
}