// src/Functions/Functions.jsx
import React from 'react';
import './Functions.css';

import TrigFunctions from './TrigFunctions';
import InverseFunctions from './InverseFunctions';
import ExpLogFunctions from './ExpLogFunctions';
import InverseTrigFunctions from './InverseTrigFunctions'; // 引入新元件

export default function Functions() {
  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第一章：函數介紹</h1>
        <p>在探討無窮與極限之前，我們必須先熟悉這幾種在微積分中無處不在的基本函數與超越函數。</p>
      </header>

      {/* 依序渲染這幾個小節 */}
      <TrigFunctions />
      <ExpLogFunctions />
      <InverseFunctions />
      <InverseTrigFunctions />

    </div>
  );
}