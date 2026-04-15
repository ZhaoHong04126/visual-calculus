// src/Functions/InverseTrigFunctions.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import FunctionGraph from '../components/FunctionGraph';

export default function InverseTrigFunctions() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title">4. 反三角函數 (Inverse Trigonometric Functions)</h2>
      
      <p className="mb-4">
        所有的三角函數（如正弦、餘弦）都是週期函數，這意味著它們的圖形會像波浪一樣反覆震盪，絕對無法通過「水平線測試」。換句話說，它們都不是「一對一」函數。
      </p>
      <p className="mb-6">
        為了解決這個問題並找出它們的反函數，我們必須採取一個策略：<strong>人為地「截斷」函數，強制限制它們的定義域</strong>，使其在這段被限制的區間內變成一對一。
      </p>

      {/* 4.1 三大核心反三角函數 */}
      <div className="math-box mb-8 p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-200">
        <h3 className="text-xl font-bold mb-4 text-blue-800">4.1 定義與限制區間</h3>
      <div className="concept-grid mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        
        {/* arcsin */}
        <div className="concept-card" style={{ borderLeft: '4px solid #ef4444', backgroundColor: '#fef2f2' }}>
          <h3 className="text-lg font-bold mb-2">反正弦 (<InlineMath settings={{ strict: false }} math="\arcsin x" /> 或 <InlineMath settings={{ strict: false }} math="\sin^{-1} x" />)</h3>
          <p className="text-sm mb-2 text-gray-700">我們將 <InlineMath settings={{ strict: false }} math="\sin x" /> 限制在最靠近原點的遞增區段。</p>
          <BlockMath settings={{ strict: false }} math="y = \arcsin x \iff \sin y = x" />
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <FunctionGraph 
              f={(x) => Math.asin(x)} segments={[[-1, 1]]} range={[-Math.PI/2, Math.PI/2]}
              color="#ef4444" xAxisTicks={[-1, 1]} yAxisTicks={[-Math.PI/2, Math.PI/2]}
              xAxisLabels={["-1", "1"]} yAxisLabels={["-π/2", "π/2"]} 
            />
          </div>
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
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <FunctionGraph 
              f={(x) => Math.acos(x)} segments={[[-1, 1]]} range={[0, Math.PI]}
              color="#0ea5e9" xAxisTicks={[-1, 1]} yAxisTicks={[Math.PI/2, Math.PI]}
              xAxisLabels={["-1", "1"]} yAxisLabels={["π/2", "π"]} 
            />
          </div>
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
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <FunctionGraph 
              f={(x) => Math.atan(x)} segments={[[-4, 4]]} range={[-Math.PI/2, Math.PI/2]}
              color="#f97316" xAxisTicks={[-2, 2]} yAxisTicks={[-Math.PI/2, Math.PI/2]}
              xAxisLabels={["", ""]} yAxisLabels={["-π/2", "π/2"]} asymptotesY={[-Math.PI/2, Math.PI/2]}
            />
          </div>
          <ul className="list-disc list-inside mt-4 text-sm space-y-1">
            <li><strong>原限制區間：</strong> <InlineMath settings={{ strict: false }} math="y \in (-\frac{\pi}{2}, \frac{\pi}{2})" /></li>
            <li><strong>反函數定義域：</strong> <InlineMath settings={{ strict: false }} math="x \in \mathbb{R} = (-\infty, \infty)" /></li>
          </ul>
        </div>

        {/* arccot */}
        <div className="concept-card" style={{ borderLeft: '4px solid #a855f7', backgroundColor: '#faf5ff' }}>
          <h3 className="text-lg font-bold mb-2">反餘切 (<InlineMath settings={{ strict: false }} math="\text{arccot } x" /> 或 <InlineMath settings={{ strict: false }} math="\cot^{-1} x" />)</h3>
          <p className="text-sm mb-2 text-gray-700">我們將 <InlineMath settings={{ strict: false }} math="\cot x" /> 限制在 <InlineMath settings={{ strict: false }} math="(0, \pi)" /> 這個連續的遞減區間。</p>
          <BlockMath settings={{ strict: false }} math="y = \text{arccot } x \iff \cot y = x" />
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <FunctionGraph 
              f={(x) => Math.PI/2 - Math.atan(x)} segments={[[-4, 4]]} range={[0, Math.PI]}
              color="#a855f7" xAxisTicks={[-2, 2]} yAxisTicks={[Math.PI/2, Math.PI]}
              xAxisLabels={["", ""]} yAxisLabels={["π/2", "π"]} asymptotesY={[0, Math.PI]}
            />
          </div>
          <ul className="list-disc list-inside mt-4 text-sm space-y-1">
            <li><strong>原限制區間：</strong> <InlineMath settings={{ strict: false }} math="y \in (0, \pi)" /></li>
            <li><strong>反函數定義域：</strong> <InlineMath settings={{ strict: false }} math="x \in \mathbb{R} = (-\infty, \infty)" /></li>
          </ul>
        </div>

        {/* arcsec */}
        <div className="concept-card" style={{ borderLeft: '4px solid #ec4899', backgroundColor: '#fdf2f8' }}>
          <h3 className="text-lg font-bold mb-2">反正割 (<InlineMath settings={{ strict: false }} math="\text{arcsec } x" /> 或 <InlineMath settings={{ strict: false }} math="\sec^{-1} x" />)</h3>
          <p className="text-sm mb-2 text-gray-700">我們將 <InlineMath settings={{ strict: false }} math="\sec x" /> 的定義域避開垂直漸近線做限制。</p>
          <BlockMath settings={{ strict: false }} math="y = \text{arcsec } x \iff \sec y = x" />
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <FunctionGraph 
              f={(x) => Math.acos(1/x)} segments={[[-4, -1], [1, 4]]} range={[0, Math.PI]}
              color="#ec4899" xAxisTicks={[-1, 1]} yAxisTicks={[Math.PI/2, Math.PI]}
              xAxisLabels={["-1", "1"]} yAxisLabels={["π/2", "π"]} asymptotesY={[Math.PI/2]}
            />
          </div>
          <ul className="list-disc list-inside mt-4 text-sm space-y-1">
            <li><strong>原限制區間：</strong> <InlineMath settings={{ strict: false }} math="y \in [0, \frac{\pi}{2}) \cup (\frac{\pi}{2}, \pi]" /></li>
            <li><strong>反函數定義域：</strong> <InlineMath settings={{ strict: false }} math="|x| \geq 1" /></li>
          </ul>
        </div>

        {/* arccsc */}
        <div className="concept-card" style={{ borderLeft: '4px solid #14b8a6', backgroundColor: '#f0fdfa' }}>
          <h3 className="text-lg font-bold mb-2">反餘割 (<InlineMath settings={{ strict: false }} math="\text{arccsc } x" /> 或 <InlineMath settings={{ strict: false }} math="\csc^{-1} x" />)</h3>
          <p className="text-sm mb-2 text-gray-700">同樣避開沒有定義的點 <InlineMath settings={{ strict: false }} math="0" />，將其限制在靠近原點的兩段區間。</p>
          <BlockMath settings={{ strict: false }} math="y = \text{arccsc } x \iff \csc y = x" />
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <FunctionGraph 
              f={(x) => Math.asin(1/x)} segments={[[-4, -1], [1, 4]]} range={[-Math.PI/2, Math.PI/2]}
              color="#14b8a6" xAxisTicks={[-1, 1]} yAxisTicks={[-Math.PI/2, Math.PI/2]}
              xAxisLabels={["-1", "1"]} yAxisLabels={["-π/2", "π/2"]} asymptotesY={[0]}
            />
          </div>
          <ul className="list-disc list-inside mt-4 text-sm space-y-1">
            <li><strong>原限制區間：</strong> <InlineMath settings={{ strict: false }} math="y \in [-\frac{\pi}{2}, 0) \cup (0, \frac{\pi}{2}]" /></li>
            <li><strong>反函數定義域：</strong> <InlineMath settings={{ strict: false }} math="|x| \geq 1" /></li>
          </ul>
        </div>
        </div>
      </div>

      <p className="text-sm text-red-600 font-bold mt-4">
        ⚠️ 符號警告：<InlineMath settings={{ strict: false }} math="\sin^{-1} x" /> 代表的是反正弦函數，絕對不等於 <InlineMath settings={{ strict: false }} math="(\sin x)^{-1} = \frac{1}{\sin x} = \csc x" />！
      </p>

      {/* 4.2 複合函數與直角三角形技巧 */}
      <div className="math-box mt-8">
        <h3 className="text-xl font-bold mb-3 text-blue-800">4.2 幾何輔助：直角三角形法</h3>
        <p className="mb-2">
          當我們需要計算形如 <InlineMath settings={{ strict: false }} math="\cos(\arctan x)" /> 這種「三角函數包著反三角函數」的式子時，最有效的方法是利用直角三角形。
        </p>
        <p className="mb-4">
          因為反三角函數輸出的結果是一個<strong>「角度」</strong>。
        </p>
        
        <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-400">
          <h4 className="font-bold text-gray-800 mb-2">步驟拆解：求 <InlineMath math="\cos(\arctan x)" /></h4>
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