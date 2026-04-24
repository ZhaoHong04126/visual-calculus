// src/Integrals/USubstitution.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './ProofBox.css';

// 可摺疊解題過程元件
const SolutionBox = ({ children }) => (
  <details className="proof-box">
    <summary>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px', fontSize: '18px' }}>✏️</span>
        查看解題過程
      </div>
      <div>
        <span className="proof-toggle-btn expand-text">展開 ▼</span>
        <span className="proof-toggle-btn collapse-text">收起 ▲</span>
      </div>
    </summary>
    <div className="proof-content">{children}</div>
  </details>
);

export default function USubstitution() {
  return (
    <section className="subsection mt-12 pt-8 border-t border-gray-100">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-violet-500 pb-2">
        1. 變數變換 (u-Substitution)
      </h2>

      <p className="mb-6 text-gray-700 leading-relaxed">
        許多積分無法直接套用基本公式求解。<strong>變數變換法（u-Substitution）</strong>
        是最常用的積分技巧，其核心思想是透過引入新變數 <InlineMath math="u" />，
        將一個複雜的積分化簡為可以直接計算的標準形式。它本質上是<strong>連鎖律 (Chain Rule) 的逆運算</strong>。
      </p>

      {/* 4.1.1 定理 */}
      <div className="math-box mb-6 p-6 bg-violet-50 rounded-lg shadow-sm border border-violet-100">
        <h3 className="text-xl font-bold mb-3 text-violet-800">
          1.1 定理：變數變換法
        </h3>

        <div className="mb-4 p-4 bg-white/80 rounded-lg border-l-4 border-violet-500 shadow-sm">
          <h4 className="font-bold text-violet-900 mb-2">💡 核心思維：連鎖律的逆運算</h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            回想連鎖律：若 <InlineMath math="F'(u) = f(u)" />，則
          </p>
          <BlockMath math="\frac{d}{dx} F(g(x)) = f(g(x)) \cdot g'(x)" />
          <p className="text-sm text-gray-700 mt-1 leading-relaxed">
            將等式兩邊積分，就得到了變數變換法的公式。
          </p>
        </div>

        <div className="theorem-box bg-violet-100/50 border-violet-200 text-violet-900 mb-4">
          <strong>定理（不定積分）：</strong>若 <InlineMath math="g" /> 可微，且 <InlineMath math="f" /> 在 <InlineMath math="g" /> 的值域上有反導數，則：
          <BlockMath math="\int f(g(x)) \cdot g'(x) \, dx = \int f(u) \, du = F(u) + C = F(g(x)) + C" />
          其中令 <InlineMath math="u = g(x)" />，則 <InlineMath math="du = g'(x) \, dx" />。
        </div>

        <div className="theorem-box bg-violet-100/50 border-violet-200 text-violet-900">
          <strong>定理（定積分）：</strong>若 <InlineMath math="g'" /> 在 <InlineMath math="[a, b]" /> 上連續，且 <InlineMath math="f" /> 在 <InlineMath math="g" /> 的值域上連續，則：
          <BlockMath math="\int_a^b f(g(x)) \cdot g'(x) \, dx = \int_{g(a)}^{g(b)} f(u) \, du" />
          <p className="text-sm mt-2 opacity-80">
            ⚠️ 注意：換元後積分上下限也必須跟著從 <InlineMath math="x" /> 值轉換為對應的 <InlineMath math="u" /> 值。
          </p>
        </div>
      </div>

      {/* 4.1.2 操作步驟 */}
      <div className="math-box mb-6 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-200 mt-8">
        <h3 className="text-xl font-bold mb-4 text-slate-800">
          1.2 操作步驟 (How To Use)
        </h3>
        <ol className="space-y-4">
          <li className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center text-sm">1</span>
            <div>
              <p className="font-semibold text-gray-800">選擇換元目標 <InlineMath math="u" /></p>
              <p className="text-sm text-gray-600 mt-1">
                找出被積函數中的「內層函數」<InlineMath math="g(x)" /> 令其為 <InlineMath math="u" />。
                通常是根號內、分母、指數或三角函數的引數。
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center text-sm">2</span>
            <div>
              <p className="font-semibold text-gray-800">計算微分 <InlineMath math="du" /></p>
              <p className="text-sm text-gray-600 mt-1">
                對 <InlineMath math="u = g(x)" /> 微分，得到 <InlineMath math="du = g'(x) \, dx" />，並確認 <InlineMath math="g'(x) \, dx" /> 出現在原積分中。
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center text-sm">3</span>
            <div>
              <p className="font-semibold text-gray-800">完全代換，消去 <InlineMath math="x" /></p>
              <p className="text-sm text-gray-600 mt-1">
                將整個積分式全部換成 <InlineMath math="u"  /> 的式子，積分式中不應有任何 <InlineMath math="x" />。
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center text-sm">4</span>
            <div>
              <p className="font-semibold text-gray-800">對 <InlineMath math="u" /> 進行積分</p>
              <p className="text-sm text-gray-600 mt-1">
                計算關於 <InlineMath math="u" /> 的積分，套用已知公式。
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 text-white font-bold flex items-center justify-center text-sm">5</span>
            <div>
              <p className="font-semibold text-gray-800">回代（不定積分）/ 換上下限（定積分）</p>
              <p className="text-sm text-gray-600 mt-1">
                不定積分：將 <InlineMath math="u = g(x)" /> 代回，用 <InlineMath math="x" /> 表達最終答案。<br />
                定積分：直接代入 <InlineMath math="u" /> 的上下限 <InlineMath math="g(b)" /> 與 <InlineMath math="g(a)" /> 求值。
              </p>
            </div>
          </li>
        </ol>
      </div>

      {/* 4.1.3 範例 */}
      <div className="example-box mt-8 border-t-4 border-violet-500 shadow-md">
        <h3 className="example-title text-xl font-bold text-violet-900 mb-6 flex items-center">
          <span className="mr-2">📝</span> 1.3 範例練習
        </h3>

        <div className="space-y-8">

          {/* 範例 1 */}
          <div className="p-5 bg-violet-50 rounded-lg border border-violet-100">
            <p className="font-bold text-violet-900 mb-2">
              範例 1（基本換元）：計算 <InlineMath math="\displaystyle\int 2x(x^2+1)^5 \, dx" />
            </p>
            <SolutionBox>
              <div className="text-sm text-gray-700 space-y-3">
                <p><strong>Step 1：</strong>令 <InlineMath math="u = x^2 + 1" />（內層函數）</p>
                <p><strong>Step 2：</strong>微分得 <InlineMath math="du = 2x \, dx" />（恰好出現在被積式中）</p>
                <p><strong>Step 3：</strong>代換整個積分：</p>
                <BlockMath math="\int 2x(x^2+1)^5 \, dx = \int u^5 \, du" />
                <p><strong>Step 4：</strong>套用冪次積分公式：</p>
                <BlockMath math="= \frac{u^6}{6} + C" />
                <p><strong>Step 5：</strong>回代 <InlineMath math="u = x^2+1" />：</p>
                <BlockMath math="= \frac{(x^2+1)^6}{6} + C" />
              </div>
            </SolutionBox>
          </div>

          {/* 範例 2 */}
          <div className="p-5 bg-violet-50 rounded-lg border border-violet-100">
            <p className="font-bold text-violet-900 mb-2">
              範例 2（需調整係數）：計算 <InlineMath math="\displaystyle\int x \cdot e^{x^2} \, dx" />
            </p>
            <SolutionBox>
              <div className="text-sm text-gray-700 space-y-3">
                <p><strong>Step 1：</strong>令 <InlineMath math="u = x^2" /></p>
                <p><strong>Step 2：</strong>微分得 <InlineMath math="du = 2x \, dx" />，故 <InlineMath math="x \, dx = \dfrac{1}{2} du" /></p>
                <p><strong>Step 3：</strong>代換：</p>
                <BlockMath math="\int x \cdot e^{x^2} \, dx = \int e^{u} \cdot \frac{1}{2} \, du = \frac{1}{2} \int e^u \, du" />
                <p><strong>Step 4：</strong>積分：</p>
                <BlockMath math="= \frac{1}{2} e^u + C" />
                <p><strong>Step 5：</strong>回代 <InlineMath math="u = x^2" />：</p>
                <BlockMath math="= \frac{1}{2} e^{x^2} + C" />
              </div>
            </SolutionBox>
          </div>

          {/* 範例 3 */}
          <div className="p-5 bg-violet-50 rounded-lg border border-violet-100">
            <p className="font-bold text-violet-900 mb-2">
              範例 3（定積分換元）：計算 <InlineMath math="\displaystyle\int_0^1 3x^2\sqrt{x^3+1} \, dx" />
            </p>
            <SolutionBox>
              <div className="text-sm text-gray-700 space-y-3">
                <p><strong>Step 1：</strong>令 <InlineMath math="u = x^3 + 1" /></p>
                <p><strong>Step 2：</strong>微分得 <InlineMath math="du = 3x^2 \, dx" /></p>
                <p><strong>Step 3：</strong>換算上下限：</p>
                <ul className="ml-4 space-y-1">
                  <li>當 <InlineMath math="x = 0" />：<InlineMath math="u = 0^3 + 1 = 1" /></li>
                  <li>當 <InlineMath math="x = 1" />：<InlineMath math="u = 1^3 + 1 = 2" /></li>
                </ul>
                <p><strong>Step 4：</strong>代換並積分（直接用 <InlineMath math="u" /> 的上下限）：</p>
                <BlockMath math="\int_0^1 3x^2\sqrt{x^3+1} \, dx = \int_1^2 \sqrt{u} \, du = \int_1^2 u^{1/2} \, du" />
                <BlockMath math="= \left[ \frac{2}{3} u^{3/2} \right]_1^2 = \frac{2}{3}(2)^{3/2} - \frac{2}{3}(1)^{3/2}" />
                <BlockMath math="= \frac{2}{3}(2\sqrt{2}) - \frac{2}{3} = \frac{4\sqrt{2}-2}{3}" />
              </div>
            </SolutionBox>
          </div>

          {/* 範例 4 */}
          <div className="p-5 bg-violet-50 rounded-lg border border-violet-100">
            <p className="font-bold text-violet-900 mb-2">
              範例 4（含對數）：計算 <InlineMath math="\displaystyle\int \frac{\cos x}{\sin x} \, dx" />
            </p>
            <SolutionBox>
              <div className="text-sm text-gray-700 space-y-3">
                <p><strong>Step 1：</strong>令 <InlineMath math="u = \sin x" />（分母即為內層函數）</p>
                <p><strong>Step 2：</strong>微分得 <InlineMath math="du = \cos x \, dx" />（分子剛好是 <InlineMath math="\cos x \, dx" />）</p>
                <p><strong>Step 3：</strong>代換：</p>
                <BlockMath math="\int \frac{\cos x}{\sin x} \, dx = \int \frac{1}{u} \, du" />
                <p><strong>Step 4：</strong>積分：</p>
                <BlockMath math="= \ln|u| + C" />
                <p><strong>Step 5：</strong>回代 <InlineMath math="u = \sin x" />：</p>
                <BlockMath math="= \ln|\sin x| + C" />
              </div>
            </SolutionBox>
          </div>

        </div>
      </div>

      {/* 4.1.4 常見錯誤 */}
      <div className="mt-8 p-5 bg-red-50 rounded-lg border border-red-200">
        <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
          <span className="mr-2">⚠️</span> 1.4 常見錯誤
        </h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-3">
            <span className="text-red-500 font-bold flex-shrink-0">✗</span>
            <div>
              <p className="font-semibold">忘記換算 <InlineMath math="dx" />：</p>
              <p>換元後 <InlineMath math="dx" /> 也必須替換為 <InlineMath math="du" />（含係數），否則結果有誤。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold flex-shrink-0">✗</span>
            <div>
              <p className="font-semibold">定積分忘記換上下限：</p>
              <p>換元後積分限必須從 <InlineMath math="x" /> 值換算為對應的 <InlineMath math="u" /> 值，或者求完不定積分再回代後才代入原 <InlineMath math="x" /> 限。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold flex-shrink-0">✗</span>
            <div>
              <p className="font-semibold">不定積分忘記回代：</p>
              <p>最終答案必須用原變數 <InlineMath math="x" /> 表示，不能留著 <InlineMath math="u" />。</p>
            </div>
          </li>
        </ul>
      </div>

      {/* 4.1.5 換元選擇技巧小結 */}
      <div className="mt-8 p-5 bg-violet-100/40 rounded-lg border border-violet-200">
        <h3 className="text-lg font-bold text-violet-900 mb-3">💡 1.5 換元選擇技巧小結</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="p-3 bg-white rounded border border-violet-100">
            <p className="font-semibold text-violet-800 mb-1">適合換元的型態</p>
            <ul className="space-y-1 list-disc ml-4">
              <li><InlineMath math="\int f(ax+b) \, dx" /> → 令 <InlineMath math="u = ax+b" /></li>
              <li><InlineMath math="\int [g(x)]^n g'(x) \, dx" /> → 令 <InlineMath math="u = g(x)" /></li>
              <li><InlineMath math="\int \frac{g'(x)}{g(x)} \, dx" /> → 令 <InlineMath math="u = g(x)" /></li>
              <li><InlineMath math="\int e^{g(x)} g'(x) \, dx" /> → 令 <InlineMath math="u = g(x)" /></li>
            </ul>
          </div>
          <div className="p-3 bg-white rounded border border-violet-100">
            <p className="font-semibold text-violet-800 mb-1">判斷換元是否成功</p>
            <ul className="space-y-1 list-disc ml-4">
              <li>換元後積分式中不應有任何 <InlineMath math="x" /></li>
              <li>若換元後仍有 <InlineMath math="x" />，嘗試其他換元目標</li>
              <li>整個 <InlineMath math="g'(x) \, dx" /> 必須完整出現在被積式中（可差常數倍）</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}
