// src/Integrals/FundamentalTheorem.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './ProofBox.css';

// 使用與其他章節一致的 ProofBox 組件
const ProofBox = ({ title = "查看證明", children }) => {
  return (
    <details className="proof-box">
      <summary>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px', fontSize: '18px' }}>📝</span>
          {title}
        </div>
        <div>
          <span className="proof-toggle-btn expand-text">展開證明 ▼</span>
          <span className="proof-toggle-btn collapse-text">收起證明 ▲</span>
        </div>
      </summary>
      <div className="proof-content">
        {children}
      </div>
    </details>
  );
};

export default function FundamentalTheorem() {
  return (
    <section className="subsection mt-12 pt-8 border-t border-gray-100">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-green-500 pb-2">3. 微積分基本定理 (Fundamental Theorem of Calculus)</h2>
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        微積分基本定理是數學史上最偉大的發現之一。它建立了<strong>導數（變化率）</strong>與<strong>定積分（累積量）</strong>之間的直接聯繫。這個定理將求面積的問題轉化為求反導數的問題。
      </p>

      {/* 3.1 第一部分：積分的微分 */}
      <div className="math-box mb-8 p-6 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100">
        <h3 className="text-xl font-bold mb-3 text-emerald-800">3.1 微積分基本定理第一部分 (FTC Part 1)</h3>
        <p className="mb-4 text-gray-700">
          第一部分告訴我們，如果我們對一個從固定點開始的累積函數求導，結果就是原本的被積函數。
        </p>
        
        <div className="theorem-box bg-emerald-100/50 border-emerald-200 text-emerald-900 p-4 rounded mb-4">
          <strong>定理：</strong> 若 <InlineMath math="f" /> 在 <InlineMath math="[a, b]" /> 上連續，定義函數 <InlineMath math="g" /> 為：
          <BlockMath math="g(x) = \int_a^x f(t) \, dt" />
          則 <InlineMath math="g(x)" /> 在 <InlineMath math="[a, b]" /> 上連續，且在 <InlineMath math="(a, b)" /> 上可微，其導數為：
          <BlockMath math="g'(x) = f(x)" />
        </div>

        {/* 這裡加入證明過程 (可摺疊) */}
        <ProofBox title="查看證明過程 (Proof)">
          <div className="text-sm text-gray-700 space-y-4">
            <p>
              1. 根據導函數定義與積分的性質，考慮差商：
              <BlockMath math="\frac{g(x+h) - g(x)}{h} = \frac{1}{h} \left( \int_a^{x+h} f(t)dt - \int_a^x f(t)dt \right) = \frac{1}{h} \int_x^{x+h} f(t) \, dt" />
            </p>
            <p>
              2. 假設 <InlineMath math="h > 0" />。由於 <InlineMath math="f" /> 在 <InlineMath math="[x, x+h]" /> 上連續，根據<strong>極值定理 (Extreme Value Theorem)</strong>，在該區間內必存在最大值 <InlineMath math="M" /> 與最小值 <InlineMath math="m" />：
              <BlockMath math="m = f(v), \quad M = f(u) \quad (\text{其中 } u, v \in [x, x+h])" />
            </p>
            <p>
              3. 因此對區間內所有 <InlineMath math="t" />，皆滿足 <InlineMath math="m \le f(t) \le M" />。將其積分：
              <BlockMath math="\int_x^{x+h} m \, dt \le \int_x^{x+h} f(t) \, dt \le \int_x^{x+h} M \, dt" />
              <BlockMath math="m \cdot h \le \int_x^{x+h} f(t) \, dt \le M \cdot h" />
            </p>
            <p>
              4. 同除以 <InlineMath math="h" /> 並代入第一步的差商：
              <BlockMath math="f(v) \le \frac{g(x+h) - g(x)}{h} \le f(u)" />
            </p>
            <p>
              5. 當 <InlineMath math="h \to 0" /> 時，由於 <InlineMath math="u, v" /> 被擠在 <InlineMath math="x" /> 與 <InlineMath math="x+h" /> 之間，故 <InlineMath math="u \to x" /> 且 <InlineMath math="v \to x" />。
              又因 <InlineMath math="f" /> 連續，故 <InlineMath math="f(v) \to f(x)" /> 且 <InlineMath math="f(u) \to f(x)" />。
            </p>
            <p className="font-bold text-emerald-800">
              6. 根據夾擠定理 (Squeeze Theorem)：
              <BlockMath math="\lim_{h \to 0} \frac{g(x+h) - g(x)}{h} = f(x)" />
              得證 <InlineMath math="g'(x) = f(x)" />。
            </p>
          </div>
        </ProofBox>

        <div className="mt-6 p-4 bg-white/60 rounded-md border border-emerald-200">
          <h4 className="font-bold text-emerald-900 mb-2">💡 直觀理解：</h4>
          <p className="text-sm text-gray-700">
            <InlineMath math="g(x)" /> 代表從 <InlineMath math="a" /> 到 <InlineMath math="x" /> 下方的面積。當 <InlineMath math="x" /> 增加一個極小量 <InlineMath math="\Delta x" /> 時，面積的增加量約為一個寬度為 <InlineMath math="\Delta x" />、高度為 <InlineMath math="f(x)" /> 的長方形面積。
          </p>
          <BlockMath math="\frac{\Delta \text{Area}}{\Delta x} \approx \frac{f(x) \cdot \Delta x}{\Delta x} = f(x)" />
        </div>
      </div>

      {/* 3.2 第二部分：定積分的計算 */}
      <div className="math-box mb-8 p-6 bg-sky-50 rounded-lg shadow-sm border border-sky-100">
        <h3 className="text-xl font-bold mb-3 text-sky-800">3.2 微積分基本定理第二部分 (FTC Part 2)</h3>
        <p className="mb-4 text-gray-700">
          第二部分提供了計算定積分的簡便方法，不再需要計算黎曼和的極限。
        </p>

        <div className="theorem-box bg-sky-100/50 border-sky-200 text-sky-900 p-4 rounded mb-4">
          <strong>定理（評價定理）：</strong> 若 <InlineMath math="f" /> 在 <InlineMath math="[a, b]" /> 上連續，且 <InlineMath math="F" /> 是 <InlineMath math="f" /> 的任一反導數（即 <InlineMath math="F' = f" />），則：
          <BlockMath math="\int_a^b f(x) \, dx = F(b) - F(a)" />
        </div>

        {/* 這裡加入 Part 2 的證明 (可摺疊) */}
        <ProofBox title="查看證明過程 (Proof)">
          <div className="text-sm text-gray-700 space-y-4">
            <p>
              1. 令 <InlineMath math="g(x) = \int_a^x f(t) \, dt" />。根據第一部分，我們知道 <InlineMath math="g'(x) = f(x)" />，也就是說 <InlineMath math="g" /> 是 <InlineMath math="f" /> 的一個反導數。
            </p>
            <p>
              2. 若 <InlineMath math="F" /> 是 <InlineMath math="f" /> 的任意反導數，則根據反導數性質，<InlineMath math="F" /> 與 <InlineMath math="g" /> 只差一個常數 <InlineMath math="C" />：
              <BlockMath math="F(x) = g(x) + C" />
            </p>
            <p>
              3. 代入 <InlineMath math="x = a" />：
              <BlockMath math="F(a) = g(a) + C = \int_a^a f(t) \, dt + C = 0 + C = C" />
              得 <InlineMath math="C = F(a)" />。
            </p>
            <p>
              4. 代入 <InlineMath math="x = b" />：
              <BlockMath math="F(b) = g(b) + C = \int_a^b f(t) \, dt + F(a)" />
            </p>
            <p className="font-bold text-sky-800">
              5. 移項後得：
              <BlockMath math="\int_a^b f(x) \, dx = F(b) - F(a)" />
              得證。
            </p>
          </div>
        </ProofBox>

        <p className="text-gray-700 mb-4 mt-6">
          我們通常使用符號 <InlineMath math="[F(x)]_a^b" /> 或 <InlineMath math="F(x)\big|_a^b" /> 來表示 <InlineMath math="F(b) - F(a)" />。
        </p>

        <div className="example-box bg-white p-5 border-l-4 border-sky-500 rounded shadow-sm">
          <h4 className="font-bold text-sky-900 mb-3">範例計算：</h4>
          <p className="mb-2">計算 <InlineMath math="\int_1^3 x^2 \, dx" />：</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>找到 <InlineMath math="x^2" /> 的反導數：<InlineMath math="F(x) = \frac{x^3}{3}" /></li>
            <li>代入上下限：
              <BlockMath math="\int_1^3 x^2 \, dx = \left[ \frac{x^3}{3} \right]_1^3 = \frac{3^3}{3} - \frac{1^3}{3} = 9 - \frac{1}{3} = \frac{26}{3}" />
            </li>
          </ol>
        </div>
      </div>

      {/* 3.3 總結與關聯 */}
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-3 text-gray-800">為什麼這很重要？</h3>
        <p className="text-gray-700">
          微積分基本定理說明了<strong>微分與積分是互逆的過程</strong>：
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">
          <li><strong>Part 1</strong> 說：先積分再微分，會回到原函數。</li>
          <li><strong>Part 2</strong> 說：先微分再積分，也會回到原函數（差一個常數）。</li>
        </ul>
        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 text-sm">
          這就像是「加法與減法」或是「乘法與除法」的關係。正是因為這個定理，我們才能用簡單的代數方法解決複雜的面積與體積計算問題。
        </div>
      </div>
    </section>
  );
}
