// src/DerivativesApps/LinearApproximation.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function LinearApproximation() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-fuchsia-500 pb-2">6. 線性逼近與微分 (Linear Approximation and Differentials)</h2>
      
      <p className="mb-4 text-gray-700">
        當我們非常靠近某一點時，曲線看起來就像一條直線。這條直線就是切線，而利用切線來估計函數值的過程稱為線性逼近。
      </p>

      {/* 線性化 */}
      <div className="math-box mb-6 p-6 bg-fuchsia-50 rounded-lg shadow-sm border border-fuchsia-100">
        <h3 className="text-xl font-bold mb-3 text-fuchsia-800">6.1 線性化 (Linearization)</h3>
        <p className="mb-4 text-gray-700">
          函數 <InlineMath math="f" /> 在 <InlineMath math="a" /> 點的線性化函數為：
        </p>
        <div className="p-4 bg-white rounded border border-fuchsia-200">
          <BlockMath math="L(x) = f(a) + f'(a)(x - a)" />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          當 <InlineMath math="x" /> 靠近 <InlineMath math="a" /> 時，<InlineMath math="f(x) \approx L(x)" />。
        </p>
      </div>

      {/* 微分 (Differentials) */}
      <div className="math-box mb-6 p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-blue-800">6.2 微分 (Differentials)</h3>
        <p className="mb-4 text-gray-700">
          令 <InlineMath math="y = f(x)" />，若 <InlineMath math="dx" /> 是一個獨立變數，我們定義變數 <InlineMath math="dy" /> 為：
        </p>
        <div className="p-4 bg-white rounded border border-blue-200">
          <BlockMath math="dy = f'(x) dx" />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          這裡 <InlineMath math="dx" /> 代表自變數的微小變化，而 <InlineMath math="dy" /> 則是依據切線斜率所估計出的應變數變化量。
        </p>
      </div>
    </section>
  );
}
