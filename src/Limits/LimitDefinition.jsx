import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './Limits.css';

export default function LimitDefinition() {
  return (
    <section className="subsection">
      <h2 className="section-title">1. 函數極限的直觀定義與記號</h2>

      <p className="mb-4">
        極限（Limit）描述的是當自變數 <InlineMath settings={{ strict: false }} math="x" /> 「愈來愈接近」某個值 <InlineMath settings={{ strict: false }} math="a" /> 時，函數值 <InlineMath settings={{ strict: false }} math="f(x)" /> 是否會穩定地趨近於某個定值 <InlineMath settings={{ strict: false }} math="L" />。
      </p>

      {/* 1.1 極限的符號表示 */}
      <div className="math-box">
        <h3 className="text-xl font-bold mb-3 text-blue-800">1.1 極限的符號表示</h3>
        <p className="mb-2">如果當 <InlineMath settings={{ strict: false }} math="x" /> 靠近 <InlineMath settings={{ strict: false }} math="a" /> 但<strong>不等於</strong> <InlineMath settings={{ strict: false }} math="a" /> 時，<InlineMath settings={{ strict: false }} math="f(x)" /> 的值可以任意地靠近 <InlineMath settings={{ strict: false }} math="L" />，我們記作：</p>
        <BlockMath settings={{ strict: false }} math="\lim_{x \to a} f(x) = L" />
        <p className="mt-2 text-sm text-gray-700">或者用另一種表示法：</p>
        <BlockMath settings={{ strict: false }} math="f(x) \to L \quad \text{as} \quad x \to a" />
      </div>

      {/* 重要觀念提醒 */}
      <div className="concept-grid mt-6">
        <div className="concept-card" style={{ borderLeft: '4px solid #f59e0b', backgroundColor: '#fef3c7' }}>
          <h3 className="text-lg font-bold mb-2">
            ⚠️ 1.2 重要觀念：極限 <InlineMath math="\neq" /> 函數值
          </h3>
          <p className="text-sm">
            求極限 <InlineMath settings={{ strict: false }} math="\lim_{x \to a} f(x)" /> 與求該點的函數值 <InlineMath settings={{ strict: false }} math="f(a)" /> 是兩件完全不同的事 ：
          </p>
          <ul className="list-disc list-inside mt-2 text-xs space-y-1">
            <li><InlineMath settings={{ strict: false }} math="f(a)" />：函數在 <InlineMath settings={{ strict: false }} math="a" /> 這一點的<strong>實際數值</strong>。</li>
            <li>極限：當 <InlineMath settings={{ strict: false }} math="x" /> 逼近 <InlineMath settings={{ strict: false }} math="a" /> 時，函數值<strong>趨向的目標</strong>，我們並不在乎點 <InlineMath settings={{ strict: false }} math="a" /> 表面上的狀況。</li>
          </ul>
        </div>

        <div className="concept-card diff-card">
          <h3 className="text-lg font-bold mb-2">🔍 1.3 代值法的侷限</h3>
          <p className="text-sm">
            雖然透過列表帶入數值（如 <InlineMath settings={{ strict: false }} math="0.9, 0.99, 1.01 \dots" />）可以幫助理解，但這並非嚴謹的求極限方法，有時會因為取值的巧合而產生誤導。
          </p>
        </div>
      </div>

      {/* 1.4 嚴格定義 */}
      <div className="math-box mt-8 p-6 bg-indigo-50 rounded-lg shadow-sm border border-indigo-200">
        <h3 className="text-xl font-bold mb-4 text-indigo-800">1.4 極限的嚴格定義 (Epsilon-Delta Definition)</h3>
        <p className="mb-4 text-gray-800">
          為了克服直觀定義中「愈來愈接近」這種模糊的用詞，數學家柯西與魏爾斯特拉斯發展了嚴密的 <InlineMath math="\epsilon-\delta" /> (Epsilon-Delta) 定義：
        </p>

        <div className="bg-white p-5 rounded border border-indigo-100 flex justify-center mb-4">
          <BlockMath math="\forall \epsilon > 0, \exists \delta > 0 \text{ such that } 0 < |x - a| < \delta \implies |f(x) - L| < \epsilon" />
        </div>

        <blockquote className="border-l-4 border-indigo-300 bg-indigo-50/50 p-4 rounded italic text-gray-700 mb-6 font-serif">
          "For all (every) <InlineMath math="\epsilon > 0" />, there exists a <InlineMath math="\delta > 0" />,
          such that <InlineMath math="0 < |x-a| < \delta" />, then <InlineMath math="|f(x)-L| < \epsilon" />. <br />
          We say that the limit of <InlineMath math="f(x)" /> as <InlineMath math="x" /> approaches <InlineMath math="a" /> is <InlineMath math="L" />, and we write <InlineMath math="\lim_{x \to a} f(x) = L" />."
        </blockquote>

        <h4 className="font-bold text-indigo-700 mt-6 mb-2">🎈 白話文解釋：</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li><strong>對於任意給定的誤差容忍度 <InlineMath math="\epsilon > 0" /></strong>：無論你要求函數值 <InlineMath math="f(x)" /> 與極限 <InlineMath math="L" /> 的差距有多小，</li>
          <li><strong>必定能找到一個對應的範圍限制 <InlineMath math="\delta > 0" /></strong>：</li>
          <li>使得只要自變數 <InlineMath math="x" /> 與 <InlineMath math="a" /> 的距離小於 <InlineMath math="\delta" /> 且不等於 <InlineMath math="a" />（即 <InlineMath math="0 < |x - a| < \delta" />），</li>
          <li>函數值 <InlineMath math="f(x)" /> 就一定會落在你要求的誤差範圍內（即 <InlineMath math="|f(x) - L| < \epsilon" />）。</li>
        </ul>
      </div>
      {/* 1.5 如何寫證明 */}
      <div className="math-box mt-8 p-6 bg-teal-50 rounded-lg shadow-sm border border-teal-200">
        <h3 className="text-xl font-bold mb-4 text-teal-800">1.5 如何寫證明 (How to Write an Epsilon-Delta Proof)</h3>
        <p className="mb-4 text-gray-800">
          遇到證明題時，我們通常不會一開始就直接寫出正式證明，而是分成「兩步驟」來進行：先在草稿紙上反推，再寫上考卷。
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Step 1: 草稿 */}
          <div className="flex-1 bg-white p-5 rounded border-t-4 border-teal-400 shadow-sm">
            <h4 className="font-bold text-teal-700 mb-2 flex items-center gap-2">
              <span>📝</span> Step 1: 尋找 <InlineMath math="\delta" /> (草稿區)
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              這是在考卷旁邊偷偷算的過程。我們要從<strong>結果</strong>倒推回<strong>條件</strong>。
            </p>
            <ul className="list-decimal list-inside text-sm text-gray-600 space-y-2">
              <li>從不等式 <InlineMath math="|f(x) - L| < \epsilon" /> 開始。</li>
              <li>使用代數技巧（如因式分解、約分、放縮法），將其轉化為 <InlineMath math="|x - a| < \text{某個關於 } \epsilon \text{ 的式子}" /> 的形式。</li>
              <li>令 <InlineMath math="\delta =" /> 那個算出來的式子。</li>
            </ul>
          </div>

          {/* Step 2: 正式證明 */}
          <div className="flex-1 bg-white p-5 rounded border-t-4 border-teal-600 shadow-sm">
            <h4 className="font-bold text-teal-800 mb-2 flex items-center gap-2">
              <span>🖋️</span> Step 2: 正式證明 (Formal Proof)
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              這才是寫在考卷上的標準格式。必須由<strong>條件</strong>順推至<strong>結果</strong>。
            </p>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm text-gray-800 font-serif">
              <p><strong>給定 (Given)</strong> 任意 <InlineMath math="\epsilon > 0" />，</p>
              <p className="mt-1"><strong>我們取 (Choose)</strong> <InlineMath math="\delta = (\text{你算出的式子}) > 0" />。</p>
              <p className="mt-2"><strong>當 (Whenever)</strong> <InlineMath math="0 < |x - a| < \delta" /> 時：</p>
              <div className="ml-4 mt-1">
                <p><InlineMath math="|f(x) - L| = \dots" /> (把你剛剛推導的過程順著寫下來)</p>
                <p><InlineMath math="\dots < \epsilon" /></p>
              </div>
              <p className="mt-2 font-bold text-teal-800">由極限嚴格定義得證，<InlineMath math="\lim_{x \to a}f(x) = L" />。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 💡 實戰範例 */}
      <div className="example-box bg-white border border-gray-200 mt-8 p-6 rounded-lg shadow-sm">
        <h4 className="font-bold text-lg text-gray-800 mb-3">💡 實戰範例：</h4>
        <p className="mb-2 text-gray-700">證明 <InlineMath math="\lim_{x \to 3} (2x - 1) = 5" />。</p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><strong>列出誤差條件：</strong> 我們希望 <InlineMath math="|f(x) - L| < \epsilon" />，也就是 <InlineMath math="|(2x - 1) - 5| < \epsilon" />。</li>
          <li><strong>化簡不等式：</strong> 化簡括號內部得到 <InlineMath math="|2x - 6| < \epsilon" />。提出公因數 2，得到 <InlineMath math="2|x - 3| < \epsilon" />，即 <InlineMath math="|x - 3| < \frac{\epsilon}{2}" />。</li>
          <li><strong>決定 <InlineMath math="\delta" /> 的值：</strong> 配合極限定義中的條件 <InlineMath math="0 < |x - a| < \delta" /> (即 <InlineMath math="0 < |x - 3| < \delta" />)，我們取 <InlineMath math="\delta = \frac{\epsilon}{2}" />。</li>
          <li><strong>寫出正式證明：</strong> 給定 <InlineMath math="\epsilon > 0" />，取 <InlineMath math="\delta = \frac{\epsilon}{2} > 0" />。當 <InlineMath math="0 < |x - 3| < \delta" /> 時：
            <div className="mt-2 text-gray-800">
              <BlockMath math="|f(x) - L| = |2x - 6| = 2|x - 3| < 2\delta = 2\left(\frac{\epsilon}{2}\right) = \epsilon" />
            </div>
            故由極限之嚴格定義得知，證明完畢。
          </li>
        </ol>
      </div>
      {/* 1.6 先備知識與基本工具 */}
      <div className="math-box mt-10 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold mb-5 text-slate-800">1.6 嚴格定義的先備知識與基本工具</h3>
        <p className="mb-4 text-gray-700">
          在處理更進階的 <InlineMath math="\epsilon-\delta" /> 證明時，我們需要熟悉一些常見的數學符號、集合表示法以及不等式工具。
        </p>

        <div className="space-y-6">
          {/* 1. 符號與鄰域 */}
          <div className="bg-white p-5 rounded border border-slate-200 shadow-sm">
            <h4 className="font-bold text-lg text-slate-700 mb-3 border-b pb-2">1.6.1 常見的數學及邏輯符號</h4>

            <ul className="list-disc list-inside space-y-4 text-sm text-gray-800">
              <li>
                <InlineMath math="\epsilon, \delta" /> 表任意微小正實數。<InlineMath math="M, K" /> 表任意很大正實數。
              </li>

              <li>
                <strong>對稱鄰近區域 (Symmetric Neighborhood)</strong>：<br />
                表示中心為 <InlineMath math="L" />，半徑為 <InlineMath math="\epsilon" /> 的開區間。
                <div className="overflow-x-auto mt-2">
                  <BlockMath math="N_\epsilon(L) = (L - \epsilon, L + \epsilon) = \{ f(x) \mid L - \epsilon < f(x) < L + \epsilon \} = \{ f(x) \mid |f(x) - L| < \epsilon \}" />
                </div>
              </li>

              <li>
                <strong>去心對稱鄰近區域 (Deleted Symmetric Neighborhood)</strong>：<br />
                表示圍繞 <InlineMath math="a" /> 的區域但不包含 <InlineMath math="a" /> 點本身 (<InlineMath math="x \neq a" />)。
                <div className="overflow-x-auto mt-2">
                  <BlockMath math="N^*_\delta(a) = N'_\delta(a) = (a - \delta, a) \cup (a, a + \delta) = \{ x \mid a - \delta < x < a \text{ 或 } a < x < a + \delta \}" />
                  <BlockMath math="= \{ x \mid 0 < |x - a| < \delta \}" />
                </div>
              </li>

              <li className="pt-2 border-t border-slate-100">
                <strong>邏輯符號：</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><InlineMath math="\forall" /> : for all (所有的、對於任意)</li>
                  <li><InlineMath math="\ni" /> 或是 <span className="font-mono">s.t.</span> : such that (使得)</li>
                  <li><InlineMath math="\exists" /> : exist (存在)</li>
                </ul>
                <div className="mt-3 p-3 bg-blue-50 text-blue-900 rounded border border-blue-100 text-xs">
                  <strong>💡 重點觀念：</strong> <InlineMath math="\exists" /> 為「至少有一個」的意思。即若存在一個 <InlineMath math="\delta^* > 0" /> 滿足極限定義時，則任意小於 <InlineMath math="\delta^*" /> 的正數 <InlineMath math="\delta" /> 亦滿足極限定義。<br />
                  <span className="italic text-gray-600 mt-1 block">"In general, if a certain <InlineMath math="\delta^*" /> 'works' for a given <InlineMath math="\epsilon" />, then any <InlineMath math="\delta" /> less than <InlineMath math="\delta^*" /> will also work."</span>
                </div>
              </li>
            </ul>
          </div>

          {/* 2. 基本工具 */}
          <div className="bg-white p-5 rounded border border-slate-200 shadow-sm">
            <h4 className="font-bold text-lg text-slate-700 mb-3 border-b pb-2">1.6.2 放縮法與不等式基本工具</h4>
            <ul className="list-decimal list-inside space-y-4 text-sm text-gray-800">
              <li>
                <strong>以一多項式來表示另一多項式</strong>：在證明代數極限時，常利用因式分解或長除法作變形。
              </li>
              <li>
                <strong>收斂範圍的次方放縮</strong>：
                <BlockMath math="0 < \delta \le 1 \implies \delta^n \le \delta \quad (n \in \mathbb{N})" />
              </li>
              <li>
                <strong>交集取極小值 (Min)</strong>：為了同時滿足多個條件，我們常取範圍最小者：
                <BlockMath math="N'_{\delta_1}(a) \cap N'_{\delta_2}(a) = N'_\delta(a) \quad \text{其中 } \delta = \min\{\delta_1, \delta_2\}" />
              </li>
              <li>
                <strong>聯集取極大值 (Max)</strong>：對於發散至無窮大的條件，取最遠者：
                <BlockMath math="[k_1, \infty) \cap [k_2, \infty) = [k, \infty) \quad \text{其中 } k = \max\{k_1, k_2\}" />
              </li>
              <li className="pt-2 border-t border-slate-100">
                <strong>三角不等式 (Triangular Inequality)</strong>：將複雜的誤差拆分成多個項目的核心工具。
                <BlockMath math="\big| |x| - |y| \big| \le |x \pm y| \le |x| + |y|" />
                <BlockMath math="|x \pm y \pm z| \le |x| + |y| + |z|" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}