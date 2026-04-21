// src/Integrals/Antiderivatives.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function Antiderivatives() {
  return (
    <section className="subsection mt-12 pt-8 border-t border-gray-100">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-indigo-500 pb-2">2. 反導數與不定積分</h2>
      
      <p className="mb-4 text-gray-700">
        在理解了面積的累積（定積分）後，我們發現一個有趣的逆向問題：<strong>如果已知一個函數的導函數，我們該如何還原出原函數？</strong> 這個過程就是反微分。
      </p>

      {/* 2.1 反導數的定義 */}
      <div className="math-box mb-6 p-6 bg-indigo-50 rounded-lg shadow-sm border border-indigo-100">
        <h3 className="text-xl font-bold mb-3 text-indigo-800">2.1 反導數的定義 (Definition of Antiderivative)</h3>
        <div className="my-4 p-4 bg-white rounded border border-indigo-200">
          <p className="mb-2 text-gray-700">
            如果一個函數 <InlineMath math="F(x)" /> 在區間 <InlineMath math="I" /> 內滿足：
          </p>
          <BlockMath math="F'(x) = f(x)" />
          <p className="mt-2 text-gray-700">
            則我們稱 <InlineMath math="F(x)" /> 為 <InlineMath math="f(x)" /> 在該區間內的一個<strong>反導數 (Antiderivative)</strong>。
          </p>
        </div>
        <p className="text-sm text-gray-600 italic">
          例如：因為 <InlineMath math="\frac{d}{dx}(x^2) = 2x" />，所以 <InlineMath math="x^2" /> 是 <InlineMath math="2x" /> 的一個反導數。
        </p>
      </div>

      {/* 2.2 積分常數 */}
      <div className="math-box mb-6 p-6 bg-amber-50 rounded-lg shadow-sm border border-amber-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-amber-800">2.2 積分常數 (The Constant of Integration)</h3>
        <p className="mb-4 text-gray-700">
          注意到 <InlineMath math="\frac{d}{dx}(x^2 + 5) = 2x" /> 且 <InlineMath math="\frac{d}{dx}(x^2 - 100) = 2x" />。
          這意味著一個函數的反導數並不唯一，它們之間只差一個常數。
        </p>
        <div className="theorem-box bg-amber-100/50 border-amber-200 text-amber-900">
          <strong>定理：</strong> 若 <InlineMath math="F" /> 是 <InlineMath math="f" /> 在區間 <InlineMath math="(a, b)" /> 上的反導數，則 <InlineMath math="f" /> 的反導數的<strong>一般式 (General Form)</strong> 為：
          <BlockMath math="F(x) + C" />
          其中 <InlineMath math="C" /> 為任意常數 (Constant)。
        </div>

        {/* 這裡加入手寫筆記中的推導 */}
        <div className="mt-6 p-4 bg-white/60 rounded-md border border-amber-200">
          <h4 className="font-bold text-amber-900 mb-2">💡 備註：為什麼只差一個常數？</h4>
          <p className="text-sm text-gray-700 mb-2">
            若 <InlineMath math="F" /> 與 <InlineMath math="G" /> 皆為 <InlineMath math="f" /> 的反導數：
          </p>
          <div className="text-base space-y-2">
            <p>1. 根據定義：<InlineMath math="F'(x) = f(x) = G'(x)" /></p>
            <p>2. 相減可得：<InlineMath math="F'(x) - G'(x) = 0" /></p>
            <p>3. 根據均值定理推論：<InlineMath math="F(x) - G(x) = C \quad (\text{for some constant } C)" /></p>
          </div>
          <p className="mt-3 text-sm text-gray-500 italic">
            這解釋了為何我們在寫不定積分時，結尾一定要加上 <InlineMath math="+ C" />。
          </p>
        </div>
      </div>

      {/* 2.3 不定積分 */}
      <div className="math-box mb-6 p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-blue-800">2.3 不定積分 (The Indefinite Integral)</h3>
        <p className="mb-4 text-gray-700">
          我們使用積分符號 <InlineMath math="\int" /> 來表示求所有反導數的過程，這被稱為<strong>不定積分</strong>：
        </p>
        <div className="my-4 p-4 bg-white rounded border border-blue-200">
          <BlockMath math="\int f(x) \, dx = F(x) + C" />
        </div>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li><InlineMath math="\int" />：積分符號 (Integral symbol)</li>
          <li><InlineMath math="f(x)" />：被積函數 (Integrand)</li>
          <li><InlineMath math="dx" />：積分變數 (Variable of integration)</li>
          <li><InlineMath math="C" />：積分常數</li>
        </ul>
      </div>

      {/* 2.4 基本積分公式 */}
      <div className="example-box mt-8 border-t-4 border-indigo-500 shadow-md">
        <h3 className="example-title text-2xl font-bold text-indigo-900 mb-6 flex items-center">
          <span className="mr-2">📊</span> 2.4 基本積分公式表
        </h3>
        <div className="overflow-x-auto">
          <table className="integral-table">
            <thead>
              <tr>
                <th className="text-left">公式名稱</th>
                <th className="text-center">微分關係 (回想)</th>
                <th className="text-center bg-indigo-700">不定積分公式</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* 冪函數 */}
              <tr className="hover:bg-indigo-50 transition-colors">
                <td className="font-medium text-indigo-900">冪函數 (n ≠ -1)</td>
                <td className="text-center text-gray-500 text-sm"><InlineMath math="\frac{d}{dx}(x^{n+1}) = (n+1)x^n" /></td>
                <td className="text-center font-bold text-blue-700 bg-indigo-50/30"><InlineMath math="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C" /></td>
              </tr>
              {/* 指數函數 */}
              <tr className="hover:bg-indigo-50 transition-colors">
                <td className="font-medium text-indigo-900">自然指數函數</td>
                <td className="text-center text-gray-500 text-sm"><InlineMath math="\frac{d}{dx}(e^x) = e^x" /></td>
                <td className="text-center font-bold text-blue-700 bg-indigo-50/30"><InlineMath math="\int e^x \, dx = e^x + C" /></td>
              </tr>
              <tr className="hover:bg-indigo-50 transition-colors">
                <td className="font-medium text-indigo-900">一般指數函數</td>
                <td className="text-center text-gray-500 text-sm"><InlineMath math="\frac{d}{dx}(a^x) = a^x \ln a" /></td>
                <td className="text-center font-bold text-blue-700 bg-indigo-50/30"><InlineMath math="\int a^x \, dx = \frac{a^x}{\ln a} + C" /></td>
              </tr>
              {/* 對數函數相關 */}
              <tr className="hover:bg-indigo-50 transition-colors">
                <td className="font-medium text-indigo-900">倒數函數 (n = -1)</td>
                <td className="text-center text-gray-500 text-sm"><InlineMath math="\frac{d}{dx}(\ln|x|) = \frac{1}{x}" /></td>
                <td className="text-center font-bold text-blue-700 bg-indigo-50/30"><InlineMath math="\int \frac{1}{x} \, dx = \ln|x| + C" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-indigo-50 rounded text-sm text-indigo-800 border-l-4 border-indigo-300">
          <strong>💡 技巧提示：</strong> 觀察表格可以發現，積分公式基本上就是微分公式的「逆向讀法」。
          如果您忘記了某個積分公式，可以試著回想哪個函數的導數是目前的被積函數。
        </div>
      </div>

    </section>
  );
}
