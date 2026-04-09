// src/Introduction/WhatIsCalculus.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function WhatIsCalculus() {
  return (
    <section className="subsection">
      <h2 className="section-title">1. 何謂微積分？</h2>
      
      <p className="mb-4">
        微積分（Calculus）是探討「變化」的數學工具。在廣泛的應用科學（如物理、資訊、工程、經濟與管理）中，我們經常需要處理動態變化的系統，而微積分正是解決這些問題的核心基石。簡單來說，微積分可以分為兩大分支：<strong>微分（Differentiation）</strong>與<strong>積分（Integration）</strong>。
      </p>

      <div className="concept-grid">
        {/* 微分區塊 */}
        <div className="concept-card diff-card">
          <h3 className="text-xl font-bold mb-2">微分 (Differentiation)</h3>
          <p>
            微分專注於函數在「<strong>局部（某一點）</strong>」的性質。它幫助我們了解函數在特定瞬間的變化率。
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>幾何意義：曲線的<strong>切線斜率</strong>。</li>
            <li>物理意義：瞬時速度、加速度。</li>
            <li>分析意義：判斷函數遞增或遞減的趨勢。</li>
          </ul>
        </div>

        {/* 積分區塊 */}
        <div className="concept-card int-card">
          <h3 className="text-xl font-bold mb-2">積分 (Integration)</h3>
          <p>
            積分則是探討函數在一段區間內的「<strong>整體（累積）</strong>」狀況。它幫助我們計算連續變化的總和。
          </p>
          <ul className="mt-2 list-disc list-inside">
            <li>幾何意義：曲線下的<strong>面積</strong>、體積、弧長。</li>
            <li>物理意義：位移（速度的累積）、作功。</li>
          </ul>
        </div>
      </div>

      <div className="math-box mt-8">
        <strong>微積分的關聯性（微積分基本定理的雛形）：</strong>
        <p className="mt-2">
          微分與積分看似探討不同的幾何現象（切線與面積），但實際上它們是一體的兩面，互為反運算。
        </p>
        <p>
          我們可以透過一個極為基礎的函數來觀察這個奇妙的關聯：考慮常數函數 <InlineMath math="f(x) = 1" />。
        </p>
        <ul className="mt-2 ml-4 list-disc">
          <li><strong>從積分看：</strong> <InlineMath math="f(x) = 1" /> 在區間 <InlineMath math="[0, x]" /> 下累積的矩形面積為 <InlineMath math="1 \times x = x" />。我們令這個面積函數為 <InlineMath math="F(x) = x" />。</li>
          <li><strong>從微分看：</strong> 現在觀察面積函數 <InlineMath math="F(x) = x" />，這是一條斜率恆為 <InlineMath math="1" /> 的直線。</li>
        </ul>
        <p className="mt-4">
          也就是說，「函數 <InlineMath math="f(x)" /> 的累積面積」求導（微分）後，剛好會變回原本的函數 <InlineMath math="f(x)" />。這正是貫穿整個學科的核心思想。
        </p>
      </div>
    </section>
  );
}