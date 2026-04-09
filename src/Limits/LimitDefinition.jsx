// src/Limits/LimitDefinition.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function LimitDefinition() {
  return (
    <section className="subsection">
      <h2 className="section-title">1. 函數極限的直觀定義與記號</h2>
      
      <p className="mb-4">
        極限（Limit）描述的是當自變數 <InlineMath math="x" /> 「愈來愈接近」某個值 <InlineMath math="a" /> 時，函數值 <InlineMath math="f(x)" /> 是否會穩定地趨近於某個定值 <InlineMath math="L" />。
      </p>

      {/* 寫法與記號 */}
      <div className="math-box">
        <h3 className="text-xl font-bold mb-3 text-blue-800">極限的符號表示</h3>
        <p className="mb-2">如果當 <InlineMath math="x" /> 靠近 <InlineMath math="a" /> 但<strong>不等於</strong> <InlineMath math="a" /> 時，<InlineMath math="f(x)" /> 的值可以任意地靠近 <InlineMath math="L" />，我們記作：</p>
        <BlockMath math="\lim_{x \to a} f(x) = L" />
        <p className="mt-2 text-sm text-gray-700">或者用另一種表示法：</p>
        <BlockMath math="f(x) \to L \quad \text{as} \quad x \to a" />
      </div>

      {/* 重要觀念提醒 */}
      <div className="concept-grid mt-6">
        <div className="concept-card" style={{ borderLeft: '4px solid #f59e0b', backgroundColor: '#fef3c7' }}>
          <h3 className="text-lg font-bold mb-2">⚠️ 極限 $\neq$ 函數值</h3>
          <p className="text-sm">
            求極限 <InlineMath math="\lim_{x \to a} f(x)" /> 與求該點的函數值 <InlineMath math="f(a)" /> 是兩件完全不同的事 ：
          </p>
          <ul className="list-disc list-inside mt-2 text-xs space-y-1">
            <li><InlineMath math="f(a)" />：函數在 <InlineMath math="a" /> 這一點的<strong>實際數值</strong>。</li>
            <li>極限：當 <InlineMath math="x" /> 逼近 <InlineMath math="a" /> 時，函數值<strong>趨向的目標</strong>，我們並不在乎點 <InlineMath math="a" /> 表面上的狀況。</li>
          </ul>
        </div>

        <div className="concept-card diff-card">
          <h3 className="text-lg font-bold mb-2">🔍 代值法的侷限</h3>
          <p className="text-sm">
            雖然透過列表帶入數值（如 <InlineMath math="0.9, 0.99, 1.01 \dots" />）可以幫助理解，但這並非嚴謹的求極限方法，有時會因為取值的巧合而產生誤導。
          </p>
        </div>
      </div>
    </section>
  );
}