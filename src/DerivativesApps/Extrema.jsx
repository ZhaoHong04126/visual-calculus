// src/DerivativesApps/Extrema.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function Extrema() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">3. 極值 (Extrema)</h2>
      
      <p className="mb-4 text-gray-700">
        透過導數分析，我們可以找出函數在定義域內的最高點（極大值）與最低點（極小值）。
      </p>

      {/* 3.1 極值的基本定義 */}
      <div className="math-box mb-6 p-6 bg-blue-50 rounded-lg shadow-sm border-l-4 border-blue-500">
        <h3 className="text-xl font-bold mb-4 text-blue-800">3.1 基本定義 (Definitions)</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 絕對極值 */}
          <div className="bg-white p-5 rounded border-2 border-black">
            <h4 className="font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-3">絕對極值 (Absolute / Global)</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li>
                <strong className="text-blue-900">絕對極大值：</strong> 若 <InlineMath math="f(x) \le f(c)" /> 對所有 <InlineMath math="x \in D" /> 皆成立，則 <InlineMath math="f(c)" /> 為最大值。
              </li>
              <li>
                <strong className="text-blue-900">絕對極小值：</strong> 若 <InlineMath math="f(x) \ge f(c)" /> 對所有 <InlineMath math="x \in D" /> 皆成立，則 <InlineMath math="f(c)" /> 為最小值。
              </li>
            </ul>
          </div>

          {/* 相對極值 */}
          <div className="bg-white p-5 rounded border-2 border-black">
            <h4 className="font-bold text-blue-800 border-b-2 border-blue-100 pb-2 mb-3">相對極值 (Relative / Local)</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li>
                <strong className="text-blue-900">相對極大值：</strong> 若 <InlineMath math="f(x) \le f(c)" /> 對所有在 <InlineMath math="c" /> 附近的 <InlineMath math="x" /> 皆成立。
              </li>
              <li>
                <strong className="text-blue-900">相對極小值：</strong> 若 <InlineMath math="f(x) \ge f(c)" /> 對所有在 <InlineMath math="c" /> 附近的 <InlineMath math="x" /> 皆成立。
              </li>
            </ul>
            <div className="mt-4 p-2 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded font-medium">
              ※ 注意：端點 (Endpoints) 不在相對極值 (Local Extrema) 的考慮範圍內。
            </div>
          </div>
        </div>

        {/* 備註 Remark 24 */}
        <div className="mt-6 p-4 bg-white rounded border border-blue-200">
           <h4 className="font-bold text-blue-800 mb-3 underline decoration-blue-200">重要觀念備註 (Remarks)</h4>
           <div className="space-y-3 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">(1)</span>
                <p>
                  當考慮<strong>開區間 <InlineMath math="(a, b)" /></strong> 時：<br/>
                  絕對極大值 <InlineMath math="\implies" /> 相對極大值；絕對極小值 <InlineMath math="\implies" /> 相對極小值。
                </p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">(2)</span>
                <p>
                  <strong>絕對極值 <InlineMath math="\neq" /> 相對極值</strong>：<br/>
                  兩者是不同的概念。主要區別在於：絕對極值是在「整個定義域」中最大/最小；相對極值只需在「附近」最大/最小，且不包含端點。
                </p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold text-blue-600">(3)</span>
                <p>
                  <strong>並未所有的函數都有極值</strong>：<br/>
                  極值是否存在取決於函數的定義域（是否為閉區間）以及函數的連續性。
                </p>
              </div>
           </div>
        </div>
      </div>

      {/* 3.2 極值定理 (Extreme Value Theorem) */}
      <div className="math-box mb-6 p-6 bg-slate-50 rounded-lg shadow-sm border-l-4 border-slate-500 mt-8">
        <h3 className="text-xl font-bold mb-3 text-slate-800">3.2 極值定理 (Extreme Value Theorem, EVT)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          這是一個保證極值存在的重要定理。
        </p>
        <div className="p-5 bg-white rounded border-2 border-black">
          <p className="font-bold text-slate-700 mb-2">定理內容 (Theorem 26)：</p>
          <p className="text-gray-700 leading-relaxed">
            若函數 <InlineMath math="f" /> 在<strong>有限閉區間 <InlineMath math="[a, b]" /></strong> 上<strong>連續</strong>，則：
          </p>
          <div className="my-3 text-center bg-slate-50 py-3 rounded italic font-medium text-slate-800">
            在 <InlineMath math="[a, b]" /> 中一定可以找到絕對極大值 <InlineMath math="f(c)" /> 與絕對極小值 <InlineMath math="f(d)" />
          </div>
          <p className="text-sm text-gray-500 text-right">
            其中 <InlineMath math="c, d \in [a, b]" />
          </p>
        </div>
        <div className="mt-4 flex gap-3 text-xs">
          <span className="bg-red-50 text-red-600 px-2 py-1 rounded border border-red-100">條件 1：連續性</span>
          <span className="bg-green-50 text-green-600 px-2 py-1 rounded border border-green-100">條件 2：閉區間 [a, b]</span>
        </div>
      </div>

      {/* 3.3 臨界點 */}
      <div className="math-box mb-6 p-6 bg-red-50 rounded-lg shadow-sm border-l-4 border-red-500 mt-8">
        <h3 className="text-xl font-bold mb-3 text-red-800">3.3 臨界點 (Critical Points)</h3>
        <p className="mb-4 text-gray-700">
          極值可能發生的「候選位置」稱為臨界點。
        </p>
        <div className="p-5 bg-white rounded border-2 border-black">
          <p className="text-sm text-gray-700 mb-3">
            若 <InlineMath math="c" /> 在 <InlineMath math="f" /> 的定義域中，且滿足下列任一條件，則 <InlineMath math="c" /> 為臨界點：
          </p>
          <ul className="list-disc ml-8 space-y-2 text-sm text-gray-700">
            <li><InlineMath math="f'(c) = 0" />（切線為水平線）</li>
            <li><InlineMath math="f'(c)" /> 不存在（例如尖點、斷點或垂直切線）</li>
          </ul>
        </div>
      </div>

      {/* 3.4 第一階導數檢定法 */}
      <div className="math-box mb-6 p-6 bg-yellow-50 rounded-lg shadow-sm border-l-4 border-yellow-500 mt-8">
        <h3 className="text-xl font-bold mb-3 text-yellow-800">3.4 第一階導數檢定法 (First Derivative Test)</h3>
        <p className="mb-4 text-gray-700">
          使用臨界點兩側的導數正負號變化，來判定該點是否為極值：
        </p>
        <div className="grid grid-cols-1 gap-3">
          <div className="p-4 bg-white rounded border-2 border-black flex items-center gap-4">
            <div className="bg-red-100 text-red-700 px-3 py-1 rounded font-bold">Max</div>
            <p className="text-sm text-gray-700">
              <InlineMath math="f'(x)" /> 從<strong>正變為負</strong>（遞增轉遞減）<InlineMath math="\implies" /> 相對極大值。
            </p>
          </div>
          <div className="p-4 bg-white rounded border-2 border-black flex items-center gap-4">
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-bold">Min</div>
            <p className="text-sm text-gray-700">
              <InlineMath math="f'(x)" /> 從<strong>負變為正</strong>（遞減轉遞增）<InlineMath math="\implies" /> 相對極小值。
            </p>
          </div>
          <div className="p-4 bg-white rounded border-2 border-black flex items-center gap-4">
            <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded font-bold">None</div>
            <p className="text-sm text-gray-700">
              <InlineMath math="f'(x)" /> 在臨界點兩側<strong>正負號不變</strong> <InlineMath math="\implies" /> 無極值。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
