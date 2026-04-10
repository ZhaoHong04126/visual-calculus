// src/Functions/InverseTrigFunctions.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function InverseTrigFunctions() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title">3. 反三角函數 (Inverse Trigonometric Functions)</h2>
      
      <p className="mb-4">
        所有的三角函數（如正弦、餘弦）都是週期函數，這意味著它們的圖形會像波浪一樣反覆震盪，絕對無法通過「水平線測試」。換句話說，它們都不是「一對一」函數。
      </p>
      <p className="mb-6">
        為了解決這個問題並找出它們的反函數，我們必須採取一個策略：<strong>人為地「截斷」函數，強制限制它們的定義域</strong>，使其在這段被限制的區間內變成一對一。
      </p>

      {/* 3.1 三大核心反三角函數 */}
      <h3 className="text-xl font-bold mb-4 text-blue-800">3.1 定義與限制區間</h3>
      <div className="concept-grid mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        
        {/* arcsin */}
        <div className="concept-card" style={{ borderLeft: '4px solid #ef4444', backgroundColor: '#fef2f2' }}>
          <h3 className="text-lg font-bold mb-2">反正弦 (<InlineMath settings={{ strict: false }} math="\arcsin x" /> 或 <InlineMath settings={{ strict: false }} math="\sin^{-1} x" />)</h3>
          <p className="text-sm mb-2 text-gray-700">我們將 <InlineMath settings={{ strict: false }} math="\sin x" /> 限制在最靠近原點的遞增區段。</p>
          <BlockMath settings={{ strict: false }} math="y = \arcsin x \iff \sin y = x" />
          <ul className="list-disc list-inside mt-4 text-sm space-y-1">
            <li><strong>原限制區間：</strong> <InlineMath settings={{ strict: false }} math="y \in [-\frac{\pi}{2}, \frac{\pi}{2}]" /></li>
            <li><strong>反函數定義域：</strong> <InlineMath settings={{ strict: false }} math="x \in [-1, 1]" /></li>
          </ul>
        </div>

        {/* arccos */}
        <div className="concept-card" style={{ borderLeft: '4px solid #0ea5e9', backgroundColor: '#f0f9ff' }}>
          <h3 className="text-lg font-bold mb-2">反餘弦 (<InlineMath settings={{ strict: false }} math="\arccos x" /> 或 <InlineMath settings={{ strict: false }} math="\cos^{-1} x" />)</h3>
          <p className="text-sm mb-2 text-gray-700">我們將 <InlineMath settings={{ strict: false }} math="\cos x" /> 限制在從峰頂到谷底的遞減區段。</p>
          <BlockMath settings={{ strict: false }} math="y = \arccos x \iff \cos y = x" />
          <ul className="list-disc list-inside mt-4 text-sm space-y-1">
            <li><strong>原限制區間：</strong> <InlineMath settings={{ strict: false }} math="y \in [0, \pi]" /></li>
            <li><strong>反函數定義域：</strong> <InlineMath settings={{ strict: false }} math="x \in [-1, 1]" /></li>
          </ul>
        </div>

        {/* arctan */}
        <div className="concept-card" style={{ borderLeft: '4px solid #f97316', backgroundColor: '#fff7ed' }}>
          <h3 className="text-lg font-bold mb-2">反正切 (<InlineMath settings={{ strict: false }} math="\arctan x" /> 或 <InlineMath settings={{ strict: false }} math="\tan^{-1} x" />)</h3>
          <p className="text-sm mb-2 text-gray-700">我們將 <InlineMath settings={{ strict: false }} math="\tan x" /> 限制在兩條相鄰的垂直漸近線之間。</p>
          <BlockMath settings={{ strict: false }} math="y = \arctan x \iff \tan y = x" />
          <ul className="list-disc list-inside mt-4 text-sm space-y-1">
            <li><strong>原限制區間：</strong> <InlineMath settings={{ strict: false }} math="y \in (-\frac{\pi}{2}, \frac{\pi}{2})" /></li>
            <li><strong>反函數定義域：</strong> <InlineMath settings={{ strict: false }} math="x \in \mathbb{R} = (-\infty, \infty)" /></li>
          </ul>
        </div>
      </div>

      <p className="text-sm text-red-600 font-bold mt-4">
        ⚠️ 符號警告：<InlineMath settings={{ strict: false }} math="\sin^{-1} x" /> 代表的是反正弦函數，絕對不等於 <InlineMath settings={{ strict: false }} math="(\sin x)^{-1} = \frac{1}{\sin x} = \csc x" />！
      </p>

      {/* 3.2 複合函數與直角三角形技巧 */}
      <div className="math-box mt-8">
        <h3 className="text-xl font-bold mb-3 text-blue-800">3.2 幾何輔助：直角三角形法</h3>
        <p className="mb-2">
          當我們需要計算形如 <InlineMath settings={{ strict: false }} math="\cos(\arctan x)" /> 這種「三角函數包著反三角函數」的式子時，最有效的方法是利用直角三角形。
        </p>
        <p className="mb-4">
          因為反三角函數輸出的結果是一個<strong>「角度」</strong>。
        </p>
        
        <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-400">
          <h4 className="font-bold text-gray-800 mb-2">步驟拆解：求 $\cos(\arctan x)$</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800">
            <li>首先，令內層的角度為 <InlineMath settings={{ strict: false }} math="y = \arctan x" />，根據定義這等價於 <InlineMath settings={{ strict: false }} math="\tan y = x = \frac{x}{1}" />。</li>
            <li>畫一個直角三角形，標示出一個銳角 <InlineMath settings={{ strict: false }} math="y" />。</li>
            <li>因為 <InlineMath settings={{ strict: false }} math="\tan = \frac{\text{對邊}}{\text{鄰邊}}" />，所以我們將對邊設為 <InlineMath settings={{ strict: false }} math="x" />，鄰邊設為 <InlineMath settings={{ strict: false }} math="1" />。</li>
            <li>利用畢氏定理求出斜邊為 <InlineMath settings={{ strict: false }} math="\sqrt{x^2 + 1^2} = \sqrt{x^2 + 1}" />。</li>
            <li>最後，回到原式求 <InlineMath settings={{ strict: false }} math="\cos y" />。<br/>
                因為 <InlineMath settings={{ strict: false }} math="\cos = \frac{\text{鄰邊}}{\text{斜邊}}" />，我們可以輕易看出結果：
                <BlockMath settings={{ strict: false }} math="\cos(\arctan x) = \frac{1}{\sqrt{x^2 + 1}}" />
            </li>
          </ol>
        </div>
      </div>

    </section>
  );
}