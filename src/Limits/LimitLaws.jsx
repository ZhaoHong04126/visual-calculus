// src/Limits/LimitLaws.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function LimitLaws() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title">極限的運算法則與夾擠定理</h2>
      
      <p className="mb-4">
        在實際計算極限時，我們不可能每次都依賴數值列表猜測，或是使用繁瑣的嚴格定義。透過以下幾組基本運算法則與定理，我們可以系統性地拆解並計算複雜的極限。
      </p>

      {/* 1. 基本運算法則 */}
      <div className="math-box">
        <h3 className="text-xl font-bold mb-3 text-blue-800">1. 基本運算法則 (Limit Laws)</h3>
        <p className="mb-2 text-sm text-gray-700">
          假設 <InlineMath settings={{ strict: false }} math="c" /> 為常數，且 <InlineMath settings={{ strict: false }} math="\lim_{x \to a} f(x)" /> 與 <InlineMath settings={{ strict: false }} math="\lim_{x \to a} g(x)" /> 均存在，則下列運算皆成立：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-gray-50 p-4 rounded text-sm">
          <div><strong>和/差：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} [f(x) \pm g(x)] = \lim_{x \to a} f(x) \pm \lim_{x \to a} g(x)" /></div>
          <div><strong>常數積：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} [c \cdot f(x)] = c \cdot \lim_{x \to a} f(x)" /></div>
          <div><strong>乘積：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x)" /></div>
          <div><strong>商：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)} \quad (\text{前提：分母極限不為 0})" /></div>
          <div><strong>次方：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} [f(x)]^n = [\lim_{x \to a} f(x)]^n" /></div>
          <div><strong>開根號：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{\lim_{x \to a} f(x)}" /></div>
        </div>
      </div>

      {/* 2. 直接代入與不定型 */}
      <div className="concept-grid mt-6">
        <div className="concept-card diff-card">
          <h3 className="text-lg font-bold mb-2">2. 直接代入性質</h3>
          <p className="text-sm">
            對於絕大多數的常見函數（如多項式、有理函數等），只要 <InlineMath settings={{ strict: false }} math="a" /> 在函數的定義域內（即分母不為 0），求極限的最快方式就是<strong>直接將 <InlineMath settings={{ strict: false }} math="x = a" /> 代入</strong>：
          </p>
          <BlockMath settings={{ strict: false }} math="\lim_{x \to a} f(x) = f(a)" />
        </div>

        <div className="concept-card" style={{ borderLeft: '4px solid #ef4444', backgroundColor: '#fef2f2' }}>
          <h3 className="text-lg font-bold mb-2">3. 處理 $\frac{0}{0}$ 不定型</h3>
          <p className="text-sm mb-2">
            當直接代入會得到 <InlineMath settings={{ strict: false }} math="\frac{0}{0}" /> 時，極限可能依然存在。我們必須透過代數變形來消除造成分母為 0 的因子：
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><strong>因式分解：</strong> 利用長除法或乘法公式提出共同因式並約分。</li>
            <li><strong>有理化：</strong> 若式子中含有根號，可上下同乘「共軛式」將根號消除。</li>
          </ul>
        </div>
      </div>

      {/* 4. 夾擠定理 */}
      <div className="math-box mt-8 border-l-4 border-purple-500 bg-purple-50">
        <h3 className="text-xl font-bold mb-3 text-purple-800">4. 夾擠定理 (The Squeeze Theorem)</h3>
        <p className="mb-2">
          當我們遇到無法直接化簡、且包含震盪行為的函數（如 <InlineMath settings={{ strict: false }} math="\sin(1/x)" />）時，可以利用這項優美的幾何定理來求極限。
        </p>
        <p className="mb-2 text-sm text-gray-800">
          <strong>定理內容：</strong> 若在 <InlineMath settings={{ strict: false }} math="a" /> 點附近（不包含 <InlineMath settings={{ strict: false }} math="a" /> 本身），函數滿足大小關係：
        </p>
        <BlockMath settings={{ strict: false }} math="g(x) \le f(x) \le h(x)" />
        <p className="mb-2 text-sm text-gray-800">
          且外側兩個函數的極限都收斂到同一個值 <InlineMath settings={{ strict: false }} math="L" />：
        </p>
        <BlockMath settings={{ strict: false }} math="\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L" />
        <p className="mb-2 text-sm text-gray-800">
          則被夾在中間的函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 的極限也必然為 <InlineMath settings={{ strict: false }} math="L" />：
        </p>
        <BlockMath settings={{ strict: false }} math="\lim_{x \to a} f(x) = L" />
      </div>

    </section>
  );
}