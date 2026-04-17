// src/DerivativesApps/MeanValueTheorem.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function MeanValueTheorem() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-emerald-500 pb-2">1. 均值定理 (Mean Value Theorem)</h2>
      
      <p className="mb-4 text-gray-700">
        均值定理是微積分中最重要的理論基礎之一，它將函數的「平均變化率」與「瞬時變化率」聯繫了起來。
      </p>

      {/* 羅爾定理 */}
      <div className="math-box mb-6 p-6 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100">
        <h3 className="text-xl font-bold mb-3 text-emerald-800">1.1 羅爾定理 (Rolle's Theorem)</h3>
        <p className="mb-4 text-gray-700">
          均值定理的一個特殊情況。如果函數在兩個端點的值相等，那麼中間一定有一點的切線是水平的。
        </p>
        <div className="my-4 p-4 bg-white rounded border border-emerald-200">
          <strong className="block mb-2 text-gray-800">定理敘述：</strong>
          <p className="text-sm text-gray-600 mb-2">
            若函數 <InlineMath math="f(x)" /> 滿足：
          </p>
          <ul className="list-disc ml-6 text-sm text-gray-600 mb-2">
            <li>在閉區間 <InlineMath math="[a, b]" /> 上連續</li>
            <li>在開區間 <InlineMath math="(a, b)" /> 內可微</li>
            <li><InlineMath math="f(a) = f(b)" /></li>
          </ul>
          <p className="text-sm text-gray-600">
            則在 <InlineMath math="(a, b)" /> 內至少存在一點 <InlineMath math="c" />，使得：
          </p>
          <BlockMath math="f'(c) = 0" />
        </div>
      </div>

      {/* 均值定理 */}
      <div className="math-box mb-6 p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-blue-800">1.2 均值定理 (Mean Value Theorem)</h3>
        <p className="mb-4 text-gray-700">
          這是羅爾定理的推廣。它告訴我們，在一段區間內，必定有一點的「瞬時速度」等於這段區間的「平均速度」。
        </p>
        <div className="my-4 p-4 bg-white rounded border border-blue-200">
          <strong className="block mb-2 text-gray-800">定理敘述：</strong>
          <p className="text-sm text-gray-600 mb-2">
            若函數 <InlineMath math="f(x)" /> 在 <InlineMath math="[a, b]" /> 上連續，在 <InlineMath math="(a, b)" /> 內可微，則至少存在一點 <InlineMath math="c \in (a, b)" /> 使得：
          </p>
          <BlockMath math="f'(c) = \frac{f(b) - f(a)}{b - a}" />
          <p className="mt-3 text-sm text-gray-600">
            幾何意義：在曲線上的 <InlineMath math="a" /> 與 <InlineMath math="b" /> 之間，至少有一點的切線斜率等於割線 <InlineMath math="AB" /> 的斜率。
          </p>
        </div>
      </div>

      {/* 柯西均值定理 */}
      <div className="math-box mb-6 p-6 bg-purple-50 rounded-lg shadow-sm border border-purple-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-purple-800">1.3 柯西均值定理 (Cauchy's Mean Value Theorem)</h3>
        <p className="mb-4 text-gray-700">
          用於兩個函數的比例關係，這是證明羅必達法則的關鍵。
        </p>
        <div className="my-4 p-4 bg-white rounded border border-purple-200">
          <BlockMath math="\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}" />
        </div>
      </div>
    </section>
  );
}
