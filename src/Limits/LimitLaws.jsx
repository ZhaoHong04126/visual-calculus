import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './Limits.css';

// 定義 ProofBox 元件
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

export default function LimitLaws() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-emerald-500 pb-2">2. 極限的運算法則與夾擠定理</h2>
      
      <p className="mb-4 text-gray-700">
        在實際計算極限時，我們不可能每次都依賴數值列表猜測，或是使用繁瑣的嚴格定義。透過以下幾組基本運算法則與定理，我們可以系統性地拆解並計算複雜的極限。
      </p>

      {/* 2.1 基本運算法則 */}
      <div className="math-box mb-6">
        <h3 className="text-xl font-bold mb-3 text-blue-800">2.1 基本運算法則 (Limit Laws)</h3>
        <p className="mb-2 text-sm text-gray-700">
          假設 <InlineMath settings={{ strict: false }} math="c" /> 為常數，且 <InlineMath settings={{ strict: false }} math="\lim_{x \to a} f(x) = L" /> 與 <InlineMath settings={{ strict: false }} math="\lim_{x \to a} g(x) = M" /> 均存在，則下列運算皆成立：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-gray-50 p-4 rounded text-sm">
          <div><strong>2.1.1 和/差法則：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} [f(x) \pm g(x)] = L \pm M" /></div>
          <div><strong>2.1.2 常數積法則：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} [c \cdot f(x)] = c \cdot L" /></div>
          <div><strong>2.1.3 乘積法則：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M" /></div>
          <div><strong>2.1.4 商法則：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M} \quad (\text{前提：} M \neq 0)" /></div>
          <div><strong>2.1.5 次方法則：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} [f(x)]^n = L^n" /></div>
          <div><strong>2.1.6 開根號法則：</strong><BlockMath settings={{ strict: false }} math="\lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L}" /></div>
        </div>

        {/* 運算法則的嚴格證明 */}
        <div className="mt-4">
          <ProofBox title="極限六大運算法則 (ε-δ 嚴格證明)">
            <div className="space-y-8 text-sm text-gray-800">
              <p className="mb-2">前提：對任意給定之 <InlineMath math="\epsilon > 0" />，皆存在對應的 <InlineMath math="\delta" />。</p>

              {/* 1. 和/差法則 */}
              <div>
                <h4 className="font-bold text-blue-800 border-b border-blue-100 mb-2">2.1.1 和/差法則：<InlineMath math="\lim_{x \to a} [f(x) \pm g(x)] = L \pm M" /></h4>
                <ol className="list-decimal list-inside space-y-1">
                  <li>存在 <InlineMath math="\delta_1 > 0" />，當 <InlineMath math="0 < |x - a| < \delta_1" /> 時，<InlineMath math="|f(x) - L| < \frac{\epsilon}{2}" />。</li>
                  <li>存在 <InlineMath math="\delta_2 > 0" />，當 <InlineMath math="0 < |x - a| < \delta_2" /> 時，<InlineMath math="|g(x) - M| < \frac{\epsilon}{2}" />。</li>
                  <li>取 <InlineMath math="\delta = \min(\delta_1, \delta_2)" />，利用<strong>三角不等式</strong>：</li>
                </ol>
                <div className="bg-white p-3 rounded border border-gray-100 my-2 shadow-sm">
                  <BlockMath math="|(f(x) \pm g(x)) - (L \pm M)| \le |f(x) - L| + |g(x) - M| < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon" />
                </div>
              </div>

              {/* 2. 常數積法則 */}
              <div>
                <h4 className="font-bold text-blue-800 border-b border-blue-100 mb-2">2.1.2 常數積法則：<InlineMath math="\lim_{x \to a} [c \cdot f(x)] = cL" /></h4>
                <p>若 <InlineMath math="c = 0" /> 則顯然成立。若 <InlineMath math="c \neq 0" />：</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>存在 <InlineMath math="\delta > 0" />，當 <InlineMath math="0 < |x - a| < \delta" /> 時，<InlineMath math="|f(x) - L| < \frac{\epsilon}{|c|}" />。</li>
                  <li>因此 <InlineMath math="|cf(x) - cL| = |c| \cdot |f(x) - L| < |c| \cdot \frac{\epsilon}{|c|} = \epsilon" />。</li>
                </ul>
              </div>

              {/* 3. 積法則 */}
              <div>
                <h4 className="font-bold text-blue-800 border-b border-blue-100 mb-2">2.1.3 乘積法則：<InlineMath math="\lim_{x \to a} [f(x)g(x)] = LM" /></h4>
                <p>技巧：加減一項 <InlineMath math="f(x)M" /> 並利用三角不等式：</p>
                <div className="bg-white p-3 rounded border border-gray-100 my-2 shadow-sm">
                  <BlockMath math="|f(x)g(x) - LM| = |f(x)g(x) - f(x)M + f(x)M - LM| \le |f(x)||g(x) - M| + |M||f(x) - L|" />
                </div>
                <p>因 <InlineMath math="f(x)" /> 在 <InlineMath math="a" /> 附近收斂故為有界，設其上界為 <InlineMath math="K" />（即 <InlineMath math="|f(x)| < K" />）。接著分別控制 <InlineMath math="|g(x) - M| < \frac{\epsilon}{2K}" /> 與 <InlineMath math="|f(x) - L| < \frac{\epsilon}{2|M|}" />（若 <InlineMath math="M=0" /> 則更簡單），即可使總和 <InlineMath math="< \epsilon" />。</p>
              </div>

              {/* 4. 商法則 */}
              <div>
                <h4 className="font-bold text-blue-800 border-b border-blue-100 mb-2">2.1.4 商法則：<InlineMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}" /></h4>
                <p>我們先證明 <InlineMath math="\lim \frac{1}{g(x)} = \frac{1}{M}" />，再配合乘積法則即可。</p>
                <div className="bg-white p-3 rounded border border-gray-100 my-2 shadow-sm">
                  <BlockMath math="\left| \frac{1}{g(x)} - \frac{1}{M} \right| = \frac{|M - g(x)|}{|g(x)||M|}" />
                </div>
                <p>因為 <InlineMath math="M \neq 0" />，在 <InlineMath math="a" /> 附近我們可以保證 <InlineMath math="|g(x)| > \frac{|M|}{2}" />。因此分母 <InlineMath math="|g(x)||M| > \frac{M^2}{2}" />。只要讓 <InlineMath math="|g(x) - M| < \epsilon \frac{M^2}{2}" />，就能完成證明。</p>
              </div>

              {/* 5. 次方法則 */}
              <div>
                <h4 className="font-bold text-blue-800 border-b border-blue-100 mb-2">2.1.5 次方法則：<InlineMath math="\lim_{x \to a} [f(x)]^n = L^n" /></h4>
                <p>這個定理可直接利用<strong>乘積法則</strong>與<strong>數學歸納法</strong>來證明：</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>當 <InlineMath math="n=2" /> 時，<InlineMath math="\lim f(x)^2 = \lim (f(x) \cdot f(x)) = L \cdot L = L^2" />。</li>
                  <li>假設對於 <InlineMath math="k" /> 成立（<InlineMath math="\lim f(x)^k = L^k" />），則對於 <InlineMath math="k+1" />：<br/>
                    <InlineMath math="\lim f(x)^{k+1} = \lim [f(x)^k \cdot f(x)] = L^k \cdot L = L^{k+1}" />。得證。</li>
                </ul>
              </div>

              {/* 6. 開根號法則 */}
              <div>
                <h4 className="font-bold text-blue-800 border-b border-blue-100 mb-2">2.1.6 開根號法則：<InlineMath math="\lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L}" /></h4>
                <p>以平方根（<InlineMath math="n=2" />）且 <InlineMath math="L > 0" /> 為例。利用共軛式：</p>
                <div className="bg-white p-3 rounded border border-gray-100 my-2 shadow-sm">
                  <BlockMath math="|\sqrt{f(x)} - \sqrt{L}| = \left| \frac{f(x) - L}{\sqrt{f(x)} + \sqrt{L}} \right| \le \frac{|f(x) - L|}{\sqrt{L}}" />
                </div>
                <p>只要取 <InlineMath math="\delta" /> 使 <InlineMath math="|f(x) - L| < \epsilon \sqrt{L}" />，則上式即小於 <InlineMath math="\epsilon" />。高次根號亦可利用代數乘法公式 <InlineMath math="(A^n - B^n)" /> 的因式分解做類似放縮處理。<span className="float-right text-lg">■</span></p>
              </div>
              
            </div>
          </ProofBox>
        </div>
      </div>

      <div className="concept-grid mt-6">
        {/* 2.2 直接代入性質 */}
        <div className="concept-card diff-card">
          <h3 className="text-lg font-bold mb-2">2.2 直接代入性質</h3>
          <p className="text-sm">
            對於絕大多數的常見函數（如多項式、有理函數等），只要 <InlineMath settings={{ strict: false }} math="a" /> 在函數的定義域內，求極限的最快方式就是<strong>直接將 <InlineMath settings={{ strict: false }} math="x = a" /> 代入</strong>：
          </p>
          <BlockMath settings={{ strict: false }} math="\lim_{x \to a} f(x) = f(a)" />
        </div>

        {/* 2.3 處理 0/0 不定型 */}
        <div className="concept-card" style={{ borderLeft: '4px solid #ef4444', backgroundColor: '#fef2f2' }}>
          <h3 className="text-lg font-bold mb-2">
            2.3 處理 <InlineMath math="\frac{0}{0}" /> 不定型
          </h3>
          <p className="text-sm mb-2">
            當直接代入會得到 <InlineMath settings={{ strict: false }} math="\frac{0}{0}" /> 時，極限可能依然存在。我們必須透過代數變形來消除造成分母為 0 的因子：
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
            <li><strong>因式分解：</strong> 利用約分消除造成分母為 0 的項。</li>
            <li><strong>有理化：</strong> 消除根號後的代數變形。</li>
            <li><strong>羅必達法則 (L'Hôpital's Rule)：</strong> 處理不定型的進階強大工具，將在第三章「微分學」中做詳細介紹。</li>
          </ul>
        </div>
      </div>

      {/* 2.4 夾擠定理 */}
      <div className="math-box mt-8 border-l-4 border-purple-500 bg-purple-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-3 text-purple-800">2.4 夾擠定理 (The Squeeze Theorem)</h3>
        <p className="mb-2 text-gray-700">
          當我們遇到無法直接化簡、且包含震盪行為的函數時，可以利用這項幾何定理來求極限。
        </p>
        <div className="bg-white p-4 rounded border border-purple-100 mb-4">
          <p className="mb-2 text-sm text-gray-800">
            <strong>定理內容：</strong> 若在 <InlineMath math="a" /> 點附近滿足大小關係：
          </p>
          <BlockMath settings={{ strict: false }} math="g(x) \le f(x) \le h(x)" />
          <p className="mb-2 text-sm text-gray-800">
            且外側兩函數的極限收斂到同一個值 <InlineMath math="L" />：
          </p>
          <BlockMath settings={{ strict: false }} math="\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L" />
          <p className="mb-2 text-sm text-gray-800">
            則被夾在中間的函數極限也必然為：<InlineMath math="\lim_{x \to a} f(x) = L" />。
          </p>
        </div>

        {/* 使用自定義 ProofBox 加入嚴格證明 */}
        <ProofBox title="夾擠定理 (ε-δ 嚴格證明)">
          <div className="space-y-4 text-sm">
            <p>
              <strong>證明目標：</strong> 對於任意給定的 <InlineMath math="\epsilon > 0" />，都要能找到一個 <InlineMath math="\delta > 0" />，使得當 <InlineMath math="0 < |x - a| < \delta" /> 時，<InlineMath math="|f(x) - L| < \epsilon" /> 成立。
            </p>
            
            <p>1. 因為 <InlineMath math="\lim_{x \to a} g(x) = L" />，存在 <InlineMath math="\delta_1 > 0" />，使得當 <InlineMath math="0 < |x - a| < \delta_1" /> 時：</p>
            <div className="bg-white p-3 rounded border border-gray-100 shadow-sm">
              <BlockMath math="|g(x) - L| < \epsilon \implies L - \epsilon < g(x) < L + \epsilon" />
            </div>
            
            <p>2. 因為 <InlineMath math="\lim_{x \to a} h(x) = L" />，存在 <InlineMath math="\delta_2 > 0" />，使得當 <InlineMath math="0 < |x - a| < \delta_2" /> 時：</p>
            <div className="bg-white p-3 rounded border border-gray-100 shadow-sm">
              <BlockMath math="|h(x) - L| < \epsilon \implies L - \epsilon < h(x) < L + \epsilon" />
            </div>
            
            <p>3. 根據前提條件，存在 <InlineMath math="\delta_3 > 0" /> 使得在此範圍內：</p>
            <div className="bg-white p-3 rounded border border-gray-100 shadow-sm">
              <BlockMath math="g(x) \le f(x) \le h(x)" />
            </div>
            
            <p>取 <InlineMath math="\delta = \min(\delta_1, \delta_2, \delta_3)" />，則當 <InlineMath math="0 < |x - a| < \delta" /> 時，上述條件同時成立：</p>
            <div className="bg-purple-100 p-3 rounded-md text-center font-semibold shadow-inner">
              <InlineMath math="L - \epsilon < g(x) \le f(x) \le h(x) < L + \epsilon" />
            </div>
            
            <p>由此推得 <InlineMath math="L - \epsilon < f(x) < L + \epsilon" />，即 <InlineMath math="|f(x) - L| < \epsilon" />，證畢。<span className="float-right text-lg">■</span></p>
          </div>
        </ProofBox>
      </div>
    </section>
  );
}