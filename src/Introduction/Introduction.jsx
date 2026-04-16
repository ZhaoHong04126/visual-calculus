// src/Introduction/Introduction.jsx
import React from 'react';
import './Introduction.css';

import WhatIsCalculus from './WhatIsCalculus';
import CalculusMap from './CalculusMap';

import SectionNav from '../components/SectionNav';

export default function Introduction() {
  const sections = [
    { id: 'what-is', title: '何謂微積分' },
    { id: 'map', title: '學習地圖' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第零章：微積分簡介</h1>
        <p>這是一切的起點。在深入各種繁複的運算之前，我們需要先了解微積分的本質與全貌。</p>
      </header>

      <SectionNav sections={sections} />

      <div id="what-is"><WhatIsCalculus /></div>
      <div id="map"><CalculusMap /></div>
    </div>
  );
}