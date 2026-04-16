// src/Functions/PowerPolynomialFunctions.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import FunctionGraph from '../components/FunctionGraph';

export default function PowerPolynomialFunctions() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-indigo-500 pb-2">2. 冪函數與多項式函數 (Power & Polynomial Functions)</h2>
      
      <p className="mb-4 text-gray-700">
        除了上一節介紹的函數定義外，在微積分中最常討論、運算也最基礎的函數類型，莫過於冪函數與多項式函數。
      </p>

      {/* ==========================================
          2.1 冪函數
      ========================================== */}
      <div className="math-box mb-8 p-6 bg-indigo-50 rounded-lg shadow-sm border border-indigo-200">
        <h3 className="text-xl font-bold mb-3 text-indigo-800">2.1 冪函數 (Power Functions)</h3>
        <p className="mb-4 text-gray-800">
          冪函數的形式為 <InlineMath math="f(x) = x^a" />，其中底數 <InlineMath math="x" /> 為自變數，而指數 <InlineMath math="a" /> 為一個常數。
          根據常數 <InlineMath math="a" /> 的不同，冪函數的圖形會有極大的差異。
        </p>

        <div className="concept-grid mt-4">
          <div className="concept-card diff-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>正整數 (<InlineMath math="a = n" />)</h4>
            <div style={{ width: '100%' }}>
               <FunctionGraph 
                 f={(x) => x*x} 
                 segments={[[-3, 3]]} range={[-1, 9]} 
                 color="#4f46e5" xAxisTicks={[-2, 2]} yAxisTicks={[4]}
                 xAxisLabels={["-2", "2"]} yAxisLabels={["4"]}
                 height={140}
               />
            </div>
            <p className="text-sm mt-3 text-gray-700">例如：<InlineMath math="y = x^2, y = x^3" />。圖形為拋物線或三次曲線。</p>
          </div>

          <div className="concept-card int-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>負整數 (<InlineMath math="a = -n" />)</h4>
            <div style={{ width: '100%' }}>
               <FunctionGraph 
                 f={(x) => 1/x} 
                 segments={[[-4, -0.1], [0.1, 4]]} range={[-4, 4]} 
                 color="#0ea5e9" xAxisTicks={[-1, 1]} yAxisTicks={[-1, 1]}
                 xAxisLabels={["-1", "1"]} yAxisLabels={["-1", "1"]}
                 asymptotesX={[0]} asymptotesY={[0]}
                 height={140}
               />
            </div>
            <p className="text-sm mt-3 text-gray-700">例如：<InlineMath math="y = x^{-1} = 1/x" />。圖形具有垂直與水平漸近線。</p>
          </div>

          <div className="concept-card diff-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#f43f5e', backgroundColor: '#fff1f2' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>分數 (<InlineMath math="a = 1/n" />)</h4>
            <div style={{ width: '100%' }}>
               <FunctionGraph 
                 f={(x) => Math.sqrt(x)} 
                 segments={[[0, 9]]} range={[-1, 3]} 
                 color="#f43f5e" xAxisTicks={[1, 4]} yAxisTicks={[1, 2]}
                 xAxisLabels={["1", "4"]} yAxisLabels={["1", "2"]}
                 height={140}
               />
            </div>
            <p className="text-sm mt-3 text-gray-700">例如：<InlineMath math="y = x^{1/2} = \sqrt{x}" />。定義域通常受限於非負實數。</p>
          </div>
        </div>
      </div>

      {/* ==========================================
          2.2 多項式函數
      ========================================== */}
      <div className="math-box mb-8 p-6 bg-pink-50 rounded-lg shadow-sm border border-pink-200">
        <h3 className="text-xl font-bold mb-3 text-pink-800">2.2 多項式函數 (Polynomial Functions)</h3>
        <p className="mb-4 text-gray-800">
          多項式函數是將多個非負整數次方的冪函數乘上係數後相加而成。它在微積分中因為「處處連續且處處可微」的良好性質而備受青睞。
        </p>

        <div className="bg-white p-4 rounded border border-pink-100 mb-4">
          <BlockMath math="P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0" />
          <p className="text-center text-sm text-gray-500 mt-2">其中 <InlineMath math="n" /> 為非負整數（稱為多項式的<b>次數</b>），而 <InlineMath math="a_i" /> 為實數係數（<InlineMath math="a_n \neq 0" />）。</p>
        </div>

        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 mb-4 p-4 bg-white rounded border border-pink-100">
          <li><strong>一次函數：</strong> <InlineMath math="P(x) = mx + b" />，圖形為一直線，<InlineMath math="m" /> 為斜率。</li>
          <li><strong>二次函數：</strong> <InlineMath math="P(x) = ax^2 + bx + c" />，圖形為拋物線。</li>
          <li><strong>高次函數：</strong> 次數大於或等於 3 的多項式，圖形會有多個轉折與波谷。</li>
        </ul>

      </div>
    </section>
  );
}
