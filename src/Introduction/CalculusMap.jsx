// src/Introduction/CalculusMap.jsx
import React from 'react';

export default function CalculusMap() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title">2. 學習地圖 (Calculus Map)</h2>
      <p className="mb-6">
        本網站的架構將依照標準大學微積分的脈絡展開，分為「單變數微積分」與「多變數微積分」兩大部分：
      </p>

      <div className="map-container">
        {/* Part 1 */}
        <div className="map-part">
          <h3 className="map-part-title">Part 1: 單變數微積分 (Single Variable)</h3>
          <div className="map-flow">
            <div className="map-node">1. 極限 (Limit) & 連續 (Continuity)</div>
            <div className="map-arrow">↓</div>
            <div className="map-split">
              <div className="map-node flex-1">2. 微分 (Differentiation)</div>
              <div className="map-node flex-1">3. 積分 (Integrability)</div>
            </div>
            <div className="map-arrow">↓</div>
            <div className="map-node highlight">4. 微積分基本定理 (Fundamental Theorem of Calculus)</div>
            <div className="map-arrow">↓</div>
            <div className="map-node">5. 數列與級數 (Sequence and Series)</div>
            <div className="map-arrow">↓</div>
            <div className="map-node">6. 微分方程基礎 (Differential Equations)</div>
          </div>
        </div>

        {/* Part 2 */}
        <div className="map-part mt-8">
          <h3 className="map-part-title">Part 2: 多變數微積分 (Multivariable)</h3>
          <div className="map-flow">
            <div className="map-split">
              <div className="map-node flex-1">7. 偏微分 (Partial Differentiation)</div>
              <div className="map-node flex-1">8. 重積分 (Multiple Integration)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
