// src/Limits/LimitDefinition.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function LimitDefinition() {
  return (
    <section className="subsection">
      <h2 className="section-title">1. 極限的嚴格定義 ($\epsilon-\delta$ 定義)</h2>
      
      <p>
        在微積分中，極限的概念是整個學科的基石。雖然我們可以直觀地說「當 <InlineMath math="x" /> 靠近 <InlineMath math="a" /> 時，<InlineMath math="f(x)" /> 會靠近 <InlineMath math="L" />」，但數學家使用了更嚴格的語言來定義它。
      </p>

      <div className="math-box">
        <strong>定義：</strong>
        <p>
          設函數 <InlineMath math="f(x)" /> 在 <InlineMath math="a" /> 的某個去心鄰域內有定義。若對於任意給定的 <InlineMath math="\epsilon > 0" />，都存在一個 <InlineMath math="\delta > 0" />，使得當：
        </p>
        
        {/* 獨立成行的數學公式 */}
        <BlockMath math="0 < |x - a| < \delta" />
        
        <p>時，恆滿足：</p>
        
        <BlockMath math="|f(x) - L| < \epsilon" />
        
        <p>
          則稱 <InlineMath math="L" /> 為函數 <InlineMath math="f(x)" /> 當 <InlineMath math="x" /> 趨近於 <InlineMath math="a" /> 時的極限，記作：
        </p>

        <BlockMath math="\lim_{x \to a} f(x) = L" />
      </div>
    </section>
  );
}