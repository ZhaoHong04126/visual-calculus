// src/DerivativesApps/MonotonicityExtrema.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function MonotonicityExtrema() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">2. 遞增、遞減與極值 (Monotonicity and Extrema)</h2>
      
      <p className="mb-4 text-gray-700">
        透過導數的正負號，我們可以判斷函數在某個區間內是上升還是下降，並進而找出函數的首高峰（極大值）與谷底（極小值）。
      </p>

      {/* 2.0 函數單調性的正式定義 */}
      <div className="math-box mb-6 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold mb-3 text-slate-800">2.0 單調性的正式定義 (Formal Definitions)</h3>
        <p className="mb-4 text-sm text-gray-600">
          在進入導數檢定之前，我們回顧函數在區間 <InlineMath math="I" /> 上的基本定義：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded border border-slate-200">
            <ul className="space-y-3 text-sm">
              <li>
                <strong>遞增 (Increasing)：</strong><br/>
                若 <InlineMath math="x < y \implies f(x) < f(y)" />
              </li>
              <li>
                <strong>遞減 (Decreasing)：</strong><br/>
                若 <InlineMath math="x < y \implies f(x) > f(y)" />
              </li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded border border-slate-200">
            <ul className="space-y-3 text-sm">
              <li>
                <strong>非遞減 (Nondecreasing)：</strong><br/>
                若 <InlineMath math="x < y \implies f(x) \le f(y)" />
              </li>
              <li>
                <strong>非遞增 (Nonincreasing)：</strong><br/>
                若 <InlineMath math="x < y \implies f(x) \ge f(y)" />
              </li>
            </ul>
          </div>
        </div>

        {/* 筆記中的 Remark 2 */}
        <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-100 italic text-sm text-blue-800">
          <strong>備註：名詞定義的差異</strong><br/>
          在不同的教科書中，定義可能略有不同：
          <ul className="list-disc ml-6 mt-2">
            <li>有些書將上述的「遞增/遞減」稱為<strong>嚴格遞增/嚴格遞減 (strictly)</strong>。</li>
            <li>有些書則將「非遞減/非遞增」直接稱為<strong>遞增/遞減</strong>。</li>
          </ul>
        </div>
      </div>

      {/* 2.1 函數的單調性與極值定義 */}
      <div className="math-box mb-6 p-6 bg-blue-50 rounded-lg shadow-sm border-l-4 border-blue-500">
        <h3 className="text-xl font-bold mb-4 text-blue-800">2.1 基本定義 (Definitions)</h3>
        
        {/* 單調性 */}
        <div className="mb-8">
          <h4 className="font-bold text-lg mb-2 text-blue-700">1. 單調性 (Monotonicity)</h4>
          <p className="text-gray-700 leading-relaxed mb-3">
            設 <InlineMath math="f" /> 定義在區間 <InlineMath math="I" /> 上：
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>若對於所有的 <InlineMath math="x_1 < x_2" />，皆滿足 <InlineMath math="f(x_1) < f(x_2)" />，則 <InlineMath math="f" /> 在 <InlineMath math="I" /> 上<strong>嚴格遞增 (Strictly Increasing)</strong>。</li>
            <li>若對於所有的 <InlineMath math="x_1 < x_2" />，皆滿足 <InlineMath math="f(x_1) > f(x_2)" />，則 <InlineMath math="f" /> 在 <InlineMath math="I" /> 上<strong>嚴格遞減 (Strictly Decreasing)</strong>。</li>
          </ul>
        </div>

        {/* 極值 */}
        <div className="pt-4 border-t border-blue-100">
          <h4 className="font-bold text-lg mb-4 text-blue-700">2. 極值 (Extrema)</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 絕對極值 */}
            <div className="bg-white p-4 rounded border border-blue-200">
              <h5 className="font-bold text-blue-800 border-b pb-1 mb-2">絕對極值 (Absolute / Global)</h5>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <strong>絕對極大值：</strong> 若 <InlineMath math="f(x) \le f(c)" /> 對所有 <InlineMath math="x \in D" /> 皆成立，則 <InlineMath math="f(c)" /> 為最大值。
                </li>
                <li>
                  <strong>絕對極小值：</strong> 若 <InlineMath math="f(x) \ge f(c)" /> 對所有 <InlineMath math="x \in D" /> 皆成立，則 <InlineMath math="f(c)" /> 為最小值。
                </li>
              </ul>
            </div>

            {/* 相對極值 */}
            <div className="bg-white p-4 rounded border border-blue-200">
              <h5 className="font-bold text-blue-800 border-b pb-1 mb-2">相對極值 (Relative / Local)</h5>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <strong>相對極大值：</strong> 若 <InlineMath math="f(x) \le f(c)" /> 對所有在 <InlineMath math="c" /> 附近的 <InlineMath math="x" /> 皆成立。
                </li>
                <li>
                  <strong>相對極小值：</strong> 若 <InlineMath math="f(x) \ge f(c)" /> 對所有在 <InlineMath math="c" /> 附近的 <InlineMath math="x" /> 皆成立。
                </li>
              </ul>
              <div className="mt-3 p-2 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded">
                <strong>注意：</strong> 端點 (Endpoints) 不在相對極值 (Local Extrema) 的考慮範圍內。
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2.2 遞增遞減測試 */}
      <div className="math-box mb-6 p-6 bg-orange-50 rounded-lg shadow-sm border border-orange-100">
        <h3 className="text-xl font-bold mb-3 text-orange-800">2.2 遞增遞減測試 (Increasing/Decreasing Test)</h3>
        <p className="mb-4 text-sm text-gray-600">
          <strong>單調性定理：</strong>
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>若在某區間內 <InlineMath math="f'(x) > 0" />，則 <InlineMath math="f" /> 在該區間內<strong>遞增</strong>。</li>
          <li>若在某區間內 <InlineMath math="f'(x) < 0" />，則 <InlineMath math="f" /> 在該區間內<strong>遞減</strong>。</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600 italic">
          大多時候我們要做的就是：給定函數 <InlineMath math="f" />，找出其在哪些區間為遞增，哪些區間為遞減。
        </p>
      </div>

      {/* 2.3 判斷步驟 */}
      <div className="math-box mb-6 p-6 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-emerald-800">2.2 判斷區間的步驟 (Procedure)</h3>
        <div className="space-y-4 text-gray-700">
          <p className="text-sm text-gray-600">給定函數 <InlineMath math="f" />，找出其增減區間的標準流程：</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>找出定義域的<strong>邊界點</strong>。</li>
            <li>找出<strong>臨界點</strong>：使得 <InlineMath math="f'(x) = 0" /> 或 <InlineMath math="f'(x)" /> 不存在的點。</li>
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
                  <td>由小到大列出所有邊界點與臨界點，切割定義域</td>
                </tr>
                <tr>
                  <td><InlineMath math="f'(x)" /></td>
                  <td className="font-medium">判斷正負號（<span className="text-red-600 font-bold">+</span> 或 <span className="text-blue-600 font-bold">-</span>）</td>
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

      {/* 2.3 臨界點 */}
      <div className="math-box mb-6 p-6 bg-red-50 rounded-lg shadow-sm border border-red-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-red-800">2.3 臨界點 (Critical Points)</h3>
        <p className="mb-2 text-gray-700">
          極值可能發生的位置稱為臨界點。
        </p>
        <div className="my-4 p-4 bg-white rounded border border-red-200">
          <p className="text-sm text-gray-600">
            若 <InlineMath math="c" /> 在 <InlineMath math="f" /> 的定義域中，且滿足下列任一條件，則 <InlineMath math="c" /> 為臨界點：
          </p>
          <ul className="list-decimal ml-6 mt-2 text-sm text-gray-600">
            <li><InlineMath math="f'(c) = 0" />（切線水平）</li>
            <li><InlineMath math="f'(c)" /> 不存在（尖點或斷點）</li>
          </ul>
        </div>
      </div>

      {/* 第一階導數檢定法 */}
      <div className="math-box mb-6 p-6 bg-yellow-50 rounded-lg shadow-sm border border-yellow-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-yellow-800">2.3 第一階導數檢定法 (First Derivative Test)</h3>
        <p className="mb-4 text-gray-700">
          假設 <InlineMath math="c" /> 是一個臨界點：
        </p>
        <div className="space-y-3">
          <div className="p-3 bg-white rounded border border-yellow-200">
            <strong>相對極大值：</strong> 當 <InlineMath math="f'(x)" /> 從正變為負（由增轉減）。
          </div>
          <div className="p-3 bg-white rounded border border-yellow-200">
            <strong>相對極小值：</strong> 當 <InlineMath math="f'(x)" /> 從負變為正（由減轉增）。
          </div>
          <div className="p-3 bg-white rounded border border-yellow-200">
            <strong>無極值：</strong> 當 <InlineMath math="f'(x)" /> 在臨界點兩側正負號不變。
          </div>
        </div>
      </div>
    </section>
  );
}
