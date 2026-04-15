// src/Functions/InverseHyperbolicFunctions.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import FunctionGraph from '../components/FunctionGraph';

export default function InverseHyperbolicFunctions() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title">6. 反雙曲函數 (Inverse Hyperbolic Functions)</h2>
      
      <p className="mb-4 text-gray-700">
        由於部分雙曲函數具有一對一的特性（或可像反三角函數那樣限制定義域使其一對一），它們也都具有反函數。
        特別的是，因為雙曲函數是用指數函數定義的，所以解出它們的反函數時，都可以用<strong>自然對數 <InlineMath math="\ln" /></strong> 來明確表示！這在未來的瑕積分轉換上非常實用。
      </p>

      {/* 6.1 定義與對數形式 */}
      <div className="math-box mb-8 p-6 bg-indigo-50 rounded-lg shadow-sm border border-indigo-200">
        <h3 className="text-xl font-bold mb-4 text-indigo-800">6.1 六大反雙曲函數</h3>
        <p className="mb-4 text-gray-800">以下列出六個反雙曲函數與其對數公式和圖形：</p>
        
        <div className="concept-grid mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          {/* arsinh */}
          <div className="concept-card" style={{ borderLeft: '4px solid #ef4444', backgroundColor: '#fef2f2' }}>
            <h3 className="text-lg font-bold mb-2">反雙曲正弦 (<InlineMath math="\sinh^{-1} x" /> 或 <InlineMath math="\text{arsinh } x" />)</h3>
            <p className="text-sm mb-2 text-gray-700">對數形式表示為：</p>
            <BlockMath math="\sinh^{-1} x = \ln\left(x + \sqrt{x^2 + 1}\right)" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => Math.asinh(x)} segments={[[-4, 4]]} range={[-3, 3]}
                color="#ef4444" xAxisTicks={[-2, 2]} yAxisTicks={[-2, 2]}
                xAxisLabels={["-2", "2"]} yAxisLabels={["-2", "2"]} 
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="\mathbb{R}" /></li>
              <li><strong>值域：</strong> <InlineMath math="\mathbb{R}" /></li>
            </ul>
          </div>

          {/* arcosh */}
          <div className="concept-card" style={{ borderLeft: '4px solid #0ea5e9', backgroundColor: '#f0f9ff' }}>
            <h3 className="text-lg font-bold mb-2">反雙曲餘弦 (<InlineMath math="\cosh^{-1} x" /> 或 <InlineMath math="\text{arcosh } x" />)</h3>
            <p className="text-sm mb-2 text-gray-700">限制 <InlineMath math="\cosh" /> 於 <InlineMath math="[0, \infty)" />：</p>
            <BlockMath math="\cosh^{-1} x = \ln\left(x + \sqrt{x^2 - 1}\right)" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => Math.acosh(x)} segments={[[1, 5]]} range={[0, 4]}
                color="#0ea5e9" xAxisTicks={[1, 5]} yAxisTicks={[2]}
                xAxisLabels={["1", "5"]} yAxisLabels={["2"]} 
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="x \geq 1" /></li>
              <li><strong>值域：</strong> <InlineMath math="y \geq 0" /></li>
            </ul>
          </div>

          {/* artanh */}
          <div className="concept-card" style={{ borderLeft: '4px solid #f97316', backgroundColor: '#fff7ed' }}>
            <h3 className="text-lg font-bold mb-2">反雙曲正切 (<InlineMath math="\tanh^{-1} x" /> 或 <InlineMath math="\text{artanh } x" />)</h3>
            <p className="text-sm mb-2 text-gray-700">對數形式表示為：</p>
            <BlockMath math="\tanh^{-1} x = \frac{1}{2}\ln\left(\frac{1+x}{1-x}\right)" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => Math.atanh(x)} segments={[[-0.99, 0.99]]} range={[-3, 3]}
                color="#f97316" xAxisTicks={[-1, 1]} yAxisTicks={[-2, 2]}
                xAxisLabels={["-1", "1"]} yAxisLabels={["-2", "2"]} asymptotesX={[-1, 1]}
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="(-1, 1)" /></li>
              <li><strong>值域：</strong> <InlineMath math="\mathbb{R}" /></li>
            </ul>
          </div>

          {/* arcoth */}
          <div className="concept-card" style={{ borderLeft: '4px solid #a855f7', backgroundColor: '#faf5ff' }}>
            <h3 className="text-lg font-bold mb-2">反雙曲餘切 (<InlineMath math="\coth^{-1} x" />)</h3>
            <p className="text-sm mb-2 text-gray-700">對數形式表示為：</p>
            <BlockMath math="\coth^{-1} x = \frac{1}{2}\ln\left(\frac{x+1}{x-1}\right)" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => 0.5 * Math.log((x + 1) / (x - 1))} segments={[[-4, -1.01], [1.01, 4]]} range={[-3, 3]}
                color="#a855f7" xAxisTicks={[-1, 1]} yAxisTicks={[-1, 1]}
                xAxisLabels={["-1", "1"]} yAxisLabels={["-1", "1"]} asymptotesX={[-1, 1]} asymptotesY={[0]}
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="|x| > 1" /></li>
              <li><strong>值域：</strong> <InlineMath math="y \neq 0" /></li>
            </ul>
          </div>

          {/* asech */}
          <div className="concept-card" style={{ borderLeft: '4px solid #ec4899', backgroundColor: '#fdf2f8' }}>
            <h3 className="text-lg font-bold mb-2">反雙曲正割 (<InlineMath math="\text{sech}^{-1} x" />)</h3>
            <p className="text-sm mb-2 text-gray-700">對數形式表示為：</p>
            <BlockMath math="\text{sech}^{-1} x = \ln\left(\frac{1 + \sqrt{1 - x^2}}{x}\right)" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => Math.log((1 + Math.sqrt(1 - x * x)) / x)} segments={[[0.005, 1]]} range={[0, 4]}
                color="#ec4899" xAxisTicks={[1]} yAxisTicks={[2]}
                xAxisLabels={["1"]} yAxisLabels={["2"]} asymptotesX={[0]}
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="(0, 1]" /></li>
              <li><strong>值域：</strong> <InlineMath math="y \geq 0" /></li>
            </ul>
          </div>

          {/* acsch */}
          <div className="concept-card" style={{ borderLeft: '4px solid #14b8a6', backgroundColor: '#f0fdfa' }}>
            <h3 className="text-lg font-bold mb-2">反雙曲餘割 (<InlineMath math="\text{csch}^{-1} x" />)</h3>
            <p className="text-sm mb-2 text-gray-700">對數形式表示為：</p>
            <BlockMath math="\text{csch}^{-1} x = \ln\left(\frac{1}{x} + \frac{\sqrt{1 + x^2}}{|x|}\right)" />
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <FunctionGraph 
                f={(x) => Math.log(1 / x + Math.sqrt(1 / (x * x) + 1))} segments={[[-4, -0.01], [0.01, 4]]} range={[-3, 3]}
                color="#14b8a6" xAxisTicks={[-1, 1]} yAxisTicks={[-1, 1]}
                xAxisLabels={["-1", "1"]} yAxisLabels={["-1", "1"]} asymptotesX={[0]} asymptotesY={[0]}
              />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1">
              <li><strong>定義域：</strong> <InlineMath math="x \neq 0" /></li>
              <li><strong>值域：</strong> <InlineMath math="y \neq 0" /></li>
            </ul>
          </div>

        </div>
      </div>

      {/* 6.2 證明：反雙曲函數的對數形式 */}
      <div className="math-box mt-8">
        <h3 className="text-xl font-bold mb-3 text-indigo-800">6.2 證明：對數形式的推導</h3>
        <p className="mb-4 text-gray-800">
          透過解一元二次方程式，我們能推導出所有反雙曲函數的自然對數表達式。點擊下方各函數的展開區塊即可查看完整數學證明：
        </p>
        
        <div className="space-y-4">
          
          {/* arsinh */}
          <details style={{ backgroundColor: '#fdf2f8', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #ef4444', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <summary style={{ fontWeight: 'bold', cursor: 'pointer', outline: 'none', color: '#1f2937', whiteSpace: 'nowrap', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '4px' }}>
              證明 1：<InlineMath math="\sinh^{-1} x = \ln(x + \sqrt{x^2 + 1})" />
            </summary>
            <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #fecdd3', cursor: 'auto', overflowX: 'auto', overflowY: 'hidden' }}>
              <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.875rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>令 <InlineMath math="y = \sinh^{-1} x" />，等價於 <InlineMath math="x = \sinh y = \frac{e^y - e^{-y}}{2}" />。</li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>兩邊同乘 <InlineMath math="2e^y" />，整理得一元二次方程式：<BlockMath math="(e^y)^2 - 2x(e^y) - 1 = 0" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>公式解得 <InlineMath math="e^y = \frac{2x \pm \sqrt{4x^2 - 4(1)(-1)}}{2} = x \pm \sqrt{x^2 + 1}" />。</li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>因為指數恆正 (<InlineMath math="e^y > 0" />)，且 <InlineMath math="\sqrt{x^2 + 1} > |x|" /> 恆成立，負根不合，必取正根：<BlockMath math="e^y = x + \sqrt{x^2 + 1}" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>兩邊取 <InlineMath math="\ln" /> 即得：<BlockMath math="y = \ln(x + \sqrt{x^2 + 1})" /> Q.E.D.</li>
              </ol>
            </div>
          </details>

          {/* arcosh */}
          <details style={{ backgroundColor: '#f0f9ff', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #0ea5e9', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <summary style={{ fontWeight: 'bold', cursor: 'pointer', outline: 'none', color: '#1f2937', whiteSpace: 'nowrap', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '4px' }}>
              證明 2：<InlineMath math="\cosh^{-1} x = \ln(x + \sqrt{x^2 - 1})" /> (<InlineMath math="x \ge 1" />)
            </summary>
            <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #bae6fd', cursor: 'auto', overflowX: 'auto', overflowY: 'hidden' }}>
              <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.875rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>令 <InlineMath math="y = \cosh^{-1} x" />（限制 <InlineMath math="y \ge 0" />），等價於 <InlineMath math="x = \cosh y = \frac{e^y + e^{-y}}{2}" />。</li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>兩邊同乘 <InlineMath math="2e^y" /> 整理：<BlockMath math="(e^y)^2 - 2x(e^y) + 1 = 0" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>公式解得 <InlineMath math="e^y = x \pm \sqrt{x^2 - 1}" />。</li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>因為 <InlineMath math="y \ge 0" />，所以 <InlineMath math="e^y \ge 1" />。又因 <InlineMath math="x - \sqrt{x^2-1} = \frac{1}{x+\sqrt{x^2-1}} \le 1" />，故必須取加號：<BlockMath math="e^y = x + \sqrt{x^2 - 1}" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>取 <InlineMath math="\ln" /> 即得：<BlockMath math="y = \ln(x + \sqrt{x^2 - 1})" /> Q.E.D.</li>
              </ol>
            </div>
          </details>

          {/* artanh */}
          <details style={{ backgroundColor: '#fff7ed', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #f97316', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <summary style={{ fontWeight: 'bold', cursor: 'pointer', outline: 'none', color: '#1f2937', whiteSpace: 'nowrap', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '4px' }}>
              證明 3：<InlineMath math="\tanh^{-1} x = \frac{1}{2}\ln\left(\frac{1+x}{1-x}\right)" /> (<InlineMath math="|x| < 1" />)
            </summary>
            <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #ffedd5', cursor: 'auto', overflowX: 'auto', overflowY: 'hidden' }}>
              <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.875rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>令 <InlineMath math="y = \tanh^{-1} x" />，等價於 <InlineMath math="x = \tanh y = \frac{e^y - e^{-y}}{e^y + e^{-y}}" />。</li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>等號右邊分子分母同乘 <InlineMath math="e^y" />：<BlockMath math="x = \frac{e^{2y} - 1}{e^{2y} + 1}" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>交叉相乘並移項解出 <InlineMath math="e^{2y}" />：<BlockMath math="x(e^{2y} + 1) = e^{2y} - 1 \implies e^{2y}(1 - x) = 1 + x" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}><BlockMath math="e^{2y} = \frac{1+x}{1-x}" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>取 <InlineMath math="\ln" /> 再除以 2 得：<BlockMath math="y = \frac{1}{2}\ln\left(\frac{1+x}{1-x}\right)" /> Q.E.D.</li>
              </ol>
            </div>
          </details>

          {/* arcoth */}
          <details style={{ backgroundColor: '#faf5ff', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #a855f7', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <summary style={{ fontWeight: 'bold', cursor: 'pointer', outline: 'none', color: '#1f2937', whiteSpace: 'nowrap', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '4px' }}>
              證明 4：<InlineMath math="\coth^{-1} x = \frac{1}{2}\ln\left(\frac{x+1}{x-1}\right)" /> (<InlineMath math="|x| > 1" />)
            </summary>
            <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #f3e8ff', cursor: 'auto', overflowX: 'auto', overflowY: 'hidden' }}>
              <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.875rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>令 <InlineMath math="y = \coth^{-1} x" />，等價於 <InlineMath math="x = \coth y = \frac{e^y + e^{-y}}{e^y - e^{-y}}" />。</li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>等號右邊同乘 <InlineMath math="e^y" />：<BlockMath math="x = \frac{e^{2y} + 1}{e^{2y} - 1}" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>交叉相乘並移項解出 <InlineMath math="e^{2y}" />：<BlockMath math="x(e^{2y} - 1) = e^{2y} + 1 \implies e^{2y}(x - 1) = x + 1" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}><BlockMath math="e^{2y} = \frac{x+1}{x-1}" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>取 <InlineMath math="\ln" /> 再除以 2 得：<BlockMath math="y = \frac{1}{2}\ln\left(\frac{x+1}{x-1}\right)" /> Q.E.D.</li>
              </ol>
            </div>
          </details>

           {/* asech */}
          <details style={{ backgroundColor: '#fdf2f8', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #ec4899', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <summary style={{ fontWeight: 'bold', cursor: 'pointer', outline: 'none', color: '#1f2937', whiteSpace: 'nowrap', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '4px' }}>
              證明 5：<InlineMath math="\text{sech}^{-1} x = \ln\left(\frac{1 + \sqrt{1 - x^2}}{x}\right)" /> (<InlineMath math="0 < x \le 1" />)
            </summary>
            <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #fbcfe8', cursor: 'auto', overflowX: 'auto', overflowY: 'hidden' }}>
              <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.875rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>令 <InlineMath math="y = \text{sech}^{-1} x" />（限制 <InlineMath math="y \ge 0" />），等價於 <InlineMath math="x = \text{sech } y = \frac{2}{e^y + e^{-y}}" />。</li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>兩邊同乘 <InlineMath math="e^y(e^y + e^{-y})" /> 並整理：<BlockMath math="x(e^y)^2 - 2(e^y) + x = 0" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>公式解得 <InlineMath math="e^y = \frac{2 \pm \sqrt{4 - 4x^2}}{2x} = \frac{1 \pm \sqrt{1 - x^2}}{x}" />。</li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>因為 <InlineMath math="y \ge 0" />，所以 <InlineMath math="e^y \ge 1" />。減號無法保證大於一，故必須取加號正根：<BlockMath math="e^y = \frac{1 + \sqrt{1 - x^2}}{x}" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>取 <InlineMath math="\ln" /> 即得：<BlockMath math="y = \ln\left(\frac{1 + \sqrt{1 - x^2}}{x}\right)" /> Q.E.D.</li>
              </ol>
            </div>
          </details>
          
          {/* acsch */}
          <details style={{ backgroundColor: '#f0fdfa', padding: '1rem', marginBottom: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #14b8a6', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <summary style={{ fontWeight: 'bold', cursor: 'pointer', outline: 'none', color: '#1f2937', whiteSpace: 'nowrap', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '4px' }}>
              證明 6：<InlineMath math="\text{csch}^{-1} x = \ln\left(\frac{1}{x} + \frac{\sqrt{1 + x^2}}{|x|}\right)" /> (<InlineMath math="x \neq 0" />)
            </summary>
            <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #ccfbf1', cursor: 'auto', overflowX: 'auto', overflowY: 'hidden' }}>
              <ol style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', fontSize: '0.875rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>令 <InlineMath math="y = \text{csch}^{-1} x" />，等價於 <InlineMath math="x = \text{csch } y = \frac{2}{e^y - e^{-y}}" />。</li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>整理為二次方程式 <InlineMath math="x(e^y)^2 - 2(e^y) - x = 0" /> 進行公式解得：<BlockMath math="e^y = \frac{2 \pm \sqrt{4 + 4x^2}}{2x} = \frac{1}{x} \pm \frac{\sqrt{1 + x^2}}{x}" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>因為 <InlineMath math="e^y > 0" /> 恆成立，根據 <InlineMath math="x" /> 的正負號可統一整理為加上絕對值來保護正值：<BlockMath math="e^y = \frac{1}{x} + \frac{\sqrt{1 + x^2}}{|x|}" /></li>
                <li style={{ display: 'list-item', listStyleType: 'decimal' }}>取 <InlineMath math="\ln" /> 取對數即得結果。 Q.E.D.</li>
              </ol>
            </div>
          </details>

        </div>
      </div>

    </section>
  );
}
