// src/Derivatives/ChainRule.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function ChainRule() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-purple-500 pb-2">3. 鏈鎖律 (Chain Rule)</h2>
      
      <p className="mb-4 text-gray-700">
        鏈鎖律是微分學中最重要且最常使用的法則之一，專門用來處理<strong>複合函數</strong>的微分。當函數像洋蔥一樣層層包覆時，我們需要由外而內，一層一層地剝開（微分）。
      </p>

      <div className="math-box mb-6 p-6 bg-purple-50 rounded-lg shadow-sm border border-purple-200">
        <h3 className="text-xl font-bold mb-3 text-purple-800">3.1 鏈鎖律的定義</h3>
        <p className="mb-2 text-gray-800">
          若 <InlineMath math="g" /> 在 <InlineMath math="x" /> 處可微，且 <InlineMath math="f" /> 在 <InlineMath math="g(x)" /> 處可微，則複合函數 <InlineMath math="F(x) = f(g(x))" /> 在 <InlineMath math="x" /> 處也可微，其導數為：
        </p>
        <div className="my-4 p-4 bg-white rounded border border-purple-100">
          <BlockMath math="F'(x) = f'(g(x)) \cdot g'(x)" />
        </div>
        
        <p className="mt-4 mb-2 text-gray-800">
          <strong>萊布尼茲符號 (Leibniz Notation) 表示法：</strong>
        </p>
        <p className="text-sm text-gray-600 mb-2">
          令 <InlineMath math="y = f(u)" /> 且 <InlineMath math="u = g(x)" />，則 <InlineMath math="y" /> 對 <InlineMath math="x" /> 的導數可以看作兩個變化率的相乘：
        </p>
        <div className="my-2 p-4 bg-white rounded border border-purple-100">
          <BlockMath math="\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}" />
        </div>
      </div>

      <div className="example-box bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h4 className="font-bold text-lg text-gray-800 mb-3">💡 實戰範例：</h4>
        <p className="mb-2 text-gray-700">計算 <InlineMath math="y = \sin(x^2)" /> 的導數。</p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><strong>辨認內外函數：</strong> 外函數是 <InlineMath math="f(u) = \sin(u)" />，內函數是 <InlineMath math="g(x) = x^2" />。</li>
          <li><strong>外函數微分：</strong> <InlineMath math="\sin" /> 微分得到 <InlineMath math="\cos" />，內部保持不變，得到 <InlineMath math="\cos(x^2)" />。</li>
          <li><strong>內函數微分：</strong> <InlineMath math="x^2" /> 微分得到 <InlineMath math="2x" />。</li>
          <li><strong>相乘（鏈鎖）：</strong> 
            <BlockMath math="\frac{dy}{dx} = \cos(x^2) \cdot 2x = 2x \cos(x^2)" />
          </li>
        </ol>
      </div>
    </section>
  );
}