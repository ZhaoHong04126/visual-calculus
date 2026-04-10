// src/Derivatives/HigherOrderDerivatives.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function HigherOrderDerivatives() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">4. 高階導數與隱函數微分</h2>
      
      {/* 4.1 高階導數 */}
      <div className="math-box mb-8 p-6 bg-orange-50 rounded-lg shadow-sm border border-orange-200">
        <h3 className="text-xl font-bold mb-3 text-orange-800">4.1 高階導數 (Higher-Order Derivatives)</h3>
        <p className="mb-4 text-gray-700">
          既然導數 <InlineMath math="f'(x)" /> 本身也是一個函數，我們當然可以對它再微分一次，得到「第二階導數」，依此類推。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-white rounded border border-orange-100 text-center flex flex-col items-center justify-center">
            <div className="font-bold text-gray-800 mb-2">一階導數 (速度)</div>
            <div>
              <InlineMath math="f'(x)" /> 或 <InlineMath math="\dfrac{dy}{dx}" />
            </div>
          </div>
          <div className="p-4 bg-white rounded border border-orange-100 text-center flex flex-col items-center justify-center">
            <div className="font-bold text-gray-800 mb-2">二階導數 (加速度)</div>
            <div>
              <InlineMath math="f''(x)" /> 或 <InlineMath math="\dfrac{d^2y}{dx^2}" />
            </div>
          </div>
          <div className="p-4 bg-white rounded border border-orange-100 text-center flex flex-col items-center justify-center">
            <div className="font-bold text-gray-800 mb-2">三階導數 (急動度)</div>
            <div>
              <InlineMath math="f'''(x)" /> 或 <InlineMath math="\dfrac{d^3y}{dx^3}" />
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          四階以上的導數通常記為 <InlineMath math="f^{(4)}(x), f^{(n)}(x)" />。
        </p>
      </div>

      {/* 4.2 隱函數微分 */}
      <div className="math-box mb-6 p-6 bg-teal-50 rounded-lg shadow-sm border border-teal-200">
        <h3 className="text-xl font-bold mb-3 text-teal-800">4.2 隱函數微分 (Implicit Differentiation)</h3>
        <p className="mb-4 text-gray-700">
          並非所有的方程式都能輕易地寫成 <InlineMath math="y = f(x)" /> 的「顯函數」形式（例如圓方程式 <InlineMath math="x^2 + y^2 = r^2" />）。當 <InlineMath math="y" /> 與 <InlineMath math="x" /> 糾纏在一起時，我們可以對等式兩邊同時對 <InlineMath math="x" /> 進行微分，此時必須<strong>將 <InlineMath math="y" /> 視為 <InlineMath math="x" /> 的函數，並使用鏈鎖律</strong>。
        </p>
        
        <div className="bg-white p-4 rounded border border-teal-100">
          <strong className="text-gray-800 block mb-2">範例：求單位圓 $x^2 + y^2 = 1$ 上的切線斜率 $dy/dx$</strong>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
            <li>對等式兩邊同時對 <InlineMath math="x" /> 微分：
              <BlockMath math="\frac{d}{dx}(x^2 + y^2) = \frac{d}{dx}(1)" />
            </li>
            <li>由於 <InlineMath math="y" /> 是 <InlineMath math="x" /> 的函數，對 <InlineMath math="y^2" /> 微分時需使用鏈鎖律產生 <InlineMath math="\frac{dy}{dx}" />：
              <BlockMath math="2x + 2y \frac{dy}{dx} = 0" />
            </li>
            <li>移項整理，解出 <InlineMath math="\frac{dy}{dx}" />：
              <BlockMath math="\frac{dy}{dx} = -\frac{x}{y}" />
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}