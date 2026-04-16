// src/Functions/HyperbolicFunctions.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import FunctionGraph from '../components/FunctionGraph';

export default function HyperbolicFunctions() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title">7. 雙曲函數 (Hyperbolic Functions)</h2>
      
      <p className="mb-4">
        雙曲函數在許多應用數學與物理領域中頻繁出現，例如吊橋懸索的形狀（懸鏈線）或是狹義相對論中的計算。
        它們是由指數量建構而成的，與我們熟知的三角函數有著驚人的相似性。之所以稱為「雙曲」函數，是因為正如三角函數 <InlineMath math="(\cos t, \sin t)" /> 參數化了單位圓 <InlineMath math="x^2 + y^2 = 1" />，雙曲函數 <InlineMath math="(\cosh t, \sinh t)" /> 參數化了單位雙曲線 <InlineMath math="x^2 - y^2 = 1" />。
      </p>

      {/* 5.1 定義與圖形 */}
      <div className="math-box mb-8 p-6 bg-purple-50 rounded-lg shadow-sm border border-purple-200">
        <h3 className="text-xl font-bold mb-4 text-purple-800">7.1 基本雙曲函數與定義</h3>
        <p className="mb-4 text-gray-800">六大基本雙曲函數的代數定義如下：</p>
        
        <div className="concept-grid mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          {/* sinh */}
          <div className="concept-card" style={{ borderLeft: '4px solid #8b5cf6', backgroundColor: '#f5f3ff' }}>
            <h3 className="text-lg font-bold mb-2">雙曲正弦 (<InlineMath math="\sinh x" />)</h3>
            <BlockMath math="\sinh x = \frac{e^x - e^{-x}}{2}" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => Math.sinh(x)} segments={[[-3, 3]]} range={[-5, 5]}
                color="#8b5cf6" xAxisTicks={[-2, 2]} yAxisTicks={[-3, 3]}
                xAxisLabels={["-2", "2"]} yAxisLabels={["-3", "3"]} 
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="\mathbb{R}" /></li>
              <li><strong>值域：</strong> <InlineMath math="\mathbb{R}" /></li>
              <li><strong>奇偶性：</strong> 奇函數 (<InlineMath math="\sinh(-x)=-\sinh x" />)</li>
            </ul>
          </div>

          {/* cosh */}
          <div className="concept-card" style={{ borderLeft: '4px solid #d946ef', backgroundColor: '#fdf4ff' }}>
            <h3 className="text-lg font-bold mb-2">雙曲餘弦 (<InlineMath math="\cosh x" />)</h3>
            <BlockMath math="\cosh x = \frac{e^x + e^{-x}}{2}" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => Math.cosh(x)} segments={[[-3, 3]]} range={[0, 6]}
                color="#d946ef" xAxisTicks={[-2, 2]} yAxisTicks={[1, 5]}
                xAxisLabels={["-2", "2"]} yAxisLabels={["1", "5"]} 
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="\mathbb{R}" /></li>
              <li><strong>值域：</strong> <InlineMath math="[1, \infty)" /></li>
              <li><strong>奇偶性：</strong> 偶函數 (<InlineMath math="\cosh(-x)=\cosh x" />)</li>
            </ul>
          </div>

          {/* tanh */}
          <div className="concept-card" style={{ borderLeft: '4px solid #f43f5e', backgroundColor: '#fff1f2' }}>
            <h3 className="text-lg font-bold mb-2">雙曲正切 (<InlineMath math="\tanh x" />)</h3>
            <BlockMath math="\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^x - e^{-x}}{e^x + e^{-x}}" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => Math.tanh(x)} segments={[[-4, 4]]} range={[-2, 2]}
                color="#f43f5e" xAxisTicks={[-2, 2]} yAxisTicks={[-1, 1]}
                xAxisLabels={["-2", "2"]} yAxisLabels={["-1", "1"]} asymptotesY={[-1, 1]}
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="\mathbb{R}" /></li>
              <li><strong>值域：</strong> <InlineMath math="(-1, 1)" /></li>
              <li><strong>奇偶性：</strong> 奇函數</li>
            </ul>
          </div>

          {/* coth */}
          <div className="concept-card" style={{ borderLeft: '4px solid #a855f7', backgroundColor: '#faf5ff' }}>
            <h3 className="text-lg font-bold mb-2">雙曲餘切 (<InlineMath math="\coth x" />)</h3>
            <BlockMath math="\coth x = \frac{\cosh x}{\sinh x} = \frac{e^x + e^{-x}}{e^x - e^{-x}}" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => 1 / Math.tanh(x)} segments={[[-4, -0.05], [0.05, 4]]} range={[-4, 4]}
                color="#a855f7" xAxisTicks={[-2, 2]} yAxisTicks={[-1, 1]}
                xAxisLabels={["-2", "2"]} yAxisLabels={["-1", "1"]} asymptotesX={[0]} asymptotesY={[-1, 1]}
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="x \neq 0" /></li>
              <li><strong>值域：</strong> <InlineMath math="|y| > 1" /></li>
              <li><strong>奇偶性：</strong> 奇函數</li>
            </ul>
          </div>

          {/* sech */}
          <div className="concept-card" style={{ borderLeft: '4px solid #ec4899', backgroundColor: '#fdf2f8' }}>
            <h3 className="text-lg font-bold mb-2">雙曲正割 (<InlineMath math="\text{sech } x" />)</h3>
            <BlockMath math="\text{sech } x = \frac{1}{\cosh x} = \frac{2}{e^x + e^{-x}}" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => 1 / Math.cosh(x)} segments={[[-4, 4]]} range={[-0.5, 1.5]}
                color="#ec4899" xAxisTicks={[-2, 2]} yAxisTicks={[1]}
                xAxisLabels={["-2", "2"]} yAxisLabels={["1"]} asymptotesY={[0]}
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="\mathbb{R}" /></li>
              <li><strong>值域：</strong> <InlineMath math="(0, 1]" /></li>
              <li><strong>奇偶性：</strong> 偶函數</li>
            </ul>
          </div>

          {/* csch */}
          <div className="concept-card" style={{ borderLeft: '4px solid #14b8a6', backgroundColor: '#f0fdfa' }}>
            <h3 className="text-lg font-bold mb-2">雙曲餘割 (<InlineMath math="\text{csch } x" />)</h3>
            <BlockMath math="\text{csch } x = \frac{1}{\sinh x} = \frac{2}{e^x - e^{-x}}" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => 1 / Math.sinh(x)} segments={[[-4, -0.05], [0.05, 4]]} range={[-4, 4]}
                color="#14b8a6" xAxisTicks={[-2, 2]} yAxisTicks={[-1, 1]}
                xAxisLabels={["-2", "2"]} yAxisLabels={["-1", "1"]} asymptotesX={[0]} asymptotesY={[0]}
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="x \neq 0" /></li>
              <li><strong>值域：</strong> <InlineMath math="y \neq 0" /></li>
              <li><strong>奇偶性：</strong> 奇函數</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
