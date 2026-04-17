// src/DerivativesApps/Monotonicity.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function Monotonicity() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">2. 函數的單調性 (Monotonicity)</h2>
      
      <p className="mb-4 text-gray-700">
        透過導數的正負號，我們可以判斷函數在某個區間內是上升還是下降（遞增或遞減）。
      </p>

      {/* 2.1 函數單調性的正式定義 */}
      <div className="math-box mb-6 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold mb-3 text-slate-800">2.1 單調性的正式定義 (Formal Definitions)</h3>
        <p className="mb-4 text-sm text-gray-600">
          設 <InlineMath math="f" /> 定義在區間 <InlineMath math="I" /> 上：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded border-2 border-black">
            <ul className="space-y-4 text-sm">
              <li>
                <strong className="text-orange-700">嚴格遞增 (Strictly Increasing)：</strong><br/>
                對於所有 <InlineMath math="x_1 < x_2" />，皆滿足 <InlineMath math="f(x_1) < f(x_2)" />。
              </li>
              <li>
                <strong className="text-blue-700">嚴格遞減 (Strictly Decreasing)：</strong><br/>
                對於所有 <InlineMath math="x_1 < x_2" />，皆滿足 <InlineMath math="f(x_1) > f(x_2)" />。
              </li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded border-2 border-black">
            <ul className="space-y-4 text-sm">
              <li>
                <strong>遞增 / 非遞減 (Nondecreasing)：</strong><br/>
                對於所有 <InlineMath math="x_1 < x_2" />，只要求 <InlineMath math="f(x_1) \le f(x_2)" />。
              </li>
              <li>
                <strong>遞減 / 非遞增 (Nonincreasing)：</strong><br/>
                對於所有 <InlineMath math="x_1 < x_2" />，只要求 <InlineMath math="f(x_1) \ge f(x_2)" />。
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-100 italic text-sm text-blue-800">
          <strong>術語備註：</strong> 大部分微積分課程中，「遞增」通常指「嚴格遞增」，除非特別強調。
        </div>
      </div>

      {/* 2.2 遞增遞減測試 */}
      <div className="math-box mb-6 p-6 bg-indigo-50 rounded-lg shadow-sm border-l-4 border-indigo-500 mt-8">
        <h3 className="text-xl font-bold mb-3 text-indigo-800">2.2 單調性測試 (Monotonicity Test)</h3>
        <p className="mb-4 text-gray-700">
          透過<strong>一階導數</strong>的正負號來判定：
        </p>
        <div className="space-y-4">
           <div className="p-4 bg-white rounded border-2 border-black">
              <InlineMath math="f'(x) > 0" /> 對於區間內所有 <InlineMath math="x" /> <InlineMath math="\implies" /> <strong className="text-orange-700">f 在該區間遞增</strong>
           </div>
           <div className="p-4 bg-white rounded border-2 border-black">
              <InlineMath math="f'(x) < 0" /> 對於區間內所有 <InlineMath math="x" /> <InlineMath math="\implies" /> <strong className="text-blue-700">f 在該區間遞減</strong>
           </div>
        </div>
      </div>

      {/* 2.3 判斷步驟 */}
      <div className="math-box mb-6 p-6 bg-emerald-50 rounded-lg shadow-sm border-l-4 border-emerald-500 mt-8">
        <h3 className="text-xl font-bold mb-3 text-emerald-800">2.3 判斷區間的步驟 (Procedure)</h3>
        <div className="space-y-4 text-gray-700">
          <p className="text-sm text-gray-600">找出增減區間的標準流程：</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>找出定義域的<strong>邊界點</strong>。</li>
            <li>找出<strong>臨界點</strong> (<InlineMath math="f'(x) = 0" /> 或不存在)。</li>
          </ul>

          <div className="mt-4 overflow-x-auto">
            <table className="analysis-table">
              <thead>
                <tr>
                  <th>變數</th>
                  <th>分析內容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><InlineMath math="x" /></td>
                  <td>由小到大列出關鍵點，切割數線為數個開區間</td>
                </tr>
                <tr>
                  <td><InlineMath math="f'(x)" /></td>
                  <td className="font-medium">在區間內挑選測試值代入，確認正負號</td>
                </tr>
                <tr>
                  <td><InlineMath math="f(x)" /></td>
                  <td>
                    <ul className="list-none space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-red-600 font-bold">+</span> <InlineMath math="\implies" /> <strong className="text-red-700">Increasing (遞增)</strong>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-600 font-bold">-</span> <InlineMath math="\implies" /> <strong className="text-blue-700">Decreasing (遞減)</strong>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
