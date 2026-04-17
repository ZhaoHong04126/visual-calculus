// src/DerivativesApps/LHopital.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function LHopital() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-rose-500 pb-2">4. 羅必達法則 (L'Hôpital's Rule)</h2>
      
      <p className="mb-4 text-gray-700">
        當我們遇到 <InlineMath math="\frac{0}{0}" /> 或 <InlineMath math="\frac{\infty}{\infty}" /> 這類不定型極限時，羅必達法則是強大的工具。
      </p>

      {/* 定理內容 */}
      <div className="math-box mb-6 p-6 bg-rose-50 rounded-lg shadow-sm border border-rose-100">
        <h3 className="text-xl font-bold mb-3 text-rose-800">4.1 定理內容</h3>
        <div className="p-4 bg-white rounded border border-rose-200">
          <p className="text-sm text-gray-600 mb-2">
            若 <InlineMath math="\lim_{x \to a} f(x) = 0" /> 且 <InlineMath math="\lim_{x \to a} g(x) = 0" />（或皆為 <InlineMath math="\pm \infty" />），則：
          </p>
          <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />
          <p className="mt-3 text-sm text-gray-600">
            前提是右側的極限必須存在（或者是 <InlineMath math="\pm \infty" />）。
          </p>
        </div>
      </div>

      {/* 其他不定型 */}
      <div className="math-box mb-6 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-slate-800">4.2 其他不定型的轉化</h3>
        <p className="mb-4 text-gray-700">
          透過代數變形，許多其他型態也可以使用羅必達法則：
        </p>
        <ul className="list-none space-y-4">
          <li className="bg-white p-3 rounded border border-slate-200">
            <strong>乘積型 <InlineMath math="0 \cdot \infty" />：</strong> 改寫為 <InlineMath math="f / (1/g)" /> 或 <InlineMath math="g / (1/f)" />。
          </li>
          <li className="bg-white p-3 rounded border border-slate-200">
            <strong>差值型 <InlineMath math="\infty - \infty" />：</strong> 透過通分轉化為分式。
          </li>
          <li className="bg-white p-3 rounded border border-slate-200">
            <strong>指數型 <InlineMath math="0^0, 1^\infty, \infty^0" />：</strong> 取對數 <InlineMath math="\ln" /> 轉化為乘積型。
          </li>
        </ul>
      </div>

      <div className="warning-box p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-sm mt-4">
        <strong>注意：</strong> 使用羅必達法則前，請務必先代入確認極限是否真的是 <InlineMath math="0/0" /> 或 <InlineMath math="\infty/\infty" />。若分母極限不為 0，直接使用會得出錯誤結果！
      </div>
    </section>
  );
}
