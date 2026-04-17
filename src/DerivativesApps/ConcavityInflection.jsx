// src/DerivativesApps/ConcavityInflection.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function ConcavityInflection() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-indigo-500 pb-2">4. 凹凸性與反曲點 (Concavity and Inflection Points)</h2>
      
      <p className="mb-4 text-gray-700">
        二階導數代表的是「變化率的變化率」，它決定了函數圖形如何彎曲。
      </p>

      {/* 4.1 凹凸性的定義 */}
      <div className="math-box mb-6 p-6 bg-blue-50 rounded-lg shadow-sm border-l-4 border-blue-500">
        <h3 className="text-xl font-bold mb-3 text-blue-800">4.1 凹凸性 (Concavity)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          設 <InlineMath math="f" /> 在開區間 <InlineMath math="I" /> 上可導：
        </p>
        <ul className="list-decimal ml-6 space-y-3 text-gray-700">
          <li>
            <strong>上凹 (Concave Upward, CU)：</strong> 若 <InlineMath math="f'(x)" /> 在 <InlineMath math="I" /> 上<strong>遞增</strong>。
            <br /><span className="text-xs text-gray-500">測試法：<InlineMath math="f''(x) > 0" />。幾何特徵：切線位於曲線下方。</span>
          </li>
          <li>
            <strong>下凹 (Concave Downward, CD)：</strong> 若 <InlineMath math="f'(x)" /> 在 <InlineMath math="I" /> 上<strong>遞減</strong>。
            <br /><span className="text-xs text-gray-500">測試法：<InlineMath math="f''(x) < 0" />。幾何特徵：切線位於曲線上方。</span>
          </li>
        </ul>
      </div>

      {/* 4.2 判斷凹凸區間的步驟 */}
      <div className="math-box mb-6 p-6 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-emerald-800">4.2 判斷凹凸區間的步驟 (Procedure)</h3>
        <div className="space-y-4 text-gray-700">
          <p className="text-sm text-gray-600">與判斷增減區間類似，我們使用二階導數進行分析：</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>找出定義域的<strong>邊界點</strong>。</li>
            <li>找出使得 <InlineMath math="f''(x) = 0" /> 或 <InlineMath math="f''(x)" /> <strong>不存在的點</strong>（潛在反曲點）。</li>
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
                  <td>將所有關鍵點由小到大列出，分割區間</td>
                </tr>
                <tr>
                  <td><InlineMath math="f''(x)" /></td>
                  <td className="font-medium">判斷各區間的正負號（<span className="text-indigo-600 font-bold">+</span> 或 <span className="text-rose-600 font-bold">-</span>）</td>
                </tr>
                <tr>
                  <td><InlineMath math="f(x)" /></td>
                  <td>
                    <ul className="list-none space-y-2">
                       <li className="flex items-center gap-2">
                         <span className="text-indigo-600 font-bold">+</span> <InlineMath math="\implies" /> <strong className="text-indigo-700">Concave Upward (CU)</strong>
                       </li>
                       <li className="flex items-center gap-2">
                         <span className="text-rose-600 font-bold">-</span> <InlineMath math="\implies" /> <strong className="text-rose-700">Concave Downward (CD)</strong>
                       </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4.3 反曲點 (Inflection Points) */}
      <div className="math-box mb-6 p-6 bg-cyan-50 rounded-lg shadow-sm border-l-4 border-cyan-500 mt-8">
        <h3 className="text-xl font-bold mb-3 text-cyan-800">4.3 反曲點 (Inflection Point)</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-cyan-700 mb-2 underline decoration-cyan-300">定義 (Definition)</h4>
            <p className="text-gray-700 text-sm mb-2">
              若函數圖形 <InlineMath math="y = f(x)" /> 上的一點滿足以下兩個條件，則稱該點為<strong>反曲點</strong>：
            </p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700 text-sm">
              <li>函數 <InlineMath math="f" /> 在這點<strong>連續 (Continuous)</strong>。</li>
              <li>函數在該點由 <strong>CU 變成 CD</strong>，或由 <strong>CD 變成 CU</strong>。</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-cyan-100">
            <h4 className="font-bold text-cyan-700 mb-2">判定定理 (Theorem)</h4>
            <p className="text-gray-700 text-sm mb-3">
              若 <InlineMath math="(c, f(c))" /> 是一個反曲點，則：
            </p>
            <div className="bg-white p-3 rounded border border-cyan-200 text-center mb-3">
              <InlineMath math="f''(c) = 0 \quad \text{或} \quad f''(c) \text{ 無定義}" />
            </div>
            <p className="text-xs text-rose-600 italic">
              ※ 非常重要：函數 <InlineMath math="f" /> 在 <InlineMath math="c" /> 點本身必須是有意義的（即點存在）。
            </p>
          </div>

          <div className="pt-4 border-t border-cyan-100">
            <h4 className="font-bold text-cyan-700 mb-2">重要備註 (Remark)</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              上述定理的<strong>逆命題不為真</strong>。意即：
              <div className="my-2 flex justify-center items-center gap-4 py-2 bg-gray-50 rounded">
                <InlineMath math="f''(c) = 0" />
                <span className="text-red-500 font-bold">⇏</span>
                <span className="text-gray-600">c 是反曲點</span>
              </div>
              即便 <InlineMath math="f''(c) = 0" />，若兩側凹凸性沒有發生改變，它仍不是反曲點 (Inflection Point)。
            </p>
          </div>
        </div>
      </div>

      {/* 4.4 第二階導數檢定法 */}
      <div className="math-box mb-6 p-6 bg-violet-50 rounded-lg shadow-sm border border-violet-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-violet-800">4.4 第二階導數檢定法 (Second Derivative Test)</h3>
        <p className="mb-4 text-gray-700">
          若 <InlineMath math="f'(c) = 0" />（水平切線）：
        </p>
        <div className="space-y-3">
          <div className="p-3 bg-white rounded border border-violet-200">
            若 <InlineMath math="f''(c) > 0" />，則 <InlineMath math="f(c)" /> 為<strong>相對極小值</strong>（底部）。
          </div>
          <div className="p-3 bg-white rounded border border-violet-200">
            若 <InlineMath math="f''(c) < 0" />，則 <InlineMath math="f(c)" /> 為<strong>相對極大值</strong>（頂部）。
          </div>
          <div className="p-3 bg-white rounded border border-violet-200">
            若 <InlineMath math="f''(c) = 0" />，則檢定無效，須回歸一階導數檢定。
          </div>
        </div>
      </div>
      {/* 4.5 綜合判斷表 */}
      <div className="math-box mb-6 p-6 bg-slate-100 rounded-lg shadow-sm border border-slate-300 mt-12">
        <h3 className="text-xl font-bold mb-4 text-slate-800">4.5 綜合判斷表 (Comprehensive Summary)</h3>
        <p className="mb-4 text-sm text-gray-700">
          結合一階導數與二階導數，我們可以完整描述函數的行為與形狀：
        </p>
        <div className="overflow-x-auto">
          <table className="analysis-table analysis-table-center">
            <thead>
              <tr>
                <th><InlineMath math="f'(x)" /> 正負</th>
                <th><InlineMath math="f''(x)" /> 正負</th>
                <th>圖形特徵</th>
                <th>示意形狀</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-orange-600 font-bold"><InlineMath math="+" /></td>
                <td className="text-indigo-600 font-bold"><InlineMath math="+" /></td>
                <td>遞增且上凹 (Inc & CU)</td>
                <td>
                  <svg width="40" height="30" viewBox="0 0 40 30" className="mx-auto"><path d="M 5 25 Q 35 25 35 5" fill="none" stroke="#666" strokeWidth="2" /></svg>
                </td>
              </tr>
              <tr>
                <td className="text-orange-600 font-bold"><InlineMath math="+" /></td>
                <td className="text-rose-600 font-bold"><InlineMath math="-" /></td>
                <td>遞增且下凹 (Inc & CD)</td>
                <td>
                  <svg width="40" height="30" viewBox="0 0 40 30" className="mx-auto"><path d="M 5 25 Q 5 5 35 5" fill="none" stroke="#666" strokeWidth="2" /></svg>
                </td>
              </tr>
              <tr>
                <td className="text-blue-600 font-bold"><InlineMath math="-" /></td>
                <td className="text-indigo-600 font-bold"><InlineMath math="+" /></td>
                <td>遞減且上凹 (Dec & CU)</td>
                <td>
                  <svg width="40" height="30" viewBox="0 0 40 30" className="mx-auto"><path d="M 5 5 Q 5 25 35 25" fill="none" stroke="#666" strokeWidth="2" /></svg>
                </td>
              </tr>
              <tr>
                <td className="text-blue-600 font-bold"><InlineMath math="-" /></td>
                <td className="text-rose-600 font-bold"><InlineMath math="-" /></td>
                <td>遞減且下凹 (Dec & CD)</td>
                <td>
                  <svg width="40" height="30" viewBox="0 0 40 30" className="mx-auto"><path d="M 5 5 Q 35 5 35 25" fill="none" stroke="#666" strokeWidth="2" /></svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
