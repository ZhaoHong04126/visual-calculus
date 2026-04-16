// src/Functions/WhatIsAFunction.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function WhatIsAFunction() {
  return (
    <section className="subsection">
      <h2 className="section-title">1. 何謂函數 ? (What is a Function?)</h2>
      
      <p className="mb-6 text-gray-700">
        在探討微積分之前，我們必須先釐清「函數」這個核心工具。它不僅僅是一個公式，更是一個描述「輸入點」與「輸出點」之間唯一性關係的結構。
      </p>

      {/* 1.1 現代定義 */}
      <div className="math-box mb-8 p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-200">
        <h3 className="text-xl font-bold mb-4 text-blue-800">1.1 函數的現代定義 (Modern Definition)</h3>
        <p className="mb-4 text-gray-800">
          函數將一個定義域中的每一個元素，恰好對應到另一個對應域中的唯一一個元素。
        </p>
        
        <div className="bg-white p-4 rounded border border-blue-100 mb-6">
          <p className="text-center font-semibold mb-2 text-gray-700">數學記號：</p>
          <BlockMath math="f: A \to B" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow-sm border border-blue-100">
            <h4 className="font-bold text-blue-700 mb-2 underline">定義域 (Domain)</h4>
            <p className="text-xs text-gray-600">所有可能輸入值 <InlineMath math="x" /> 的集合。</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm border border-blue-100">
            <h4 className="font-bold text-blue-700 mb-2 underline">對應域 (Codomain)</h4>
            <p className="text-xs text-gray-600">可能的輸出值所在的目標集合。</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm border border-blue-100">
            <h4 className="font-bold text-blue-700 mb-2 underline">值域 (Range)</h4>
            <p className="text-xs text-gray-600">實際輸出值 <InlineMath math="f(x)" /> 的集合。</p>
          </div>
        </div>
      </div>

      {/* 1.2 歷史背景 */}
      <div className="math-box mb-12 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-4 text-gray-800">1.2 歷史背景與命名的由來</h3>
        <blockquote className="border-l-4 border-gray-400 pl-4 py-2 italic text-gray-700 bg-white rounded mb-4">
          「凡此變數中函（包含）彼變數者，則此為彼之函數。」 —— 李善蘭 (1859)
        </blockquote>
        <p className="text-sm text-gray-600 leading-relaxed">
          這是我國數學家譯自英文「Function」。在西方，歐拉 (Euler) 首先強調了函數作為解析式的概念，而後迪利克雷 (Dirichlet) 給出了更廣義的對應定義。
        </p>
      </div>

      {/* 1.3 函數分類 */}
      <div className="math-box mb-8 p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-slate-800">1.3 函數的詳細分類 (Classification of Functions)</h3>
        <p className="mb-6 text-gray-700">
          函數可以根據其不同的數學性質進行多樣化的分類。掌握這些分類有助於我們在微積分中快速判斷函數的行為與特徵：
        </p>

        {/* 1.3.1 奇偶性 */}
        <h4 className="font-bold text-lg text-slate-700 mb-2">1.3.1 奇偶性 (Symmetry)</h4>
        <div className="concept-grid">
          <div className="concept-card diff-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>偶函數 (Even Function)</h4>
            <div style={{ width: '100%', marginBottom: '1rem' }} className="flex justify-center p-3 bg-white rounded border border-green-100">
              <BlockMath math="f(-x) = f(x)" />
            </div>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1 w-full text-left text-gray-700">
              <li><strong>圖形特徵：</strong> 關於 <InlineMath math="y" /> 軸對稱</li>
              <li><strong>常見範例：</strong> <InlineMath math="x^2, \cos x, |x|" /></li>
            </ul>
          </div>
          <div className="concept-card int-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>奇函數 (Odd Function)</h4>
            <div style={{ width: '100%', marginBottom: '1rem' }} className="flex justify-center p-3 bg-white rounded border border-blue-100">
              <BlockMath math="f(-x) = -f(x)" />
            </div>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1 w-full text-left text-gray-700">
              <li><strong>圖形特徵：</strong> 關於原點對稱</li>
              <li><strong>常見範例：</strong> <InlineMath math="x^3, \sin x, \tan x" /></li>
            </ul>
          </div>
        </div>

        {/* 1.3.2 連續性 */}
        <h4 className="font-bold text-lg text-slate-700 mb-2 mt-8">1.3.2 連續函數與不連續函數 (Continuity)</h4>
        <div className="concept-grid">
          <div className="concept-card" style={{ borderLeft: '4px solid #ef4444', backgroundColor: '#fef2f2', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>連續的嚴格定義</h4>
            <div style={{ width: '100%', marginBottom: '0.5rem' }} className="flex justify-center p-3 bg-white rounded border border-red-100">
              <BlockMath math="\lim_{x \to a} f(x) = f(a)" />
            </div>
            <p className="text-sm text-gray-700 text-left w-full mt-2">
              若在定義域的上一點，其<strong>左極限</strong>、<strong>右極限</strong>皆等於該點的<strong>函數值</strong>，則稱函數在該點連續。若圖形出現跳躍、空心點或趨近無窮大即為不連續。
            </p>
          </div>
        </div>

        {/* 1.3.3 單調性 */}
        <h4 className="font-bold text-lg text-slate-700 mb-2 mt-8">1.3.3 單調函數 (Monotonicity)</h4>
        <div className="concept-grid">
          <div className="concept-card diff-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#f97316', backgroundColor: '#fff7ed' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>遞增函數 (Increasing)</h4>
            <div style={{ width: '100%', marginBottom: '1rem' }} className="flex justify-center p-3 bg-white rounded border border-orange-100">
              <BlockMath math="x_1 < x_2 \implies f(x_1) \le f(x_2)" />
            </div>
            <p className="text-sm text-gray-700 text-left w-full">圖形總是向上或持平，不會向下掉。</p>
          </div>
          <div className="concept-card int-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#a855f7', backgroundColor: '#faf5ff' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>遞減函數 (Decreasing)</h4>
            <div style={{ width: '100%', marginBottom: '1rem' }} className="flex justify-center p-3 bg-white rounded border border-purple-100">
              <BlockMath math="x_1 < x_2 \implies f(x_1) \ge f(x_2)" />
            </div>
            <p className="text-sm text-gray-700 text-left w-full">圖形總是向下或持平，不會向上升。</p>
          </div>
        </div>

        {/* 1.3.4 數域與量綱 */}
        <h4 className="font-bold text-lg text-slate-700 mb-2 mt-8">1.3.4 數域與量綱 (Number Domain & Dimension)</h4>
        <div className="concept-grid">
          <div className="concept-card diff-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#ec4899', backgroundColor: '#fdf2f8' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>實函數 vs 複函數</h4>
            <ul className="list-disc list-inside mt-2 text-sm space-y-2 w-full text-left text-gray-700">
              <li><strong>實函數 (Real)：</strong> <InlineMath math="f(x) \subset \mathbb{R}" />，輸出必為實數。</li>
              <li><strong>複函數 (Complex)：</strong> <InlineMath math="f(z) \subset \mathbb{C}" />，輸出可含虛數單位。</li>
            </ul>
          </div>
          <div className="concept-card int-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#14b8a6', backgroundColor: '#f0fdfa' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>純量函數 vs 向量函數</h4>
            <ul className="list-disc list-inside mt-2 text-sm space-y-2 w-full text-left text-gray-700">
              <li><strong>純量函數：</strong> 輸出為單一數值 (Scalar)。</li>
              <li><strong>向量函數：</strong> 輸出為方向向量 (如 <InlineMath math="\vec{r}(t)" />)。</li>
            </ul>
          </div>
        </div>

        {/* 1.3.5 構造分類 */}
        <h4 className="font-bold text-lg text-slate-700 mb-2 mt-8">1.3.5 構造分類 (Construction)</h4>
        <div className="concept-grid">
          <div className="concept-card diff-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#eab308', backgroundColor: '#fefce8' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>代數函數 (Algebraic)</h4>
            <p className="text-sm text-gray-700 text-left w-full">
              可經由有限次加、減、乘、除、開方等代數運算得到的函數。
            </p>
            <ul className="list-disc list-inside mt-3 text-sm space-y-1 w-full text-left text-gray-500">
              <li>多項式 <InlineMath math="P(x)" /></li>
              <li>有理函數 <InlineMath math="\frac{P(x)}{Q(x)}" /></li>
              <li>根式函數 <InlineMath math="\sqrt{x}" /></li>
            </ul>
          </div>
          <div className="concept-card int-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderColor: '#ef4444', backgroundColor: '#fef2f2' }}>
            <h4 style={{ fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>超越函數 (Transcendental)</h4>
            <p className="text-sm text-gray-700 text-left w-full">
              不滿足任何以多項式為係數的代數方程的函數，微積分中極為常見。
            </p>
            <ul className="list-disc list-inside mt-3 text-sm space-y-1 w-full text-left text-gray-500">
              <li>三角與反三角 <InlineMath math="\sin x, \arctan x" /></li>
              <li>指數與對數 <InlineMath math="e^x, \ln x" /></li>
              <li>雙曲與反雙曲函數</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-8"></div>

      <div className="math-box p-6 bg-yellow-50 rounded-lg shadow-sm border border-yellow-200">
        <h3 className="text-xl font-bold mb-3 text-yellow-800">💡 核心要點：唯一性 test</h3>
        <p className="text-gray-800">
          判斷一個關係是否為函數的關鍵在於：<strong>每一個輸入點只能有一個對應的輸出點</strong>。
          這在幾何上可以通過「垂直線檢驗法 (Vertical Line Test)」來判斷：
          若任何垂直線與圖形的交點都不超過一個，則該圖形代表一個函數。
        </p>
      </div>
    </section>
  );
}
