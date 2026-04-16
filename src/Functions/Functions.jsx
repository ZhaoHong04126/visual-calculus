// src/Functions/Functions.jsx
import React from 'react';
import './Functions.css';

import WhatIsAFunction from './WhatIsAFunction';
import TrigFunctions from './TrigFunctions';
import ExpLogFunctions from './ExpLogFunctions';
import PowerPolynomialFunctions from './PowerPolynomialFunctions';
import InverseFunctions from './InverseFunctions';
import InverseTrigFunctions from './InverseTrigFunctions';
import HyperbolicFunctions from './HyperbolicFunctions';
import InverseHyperbolicFunctions from './InverseHyperbolicFunctions';

import SectionNav from '../components/SectionNav';

export default function Functions() {
  const sections = [
    { id: 'definition', title: '函數定義' },
    { id: 'power-poly', title: '冪函數 & 多項式' },
    { id: 'trig', title: '三角函數' },
    { id: 'exp-log', title: '指數 & 對數' },
    { id: 'inverse', title: '反函數' },
    { id: 'inverse-trig', title: '反三角函數' },
    { id: 'hyperbolic', title: '雙曲函數' },
    { id: 'inverse-hyperbolic', title: '反雙曲函數' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第一章：函數介紹</h1>
        <p>在探討無窮與極限之前，我們必須先熟悉這幾種在微積分中無處不在的基本函數與超越函數。</p>
      </header>

      <SectionNav sections={sections} />

      {/* 依序渲染這幾個小節 */}
      <div id="definition"><WhatIsAFunction /></div>
      <div id="power-poly"><PowerPolynomialFunctions /></div>
      <div id="trig"><TrigFunctions /></div>
      <div id="exp-log"><ExpLogFunctions /></div>
      <div id="inverse"><InverseFunctions /></div>
      <div id="inverse-trig"><InverseTrigFunctions /></div>
      <div id="hyperbolic"><HyperbolicFunctions /></div>
      <div id="inverse-hyperbolic"><InverseHyperbolicFunctions /></div>

    </div>
  );
}