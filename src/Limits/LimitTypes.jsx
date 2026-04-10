// src/Limits/LimitTypes.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function LimitTypes() {
  return (
    <section className="subsection">
      <h2 className="section-title">3. 極限的種類：單側極限與無窮極限</h2>
      
      {/* 3.1 單側極限 */}
      <div className="content-block">
        <h3>3.1 單側極限 (One-Sided Limits)</h3>
        <p>
          有時候函數在某一點的行為取決於我們是從左側還是右側靠近。
        </p>
        
        <div className="math-box">
          <p><strong>右極限：</strong>從右側（大於 <InlineMath settings={{ strict: false }} math="a" /> 的方向）靠近</p>
          <BlockMath settings={{ strict: false }} math="\lim_{x \to a^+} f(x) = L" />
          
          <p><strong>左極限：</strong>從左側（小於 <InlineMath settings={{ strict: false }} math="a" /> 的方向）靠近</p>
          <BlockMath settings={{ strict: false }} math="\lim_{x \to a^-} f(x) = L" />
        </div>

        <div className="theorem-box">
          <strong>重要定理：雙側極限的存在性</strong>
          <p>
            雙側極限 <InlineMath settings={{ strict: false }} math="\lim_{x \to a} f(x) = L" /> 存在的充要條件是：
          </p>
          <BlockMath settings={{ strict: false }} math="\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L" />
          <p>也就是說，左極限與右極限必須都存在且相等。</p>
        </div>
      </div>

      {/* 3.2 無窮極限 */}
      <div className="content-block mt-8">
        <h3>3.2 無窮極限 (Infinite Limits)</h3>
        <p>
          當 <InlineMath settings={{ strict: false }} math="x" /> 趨近某一點時，函數值 <InlineMath settings={{ strict: false }} math="f(x)" /> 可能會無限增大或減小。
        </p>
        
        <div className="math-box">
          <p>如果對於任意大的正數 <InlineMath settings={{ strict: false }} math="M" />，都能找到對應的 <InlineMath settings={{ strict: false }} math="\delta" /> 使得：</p>
          <BlockMath settings={{ strict: false }} math="\text{若 } 0 < |x - a| < \delta \text{，則 } f(x) > M" />
          <p>我們記作：</p>
          <BlockMath settings={{ strict: false }} math="\lim_{x \to a} f(x) = \infty" />
        </div>
        
        <p className="note">
          注意：無窮大 <InlineMath settings={{ strict: false }} math="\infty" /> 不是一個具體的數，當我們說極限等於無窮時，實際上是指該極限「不存在」，只是描述了它不穩定的發散趨勢。
        </p>
      </div>
    </section>
  );
}