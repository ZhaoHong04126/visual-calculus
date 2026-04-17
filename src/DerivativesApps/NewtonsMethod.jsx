// src/DerivativesApps/NewtonsMethod.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function NewtonsMethod() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-slate-500 pb-2">7. 牛頓法 (Newton's Method)</h2>
      
      <p className="mb-4 text-gray-700">
        牛頓法是一種利用切線來尋找方程式根（即 <InlineMath math="f(x) = 0" />）的數值方法。
      </p>

      {/* 迭代公式 */}
      <div className="math-box mb-6 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold mb-3 text-slate-800">7.1 迭代公式</h3>
        <p className="mb-4 text-gray-700">
          從一個初始估計值 <InlineMath math="x_1" /> 開始，我們可以透過切線與 x 軸的交點來得到更精確的估計值 <InlineMath math="x_2" />：
        </p>
        <div className="p-4 bg-white rounded border border-slate-200">
          <BlockMath math="x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}" />
        </div>
        <p className="mt-4 text-sm text-gray-600">
          重複此過程，直到所得的值足夠精確為止。
        </p>
      </div>

      <div className="warning-box p-4 bg-red-50 border-l-4 border-red-400 text-red-900 text-sm mt-4">
        <strong>限制：</strong> 若初始點 <InlineMath math="x_1" /> 離根太遠，或者在迭代過程中遇到 <InlineMath math="f'(x_n) = 0" />（水平切線），牛頓法可能會失效。
      </div>
    </section>
  );
}
