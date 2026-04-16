import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './Continuity.css';

export default function ImportantTheorems() {
  return (
    <section className="subsection mt-12 pb-20">
      <h2 className="section-title text-2xl font-bold mb-6 border-b-2 border-emerald-500 pb-2">
        3. 連續函數的重要定理
      </h2>

      <p className="mb-6 text-gray-700 leading-relaxed">
        在微積分中，連續函數擁有許多優良的性質。以下三個定理（介值定理、勘根定理、極值定理）是後續討論微分與積分的重要基礎，它們保證了某些特定點或值的「存在性」。
      </p>

      {/* 3.1 勘根定理 */}
      <div className="math-box mb-8 p-6 bg-indigo-50 rounded-xl shadow-sm border border-indigo-200">
        <h3 className="text-xl font-bold mb-4 text-indigo-800 flex items-center">
          <span className="mr-2">🔍</span> 3.1 勘根定理 (Bolzano's Theorem / Root-finding Theorem)
        </h3>
        <p className="mb-4 text-gray-700">
          這是介值定理最實用的應用。如果我們發現一個連續函數在某個區間的兩端一正一負，那麼中間一定會「穿過」零點。
        </p>
        
        <div className="bg-white p-5 rounded-lg border border-indigo-200 shadow-sm">
          <strong className="text-indigo-900 block mb-3">定理內容：</strong>
          <div className="text-gray-800 leading-relaxed">
            若函數 <InlineMath math="f" /> 在閉區間 <InlineMath math="[a, b]" /> 上連續，且兩端點函數值<strong>異號</strong>（即 <InlineMath math="f(a) \cdot f(b) < 0" />），則在開區間 <InlineMath math="(a, b)" /> 內至少存在一個實數 <InlineMath math="c" />，使得：
            <div className="my-4 p-3 bg-indigo-50/50 border border-indigo-100 rounded-md text-center">
              <BlockMath math="f(c) = 0" />
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600 italic">
            *註：這保證了方程式 <InlineMath math="f(x) = 0" /> 在該區間內必定有實數根。
          </p>
        </div>
      </div>

      {/* 3.2 介值定理 */}
      <div className="math-box mb-8 p-6 bg-purple-50 rounded-xl shadow-sm border border-purple-200">
        <h3 className="text-xl font-bold mb-4 text-purple-800 flex items-center">
          <span className="mr-2">📏</span> 3.2 介值定理 (Intermediate Value Theorem, IVT)
        </h3>
        <p className="mb-4 text-gray-700">
          直觀來說，如果你從海拔 100 公尺爬到 500 公尺，只要你的軌跡是連續的，你一定會經過海拔 300 公尺的某個位置。
        </p>
        
        <div className="bg-white p-5 rounded-lg border border-purple-200 shadow-sm">
          <strong className="text-purple-900 block mb-3">定理內容：</strong>
          <div className="text-gray-800 leading-relaxed">
            若函數 <InlineMath math="f" /> 在閉區間 <InlineMath math="[a, b]" /> 上<strong>連續</strong>，且 <InlineMath math="k" /> 是一個介於 <InlineMath math="f(a)" /> 與 <InlineMath math="f(b)" /> 之間的任意實數，則在開區間 <InlineMath math="(a, b)" /> 內<strong>至少存在一個實數 <InlineMath math="c" /></strong>，使得：
            <div className="my-4 p-3 bg-purple-50/50 border border-purple-100 rounded-md text-center">
              <BlockMath math="f(c) = k" />
            </div>
          </div>
        </div>
      </div>

      {/* 3.3 極值定理 */}
      <div className="math-box mb-8 p-6 bg-rose-50 rounded-xl shadow-sm border border-rose-200">
        <h3 className="text-xl font-bold mb-4 text-rose-800 flex items-center">
          <span className="mr-2">🏔️</span> 3.3 極值定理 (Extreme Value Theorem, EVT)
        </h3>
        <p className="mb-4 text-gray-700">
          此定理保證了一個連續函數在閉區間內一定能找到「最高點」與「最低點」。
        </p>
        
        <div className="bg-white p-5 rounded-lg border border-rose-200 shadow-sm">
          <strong className="text-rose-900 block mb-3">定理內容：</strong>
          <div className="text-gray-800 leading-relaxed">
            若函數 <InlineMath math="f" /> 在閉區間 <InlineMath math="[a, b]" /> 上<strong>連續</strong>，則 <InlineMath math="f" /> 在該區間內必定存在：
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li><strong>絕對最大值 (Absolute Maximum)：</strong> 存在 <InlineMath math="d \in [a, b]" /> 使得 <InlineMath math="f(d) \ge f(x)" /></li>
              <li><strong>絕對最小值 (Absolute Minimum)：</strong> 存在 <InlineMath math="c \in [a, b]" /> 使得 <InlineMath math="f(c) \le f(x)" /></li>
            </ul>
            <div className="mt-4 p-3 bg-rose-50/50 border border-rose-100 rounded-md text-center">
              <BlockMath math="f(c) \le f(x) \le f(d) \quad \forall x \in [a, b]" />
            </div>
          </div>
        </div>

        <div className="mt-5 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
          <p className="text-amber-900 text-sm font-semibold mb-1">⚠️ 成立的關鍵前提：</p>
          <ol className="list-decimal list-inside text-amber-800 text-xs space-y-1">
            <li>函數必須在該區間內<strong>連續</strong>。</li>
            <li>區間必須是<strong>閉區間 (Closed Interval)</strong>，即包含端點。</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
