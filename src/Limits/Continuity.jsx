// src/Limits/Continuity.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import DiscontinuityVisualizer from './DiscontinuityVisualizer';

export default function Continuity() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title">6. 連續 (Continuity)</h2>
      
      <p className="mb-4">
        在了解極限的概念後，我們可以來精確定義一個函數在某一點或某個區間內是否「連續」。直觀上，如果一個函數的圖形可以「一筆畫完」而不需要抬起筆，我們就說它是連續的。
      </p>

      {/* 6.1 連續的三條件 */}
      <div className="math-box mb-6 p-6 bg-blue-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3 text-blue-800">6.1 連續的嚴格定義</h3>
        <p className="mb-2">
          我們說函數 <InlineMath math="f(x)" /> 在點 <InlineMath math="x = a" /> 處連續 (continuous at <InlineMath math="a" />)，必須<strong>同時滿足</strong>以下三個條件：
        </p>
        <ol className="list-decimal list-inside space-y-3 mt-4 text-gray-800">
          <li><strong>函數有定義：</strong> <InlineMath math="f(a)" /> 必須存在（為一實數）。</li>
          <li><strong>極限存在：</strong> 雙側極限 <InlineMath math="\lim_{x \to a} f(x)" /> 必須存在。</li>
          <li><strong>極限等於函數值：</strong> 這是最核心的條件，代表圖形沒有破洞也沒有錯位：
            <div className="my-2">
              <BlockMath math="\lim_{x \to a} f(x) = f(a)" />
            </div>
          </li>
        </ol>
        <p className="mt-4 text-sm text-gray-700 border-t border-blue-200 pt-3">
          如果上述任何一個條件不滿足，我們就說函數在 <InlineMath math="x = a" /> 處<strong>不連續 (Discontinuous)</strong>。
        </p>
      </div>

      {/* 6.2 不連續的種類 */}
      <h3 className="text-xl font-bold mt-8 mb-4 border-b pb-2">6.2 不連續點的種類</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white border-l-4 border-blue-500 shadow-sm rounded">
          <h3 className="text-lg font-bold mb-2">可移除不連續<br/>(Removable)</h3>
          <p className="text-sm text-gray-600">
            極限 <InlineMath math="\lim_{x \to a} f(x)" /> 存在，但是函數在該點沒有定義，或是極限值不等於 <InlineMath math="f(a)" />。圖形上看起來像是有一個「洞」。我們可以藉由重新定義該點的值來修補它。
          </p>
        </div>
        <div className="p-4 bg-white border-l-4 border-yellow-500 shadow-sm rounded">
          <h3 className="text-lg font-bold mb-2">跳躍不連續<br/>(Jump)</h3>
          <p className="text-sm text-gray-600">
            左極限與右極限都存在，但是它們<strong>不相等</strong>。圖形上看起來像是一個階梯狀的斷層，無法透過補一個點來修復。常見於分段函數 (Piecewise Functions)。
          </p>
        </div>
        <div className="p-4 bg-white border-l-4 border-red-500 shadow-sm rounded">
          <h3 className="text-lg font-bold mb-2">無窮不連續<br/>(Infinite)</h3>
          <p className="text-sm text-gray-600">
            函數在該點的左極限或右極限趨近於正負無窮大。也就是說，該點剛好發生了垂直漸近線。例如 <InlineMath math="f(x) = \frac{1}{x}" /> 在 <InlineMath math="x=0" /> 處的不連續。
          </p>
        </div>
      </div>

      <DiscontinuityVisualizer />

      {/* 6.3 中間值定理 */}
      <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-3">6.3 中間值定理 (Intermediate Value Theorem, IVT)</h3>
        <p className="mb-4 text-gray-700">
          這是一個非常重要且直觀的存在性定理。想像一下：如果你要從海拔 100 公尺爬到 500 公尺，只要你的移動軌跡是「連續」沒有瞬間傳送的，那麼你一定會經過海拔 300 公尺的某個地方。
        </p>
        
        <div className="bg-white p-4 rounded border border-gray-200">
          <strong className="text-blue-800">定理內容：</strong>
          <p className="mt-2 text-sm text-gray-800">
            若函數 <InlineMath math="f" /> 在閉區間 <InlineMath math="[a, b]" /> 上連續，且 <InlineMath math="N" /> 是一個嚴格介於 <InlineMath math="f(a)" /> 與 <InlineMath math="f(b)" /> 之間的任意數字（其中 <InlineMath math="f(a) \neq f(b)" />），則在開區間 <InlineMath math="(a, b)" /> 內<strong>至少存在一個實數 <InlineMath math="c" /></strong>，使得：
          </p>
          <div className="my-2">
            <BlockMath math="f(c) = N" />
          </div>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 rounded text-sm border border-yellow-200">
          <strong className="text-yellow-800">💡 實際應用：勘根定理</strong><br />
          <p className="mt-1 text-gray-700">
            如果我們發現函數在某區間的兩端點函數值一正一負（即 <InlineMath math="f(a) \cdot f(b) < 0" />），只要函數是連續的，根據 IVT，在 0 與這兩值之間必定存在某個 <InlineMath math="c" /> 使得 <InlineMath math="f(c) = 0" />。這保證了<strong>方程式在該區間內必定有實數根</strong>。
          </p>
        </div>
      </div>
    </section>
  );
}