import React from 'react';
import { InlineMath } from '../components/Math';

export default function OperationsRules() {
  return (
    <section className="subsection mt-8">
        <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-purple-500 pb-2">9.1 常用運算法則</h2>

        <div className="math-box p-6 bg-purple-50 rounded-lg shadow-sm border border-purple-200 mb-8">
          <h3 className="text-xl font-bold mb-3 text-purple-800">一、指數運算法則 (Laws of Exponents)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-purple-200">
              <thead className="bg-purple-100 text-purple-900">
                <tr>
                  <th className="py-2 px-4 border border-purple-200 font-bold w-1/4">法則名稱</th>
                  <th className="py-2 px-4 border border-purple-200 font-bold">法則內容</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">同底相乘</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="a^m \cdot a^n = a^{m+n}" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">同底相除</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\frac{a^m}{a^n} = a^{m-n}" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">冪的次方</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="(a^m)^n = a^{mn}" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">乘積的次方</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="(ab)^m = a^m b^m" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">零與負次方</td>
                  <td className="py-3 px-4 border border-purple-200">
                    <span style={{ marginRight: '1.5rem', display: 'inline-block' }}><InlineMath math="a^0 = 1 \ (a \neq 0)" /></span>
                    <span style={{ display: 'inline-block' }}><InlineMath math="a^{-n} = \frac{1}{a^n}" /></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-3 text-purple-800">二、對數運算法則 (Laws of Logarithms)</h3>
          <p className="text-sm text-gray-600 mb-2">前提限制：<InlineMath math="a > 0, a \neq 1, x > 0, y > 0" /></p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-purple-200">
              <thead className="bg-purple-100 text-purple-900">
                <tr>
                  <th className="py-2 px-4 border border-purple-200 font-bold w-1/4">法則名稱</th>
                  <th className="py-2 px-4 border border-purple-200 font-bold">法則內容</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">乘積律</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\log_a(xy) = \log_a x + \log_a y" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">商數律</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\log_a\left(\frac{x}{y}\right) = \log_a x - \log_a y" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">次方律</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\log_a(x^n) = n \log_a x" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">換底公式</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\log_a x = \frac{\log_b x}{\log_b a}" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">對消性質</td>
                  <td className="py-3 px-4 border border-purple-200">
                    <span style={{ marginRight: '1.5rem', display: 'inline-block' }}><InlineMath math="a^{\log_a x} = x" /></span>
                    <span style={{ display: 'inline-block' }}><InlineMath math="\log_a(a^x) = x" /></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-3 text-purple-800">三、極限運算法則 (Limit Laws)</h3>
          <p className="text-sm text-gray-600 mb-2">假設 <InlineMath math="\lim_{x \to c} f(x) = L" /> 且 <InlineMath math="\lim_{x \to c} g(x) = M" /> 均存在：</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-purple-200">
              <thead className="bg-purple-100 text-purple-900">
                <tr>
                  <th className="py-2 px-4 border border-purple-200 font-bold w-1/4">法則名稱</th>
                  <th className="py-2 px-4 border border-purple-200 font-bold">法則內容</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">加減法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\lim_{x \to c} [f(x) \pm g(x)] = L \pm M" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">常數倍法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\lim_{x \to c} [k \cdot f(x)] = k \cdot L" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">乘積法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\lim_{x \to c} [f(x)g(x)] = L \cdot M" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">商數法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{L}{M} \quad (M \neq 0)" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">冪次法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\lim_{x \to c} [f(x)]^n = L^n" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-3 text-purple-800">四、微分運算法則 (Derivative Rules)</h3>
          <p className="text-sm text-gray-600 mb-2">假設 <InlineMath math="f(x)" /> 且 <InlineMath math="g(x)" /> 皆可微，且 <InlineMath math="c" /> 為常數：</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-purple-200">
              <thead className="bg-purple-100 text-purple-900">
                <tr>
                  <th className="py-2 px-4 border border-purple-200 font-bold w-1/4">法則名稱</th>
                  <th className="py-2 px-4 border border-purple-200 font-bold">法則內容</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">加減法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\frac{d}{dx} [f(x) \pm g(x)] = f'(x) \pm g'(x)" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">常數倍法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\frac{d}{dx} [c f(x)] = c f'(x)" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">乘積法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\frac{d}{dx} [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">商數法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\frac{d}{dx} \left[ \frac{f(x)}{g(x)} \right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">連鎖律</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\frac{d}{dx} f(g(x)) = f'(g(x))g'(x)" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-3 text-purple-800">五、積分運算法則 (Integral Rules)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-purple-200">
              <thead className="bg-purple-100 text-purple-900">
                <tr>
                  <th className="py-2 px-4 border border-purple-200 font-bold w-1/4">法則名稱</th>
                  <th className="py-2 px-4 border border-purple-200 font-bold">法則內容</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">常數倍法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\int c f(x) \,dx = c \int f(x) \,dx" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">加減法則</td>
                  <td className="py-3 px-4 border border-purple-200"><InlineMath math="\int [f(x) \pm g(x)] \,dx = \int f(x) \,dx \pm \int g(x) \,dx" /></td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">變數變換法</td>
                  <td className="py-3 px-4 border border-purple-200">
                    <InlineMath math="\int f(g(x))g'(x) \,dx = \int f(u) \,du \quad (\text{令 } u = g(x))" />
                    <div className="text-sm text-gray-500 mt-2 space-y-1">
                      <div>🎯 <strong>使用時機：</strong>當積分式中同時出現「某函數」與「該函數的導數（或其倍數）」時。</div>
                      <div>⚠️ <strong>注意：</strong>代換時必須將 <InlineMath math="dx" /> 換成 <InlineMath math="du" />；若為定積分，必須<strong>同時轉換積分上下界</strong>。</div>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-purple-50/50 transition-colors">
                  <td className="py-3 px-4 border border-purple-200 font-semibold">分部積分法</td>
                  <td className="py-3 px-4 border border-purple-200">
                    <InlineMath math="\int F(x)g(x) \,dx = F(x)G(x) - \int G(x)f(x) \,dx" />
                    <div className="text-sm text-gray-500 mt-2 space-y-1">
                      <div>🎯 <strong>使用時機：</strong>當遇到「兩不同類型函數相乘」或「無直接積分公式的單一函數」（如 <InlineMath math="\ln x" />）。</div>
                      <div>💡 <strong><InlineMath math="F(x)" /> 選取優先順序：</strong>對數 / 反三角 &gt; 冪函數 / 多項式 &gt; 指數 / 三角函數</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
  );
}
