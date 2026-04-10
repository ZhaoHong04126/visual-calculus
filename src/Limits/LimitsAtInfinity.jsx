// src/Limits/LimitsAtInfinity.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function LimitsAtInfinity() {
  return (
    <section className="subsection">
      <h2 className="section-title">4. 無窮遠處的極限 (Limits at Infinity)</h2>
      
      <p>
        前一節探討的是「函數值」趨向無窮大，而這節我們要探討的是當「自變數 <InlineMath settings={{ strict: false }} math="x" />」本身趨向正無限或負無限時，函數值是否會穩定收斂到某個常數 <InlineMath settings={{ strict: false }} math="L" />。
      </p>

      <div className="math-box">
        <p><strong>直觀定義：</strong></p>
        <p>當 <InlineMath settings={{ strict: false }} math="x" /> 變得無限大時，<InlineMath settings={{ strict: false }} math="f(x)" /> 會無限逼近於 <InlineMath settings={{ strict: false }} math="L" />，記作：</p>
        <BlockMath settings={{ strict: false }} math="\lim_{x \to \infty} f(x) = L" />
      </div>

      {/* 嚴格證明區塊 */}
      <div className="proof-box">
        <h4>✍️ 嚴格定義 ($\epsilon-M$ 定義)</h4>
        <p>
          設函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 在區間 <InlineMath settings={{ strict: false }} math="(a, \infty)" /> 上有定義。若對於任意給定的 <InlineMath settings={{ strict: false }} math="\epsilon > 0" />，都存在一個正實數 <InlineMath settings={{ strict: false }} math="M > 0" />，使得當：
        </p>
        <BlockMath settings={{ strict: false }} math="x > M" />
        <p>時，恆滿足：</p>
        <BlockMath settings={{ strict: false }} math="|f(x) - L| < \epsilon" />
        <p>
          則稱 <InlineMath settings={{ strict: false }} math="L" /> 為函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 當 <InlineMath settings={{ strict: false }} math="x" /> 趨近於正無限大時的極限。
        </p>
        <p className="mt-4">
          <em>(註：若探討 <InlineMath settings={{ strict: false }} math="x \to -\infty" />，則條件改為存在 <InlineMath settings={{ strict: false }} math="N < 0" /> 使得當 <InlineMath settings={{ strict: false }} math="x < N" /> 時滿足誤差範圍。)</em>
        </p>
      </div>
    </section>
  );
}