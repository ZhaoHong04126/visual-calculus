import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './Limits.css';

const ProofBox = ({ title = "查看證明", children }) => {
  return (
    <details className="proof-box">
      <summary>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px', fontSize: '18px' }}>📝</span>
          {title}
        </div>
        <div>
          <span className="proof-toggle-btn expand-text">展開證明 ▼</span>
          <span className="proof-toggle-btn collapse-text">收起證明 ▲</span>
        </div>
      </summary>
      <div className="proof-content">
        {children}
      </div>
    </details>
  );
};

export default function LimitsAtInfinity() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-emerald-500 pb-2">4. 無窮遠處的極限 (Limits at Infinity)</h2>
      
      <p className="mb-4 text-gray-700">
        前一節探討的是「函數值」趨向無窮大，而這節我們要探討的是當「自變數 <InlineMath settings={{ strict: false }} math="x" />」本身趨向正無限或負無限時，函數值是否會穩定收斂到某個常數 <InlineMath settings={{ strict: false }} math="L" />。
      </p>

      <div className="math-box mb-6 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
        <p className="font-bold mb-2">4.1 直觀定義：</p>
        <p className="mb-2">當 <InlineMath settings={{ strict: false }} math="x" /> 變得無限大時，<InlineMath settings={{ strict: false }} math="f(x)" /> 會無限逼近於 <InlineMath settings={{ strict: false }} math="L" />，記作：</p>
        <BlockMath settings={{ strict: false }} math="\lim_{x \to \infty} f(x) = L" />
      </div>

      {/* 嚴格證明區塊 */}
      <ProofBox title={<>嚴格定義 (<InlineMath math="\epsilon-M" /> 定義)</>}>
        <p>
          設函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 在區間 <InlineMath settings={{ strict: false }} math="(a, \infty)" /> 上有定義。若對於任意給定的 <InlineMath settings={{ strict: false }} math="\epsilon > 0" />，都存在一個正實數 <InlineMath settings={{ strict: false }} math="M > 0" />，使得當：
        </p>
        <BlockMath settings={{ strict: false }} math="x > M" />
        <p>時，恆滿足：</p>
        <BlockMath settings={{ strict: false }} math="|f(x) - L| < \epsilon" />
        <p>
          則稱 <InlineMath settings={{ strict: false }} math="L" /> 為函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 當 <InlineMath settings={{ strict: false }} math="x" /> 趨近於正無限大時的極限。
        </p>
        <p className="mt-4 text-sm text-gray-600">
          <em>(註：若探討 <InlineMath settings={{ strict: false }} math="x \to -\infty" />，則條件改為存在 <InlineMath settings={{ strict: false }} math="N < 0" /> 使得當 <InlineMath settings={{ strict: false }} math="x < N" /> 時滿足誤差範圍。)</em>
        </p>
      </ProofBox>
    </section>
  );
}