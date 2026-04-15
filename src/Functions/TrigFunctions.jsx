// src/Functions/TrigFunctions.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import FunctionGraph from '../components/FunctionGraph';

export default function TrigFunctions() {
  return (
    <section className="subsection">
      <h2 className="section-title">1. 三角函數 (Trigonometric Functions)</h2>
      <p className="mb-4">
        三角函數是微積分中極為重要的基礎，它們用來描述週期性變化，如波動、圓周運動等。
        最常見的基本三角函數有正弦 (Sine) 與餘弦 (Cosine)。
      </p>

      <div className="math-box mb-8 p-6 bg-red-50 rounded-lg shadow-sm border border-red-200">
        <h3 className="text-xl font-bold mb-4 text-red-800">1.1 六大基本三角函數</h3>
        <p className="mb-4 text-gray-800">
          在單位圓上，對於任意實數 <InlineMath math="\theta" />，對應的點座標定義了基本函數 <InlineMath math="\cos \theta" /> 與 <InlineMath math="\sin \theta" />。
          其餘四個三角函數皆可由這兩者推導定義：<InlineMath math="\tan \theta = \frac{\sin \theta}{\cos \theta}" />、<InlineMath math="\cot \theta = \frac{\cos \theta}{\sin \theta}" />、<InlineMath math="\sec \theta = \frac{1}{\cos \theta}" /> 以及 <InlineMath math="\csc \theta = \frac{1}{\sin \theta}" />。
        </p>

        {/* Row 1: Sine & Cosine */}
        <div className="concept-grid mt-4">
          <div className="concept-card diff-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>正弦函數 (<InlineMath math="y = \sin x" />)</h4>
            <div style={{ width: '100%' }}>
               <FunctionGraph 
                 f={(x) => Math.sin(x)} 
                 segments={[[-2*Math.PI, 2*Math.PI]]} range={[-1.5, 1.5]} 
                 color="#ef4444" xAxisTicks={[-Math.PI, Math.PI]} yAxisTicks={[-1, 1]}
                 xAxisLabels={["-π", "π"]} yAxisLabels={["-1", "1"]}
                 height={140}
               />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1 w-full text-left text-gray-700">
              <li><strong>定義域：</strong> <InlineMath math="\mathbb{R}" /></li>
              <li><strong>值域：</strong> <InlineMath math="[-1, 1]" /></li>
              <li><strong>週期：</strong> <InlineMath math="2\pi" /> (奇函數)</li>
            </ul>
          </div>
          <div className="concept-card int-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>餘弦函數 (<InlineMath math="y = \cos x" />)</h4>
            <div style={{ width: '100%' }}>
               <FunctionGraph 
                 f={(x) => Math.cos(x)} 
                 segments={[[-2*Math.PI, 2*Math.PI]]} range={[-1.5, 1.5]} 
                 color="#0ea5e9" xAxisTicks={[-Math.PI, Math.PI]} yAxisTicks={[-1, 1]}
                 xAxisLabels={["-π", "π"]} yAxisLabels={["-1", "1"]}
                 height={140}
               />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1 w-full text-left text-gray-700">
              <li><strong>定義域：</strong> <InlineMath math="\mathbb{R}" /></li>
              <li><strong>值域：</strong> <InlineMath math="[-1, 1]" /></li>
              <li><strong>週期：</strong> <InlineMath math="2\pi" /> (偶函數)</li>
            </ul>
          </div>
        </div>

        {/* Row 2: Tangent & Cotangent */}
        <div className="concept-grid mt-4">
          <div className="concept-card diff-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#f97316', backgroundColor: '#fff7ed' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>正切函數 (<InlineMath math="y = \tan x" />)</h4>
            <div style={{ width: '100%' }}>
               <FunctionGraph 
                 f={(x) => Math.tan(x)} 
                 segments={[[-4.6, -1.67], [-1.47, 1.47], [1.67, 4.6]]} range={[-3, 3]} 
                 color="#f97316" xAxisTicks={[-Math.PI, Math.PI]} yAxisTicks={[]}
                 xAxisLabels={["-π", "π"]} yAxisLabels={[]}
                 asymptotesX={[-Math.PI/2, Math.PI/2, -3*Math.PI/2, 3*Math.PI/2]}
                 height={140}
               />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1 w-full text-left text-gray-700">
              <li><strong>定義域：</strong> <InlineMath math="x \neq \frac{\pi}{2} + n\pi" /></li>
              <li><strong>值域：</strong> <InlineMath math="\mathbb{R}" /></li>
              <li><strong>週期：</strong> <InlineMath math="\pi" /></li>
            </ul>
          </div>
          <div className="concept-card int-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#a855f7', backgroundColor: '#faf5ff' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>餘切函數 (<InlineMath math="y = \cot x" />)</h4>
            <div style={{ width: '100%' }}>
               <FunctionGraph 
                 f={(x) => 1/Math.tan(x)} 
                 segments={[[-6.18, -3.24], [-3.04, -0.1], [0.1, 3.04], [3.24, 6.18]]} range={[-3, 3]} 
                 color="#a855f7" xAxisTicks={[-Math.PI/2, Math.PI/2]} yAxisTicks={[]}
                 xAxisLabels={["-π/2", "π/2"]} yAxisLabels={[]}
                 asymptotesX={[-Math.PI, 0, Math.PI, -2*Math.PI, 2*Math.PI]}
                 height={140}
               />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1 w-full text-left text-gray-700">
              <li><strong>定義域：</strong> <InlineMath math="x \neq n\pi" /></li>
              <li><strong>值域：</strong> <InlineMath math="\mathbb{R}" /></li>
              <li><strong>週期：</strong> <InlineMath math="\pi" /></li>
            </ul>
          </div>
        </div>

        {/* Row 3: Secant & Cosecant */}
        <div className="concept-grid mt-4">
          <div className="concept-card diff-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#ec4899', backgroundColor: '#fdf2f8' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>正割函數 (<InlineMath math="y = \sec x" />)</h4>
            <div style={{ width: '100%' }}>
               <FunctionGraph 
                 f={(x) => 1/Math.cos(x)} 
                 segments={[[-4.6, -1.67], [-1.47, 1.47], [1.67, 4.6]]} range={[-3, 3]} 
                 color="#ec4899" xAxisTicks={[-Math.PI, Math.PI]} yAxisTicks={[-1, 1]}
                 xAxisLabels={["-π", "π"]} yAxisLabels={["-1", "1"]}
                 asymptotesX={[-Math.PI/2, Math.PI/2, -3*Math.PI/2, 3*Math.PI/2]}
                 height={140}
               />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1 w-full text-left text-gray-700">
              <li><strong>定義域：</strong> <InlineMath math="x \neq \frac{\pi}{2} + n\pi" /></li>
              <li><strong>值域：</strong> <InlineMath math="|y| \geq 1" /></li>
              <li><strong>週期：</strong> <InlineMath math="2\pi" /></li>
            </ul>
          </div>
          <div className="concept-card int-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#14b8a6', backgroundColor: '#f0fdfa' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>餘割函數 (<InlineMath math="y = \csc x" />)</h4>
            <div style={{ width: '100%' }}>
               <FunctionGraph 
                 f={(x) => 1/Math.sin(x)} 
                 segments={[[-6.18, -3.24], [-3.04, -0.1], [0.1, 3.04], [3.24, 6.18]]} range={[-3, 3]} 
                 color="#14b8a6" xAxisTicks={[-Math.PI/2, Math.PI/2]} yAxisTicks={[-1, 1]}
                 xAxisLabels={["-π/2", "π/2"]} yAxisLabels={["-1", "1"]}
                 asymptotesX={[-Math.PI, 0, Math.PI, -2*Math.PI, 2*Math.PI]}
                 height={140}
               />
            </div>
            <ul className="list-disc list-inside mt-4 text-sm space-y-1 w-full text-left text-gray-700">
              <li><strong>定義域：</strong> <InlineMath math="x \neq n\pi" /></li>
              <li><strong>值域：</strong> <InlineMath math="|y| \geq 1" /></li>
              <li><strong>週期：</strong> <InlineMath math="2\pi" /></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
