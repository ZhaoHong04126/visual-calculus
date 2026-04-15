// src/Derivatives/InverseDerivatives.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function InverseDerivatives() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-indigo-500 pb-2">5. 反函數的微分 (Derivatives of Inverse Functions)</h2>
      
      <p className="mb-4 text-gray-700">
        如果一個函數是<strong>一對一 (One-to-One)</strong> 且可微的，那麼它的反函數也是可微的（在其導數不為零的點上）。反函數的微分公式讓我們可以直接利用原函數的導數來求反函數的導數。
      </p>

      <div className="math-box mb-6 p-6 bg-indigo-50 rounded-lg shadow-sm border border-indigo-200">
        <h3 className="text-xl font-bold mb-3 text-indigo-800">5.1 反函數的導數公式</h3>
        <p className="mb-2 text-gray-800">
          設 <InlineMath math="f" /> 是一個有一階連續導數的嚴格單調函數（即反函數 <InlineMath math="f^{-1}" /> 存在），且 <InlineMath math="f'(x) \neq 0" />。
          若 <InlineMath math="y = f^{-1}(x)" />，則 <InlineMath math="x = f(y)" />，反函數的導數公式為：
        </p>
        <div className="my-4 p-4 bg-white rounded border border-indigo-100">
          <BlockMath math="(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}" />
        </div>
        
        <p className="mt-4 mb-2 text-gray-800">
          <strong>萊布尼茲寫法：</strong>
        </p>
        <div className="my-2 p-4 bg-white rounded border border-indigo-100">
          <BlockMath math="\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}}" />
        </div>
      </div>

      <div className="example-box bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-6">
        <h4 className="font-bold text-lg text-gray-800 mb-3">💡 實戰範例：</h4>
        <p className="mb-2 text-gray-700">已知 <InlineMath math="f(x) = x^3 + x" />，求 <InlineMath math="(f^{-1})'(2)" />。</p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><strong>尋找對應的 y 值：</strong> 我們需要找到一個 <InlineMath math="y" /> 使得 <InlineMath math="f(y) = 2" />。也就是 <InlineMath math="y^3 + y = 2" />。觀察可知，當 <InlineMath math="y = 1" /> 時，<InlineMath math="1^3 + 1 = 2" />，因此 <InlineMath math="f^{-1}(2) = 1" />。</li>
          <li><strong>求原函數的導數：</strong> <InlineMath math="f'(x) = 3x^2 + 1" />。</li>
          <li><strong>代入公式：</strong> 
            <BlockMath math="(f^{-1})'(2) = \frac{1}{f'(f^{-1}(2))} = \frac{1}{f'(1)} = \frac{1}{3(1)^2 + 1} = \frac{1}{4}" />
          </li>
        </ol>
      </div>

      <div className="math-box p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-200">
        <h3 className="text-xl font-bold mb-3 text-blue-800">5.2 反三角函數的微分</h3>
        <p className="mb-4 text-gray-700">
          利用反函數的微分法則與隱函數微分，我們可以推導出各種反三角函數的微分公式，以下為最常用的幾個：
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-800 bg-white p-4 rounded border border-blue-100">
          <li>
            <InlineMath math="\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1 - x^2}}" /> , <InlineMath math="(-1 < x < 1)" />
          </li>
          <li>
            <InlineMath math="\frac{d}{dx}(\arccos x) = -\frac{1}{\sqrt{1 - x^2}}" /> , <InlineMath math="(-1 < x < 1)" />
          </li>
          <li>
            <InlineMath math="\frac{d}{dx}(\arctan x) = \frac{1}{1 + x^2}" />
          </li>
        </ul>
      </div>

    </section>
  );
}
