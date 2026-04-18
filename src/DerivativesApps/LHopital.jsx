// src/DerivativesApps/LHopital.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function LHopital() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-rose-500 pb-2">5. 羅必達法則 (L'Hôpital's Rule)</h2>

      <p className="mb-4 text-gray-700">
        當我們遇到 <InlineMath math="\frac{0}{0}" /> 或 <InlineMath math="\frac{\infty}{\infty}" /> 這類不定型極限時，羅必達法則是強大的工具。
      </p>

      {/* 5.1 不定型 */}
      <div className="math-box mb-6 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold mb-3 text-slate-800">5.1 不定型 (Indeterminate Forms)</h3>
        <div className="p-4 bg-white rounded border border-slate-300">
          <p className="font-bold mb-2">考慮極限式 <InlineMath math="\lim_{x \to a} \frac{f(x)}{g(x)}" /> (*)</p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="font-bold text-rose-600">(1)</span>
              <p>
                若 <InlineMath math="\lim_{x \to a} f(x) = \lim_{x \to a} g(x) = 0" />，則 (*) 稱為 <strong><InlineMath math="\frac{0}{0}" /> 型不定型</strong>。
              </p>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-rose-600">(2)</span>
              <p>
                若 <InlineMath math="\lim_{x \to a} f(x) = \pm\infty" /> 且 <InlineMath math="\lim_{x \to a} g(x) = \pm\infty" />，則 (*) 稱為 <strong><InlineMath math="\frac{\infty}{\infty}" /> 型不定型</strong>。
              </p>
            </li>
          </ul>
          <p className="mt-4 text-xs text-gray-500 italic">
            這兩者是羅必達法則可以直接應用的基本形式。
          </p>
        </div>
      </div>

      {/* 5.2 羅必達法則定理 */}
      <div className="math-box mb-6 p-6 bg-rose-50 rounded-lg shadow-sm border border-rose-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-rose-800">5.2 羅必達法則 (L'Hôpital's Rule)</h3>
        <div className="p-5 bg-white rounded border-2 border-rose-200">
          <p className="font-bold text-rose-900 mb-2">羅必達法則內容：</p>
          <p className="text-sm text-gray-700 mb-3">
            設 <InlineMath math="f, g" /> 在 <InlineMath math="a" /> 附近可微，且在 <InlineMath math="a" /> 附近滿足 <InlineMath math="g'(x) \neq 0" />。
            若 <InlineMath math="\lim_{x \to a} \frac{f(x)}{g(x)}" /> 為 <InlineMath math="\frac{0}{0}" /> 或 <InlineMath math="\frac{\infty}{\infty}" /> 型不定型，則：
          </p>
          <div className="bg-rose-50 py-4 rounded-md border border-rose-100 text-center mb-3">
            <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />
          </div>
          <p className="text-sm text-gray-600">
            前提是等號右項的極限存在（或為 <InlineMath math="\pm\infty" />）。
          </p>
        </div>
      </div>

      {/* 5.3 直觀思考 */}
      <div className="math-box mb-6 p-6 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-emerald-800">5.3 直觀思考 (Basic Idea for 0/0)</h3>
        <p className="mb-4 text-gray-700">
          以 <InlineMath math="\frac{0}{0}" /> 型且 <InlineMath math="f, g" /> 導數連續的情況為例：
        </p>
        <div className="p-4 bg-white rounded border border-emerald-200 text-sm font-serif">
          <BlockMath math="\begin{aligned} \lim_{x \to a} \frac{f(x)}{g(x)} &= \lim_{x \to a} \frac{f(x) - f(a)}{g(x) - g(a)} \quad (\text{因為 } f(a)=g(a)=0) \\ &= \lim_{x \to a} \frac{\frac{f(x)-f(a)}{x-a}}{\frac{g(x)-g(a)}{x-a}} = \frac{\lim_{x \to a} \frac{f(x)-f(a)}{x-a}}{\lim_{x \to a} \frac{g(x)-g(a)}{x-a}} \\ &= \frac{f'(a)}{g'(a)} = \lim_{x \to a} \frac{f'(x)}{g'(x)} \end{aligned}" />
          <p className="mt-3 text-xs text-gray-500 italic">
            ※ 註：更精確的證明通常需使用柯西均值定理。
          </p>
        </div>
      </div>

      {/* 5.4 不同形式的不定型 */}
      <div className="math-box mb-6 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-200 mt-8">
        <h3 className="text-xl font-bold mb-6 text-slate-800 border-b pb-2">5.4 不同形式的不定型 (Detailed Procedures)</h3>

        <div className="space-y-10">
          {/* 5.4.1 */}
          <div id="5.4.1" className="subsection-block">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm">5.4.1</span>
              基本型：<InlineMath math="0/0" /> 與 <InlineMath math="\infty/\infty" />
            </h4>
            <div className="ml-9 p-4 bg-white rounded border border-rose-100 text-sm text-gray-700 leading-relaxed shadow-sm">
              這是羅必達法則的直接形式。當代入後發現分子分母同時趨近於 0 或 無窮大時，直接對分子與分母分別求導：
              <div className="my-3 py-2 bg-rose-50 rounded border border-rose-100 text-center">
                <InlineMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />
              </div>
              <p className="text-xs text-rose-600 italic">※ 注意：若導完後仍是 0/0，可以再次使用羅必達法則。</p>
            </div>
          </div>

          {/* 5.4.2 */}
          <div id="5.4.2" className="subsection-block">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-sm">5.4.2</span>
              乘積型：<InlineMath math="0 \cdot \infty" />
            </h4>
            <div className="ml-9 p-4 bg-white rounded border border-amber-100 text-sm text-gray-700 leading-relaxed shadow-sm">
              <strong>轉化策略：</strong>將其中一個函數移至分母作為倒數，使其轉化為分式形式。
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                <div className="p-3 bg-amber-50 rounded border border-amber-100 text-center">
                  <InlineMath math="f \cdot g = \frac{f}{1/g} \quad \left( \text{型態為 } \frac{0}{1/\infty} = \frac{0}{0} \right)" />
                </div>
                <div className="p-3 bg-amber-50 rounded border border-amber-100 text-center">
                  <InlineMath math="f \cdot g = \frac{g}{1/f} \quad \left( \text{型態為 } \frac{\infty}{1/0} = \frac{\infty}{\infty} \right)" />
                </div>
              </div>
              <p className="text-xs text-gray-500">提示：通常選擇「倒數後較易求導」的函數放在分母。</p>
            </div>
          </div>

          {/* 5.4.3 */}
          <div id="5.4.3" className="subsection-block text-sm text-gray-700 leading-relaxed">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-sm">5.4.3</span>
              差值型：<InlineMath math="\infty - \infty" />
            </h4>
            <div className="ml-9 p-4 bg-white rounded border border-emerald-100 shadow-sm">
              <strong>轉化策略：</strong>目標是將兩項合併為一個分式。
              <ul className="list-disc ml-5 mt-2 space-y-2">
                <li><strong>通分：</strong>適用於分式減法，如 <InlineMath math="\frac{1}{x} - \frac{1}{\sin x}" />。</li>
                <li><strong>有理化：</strong>適用於根式差，如 <InlineMath math="\sqrt{x^2+x} - x" />。</li>
                <li><strong>提公因式：</strong>強行提取一項使其出現倒數。</li>
              </ul>
            </div>
          </div>

          {/* 5.4.4 */}
          <div id="5.4.4" className="subsection-block text-sm text-gray-700 leading-relaxed">
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-sm">5.4.4</span>
              指數型：<InlineMath math="1^\infty, 0^0, \infty^0" />
            </h4>
            <div className="ml-9 p-4 bg-white rounded border border-purple-100 shadow-sm">
              <strong>轉化步驟：利用自然對數將次方提前。</strong>
              <ol className="list-decimal ml-5 mt-2 space-y-2">
                <li>令極限值為 <InlineMath math="L = \lim_{x \to a} f(x)^{g(x)}" />。</li>
                <li>取對數：<InlineMath math="\ln L = \lim_{x \to a} [g(x) \cdot \ln f(x)]" />。</li>
                <li>此時轉化為 <InlineMath math="0 \cdot \infty" /> 型（回到 5.4.2）。</li>
                <li>計算出 <InlineMath math="\ln L" /> 的結果為 <InlineMath math="K" />。</li>
                <li className="font-bold text-purple-800">還原結果：得到最終答案 <InlineMath math="L = e^K" />。</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="warning-box p-4 bg-rose-50 border-l-4 border-rose-400 text-rose-900 text-sm mt-4">
        <strong>重要提醒：</strong> 使用羅必達法則前，請務必先代入確認極限是否真的是 <InlineMath math="0/0" /> 或 <InlineMath math="\infty/\infty" />。若分母極限不為 0，直接使用會得出錯誤結果！
      </div>
    </section>
  );
}
