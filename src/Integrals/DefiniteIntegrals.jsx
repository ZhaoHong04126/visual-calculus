// src/Integrals/DefiniteIntegrals.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function DefiniteIntegrals() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-emerald-500 pb-2">1. 黎曼和與定積分</h2>

      <p className="mb-4 text-gray-700">
        如果說微分是在研究「瞬間的變化」，那麼積分的核心問題就是：<strong>如何計算一個不規則圖形下的累積面積？</strong>
      </p>

      {/* 1.1 黎曼和的概念 */}
      <div className="math-box mb-6 p-6 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100">
        <h3 className="text-xl font-bold mb-3 text-emerald-800">1.1 黎曼和 (Riemann Sum)</h3>

        {/* 筆記中的核心思維 */}
        <div className="mb-6 p-4 bg-white/80 rounded-lg border-l-4 border-emerald-500 shadow-sm">
          <h4 className="font-bold text-emerald-900 mb-2">💡 核心思維：逼近法 (Approximation)</h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            給定一個函數 <InlineMath math="f: [a, b] \to \mathbb{R}" /> 且 <InlineMath math="f \ge 0" />。由於大多數函數圖形是不規則的，我們無法直接套用幾何公式。
          </p>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            <strong>我們的策略：</strong> 用「好算、熟悉」的圖形來逼近。雖然用梯形看起來更精準，但考慮到計算的簡便性，我們選擇用<strong>長方形</strong>來估計，最後再利用<strong>夾擠定理 (Squeeze Theorem)</strong> 求得精確面積。
          </p>
        </div>

        <p className="mb-4 text-gray-700">
          具體做法是將區間切割成 <InlineMath math="n" /> 個等寬的小矩形：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-white rounded border border-emerald-200 text-sm">
            <strong className="text-emerald-700">1. 切割區間：</strong>
            <p>將 <InlineMath math="[a, b]" /> 分成 <InlineMath math="n" /> 段，每段寬度為：</p>
            <BlockMath math="\Delta x = \frac{b - a}{n}" />
          </div>
          <div className="p-4 bg-white rounded border border-emerald-200 text-sm">
            <strong className="text-emerald-700">2. 樣本點取樣：</strong>
            <p>在每個子區間內任取一點 <InlineMath math="x_i^*" /> 作為矩形的高。</p>
          </div>
        </div>

        <p className="mb-2 text-gray-700 font-medium">將這些矩形面積加總，即得到黎曼和：</p>
        <div className="my-4 p-4 bg-white rounded border border-emerald-300">
          <BlockMath math="S_n = \sum_{i=1}^{n} f(x_i^*) \Delta x" />
        </div>

        {/* 筆記中的 Remark 13 */}
        <div className="mt-4 p-3 bg-emerald-100/50 rounded border-l-4 border-emerald-400 text-sm text-emerald-900">
          <strong>💡 備註：</strong> 上述的有限項加總 <InlineMath math="\sum_{i=1}^{n} f(x_i^*)\Delta x" /> 稱為<strong>黎曼和 (Riemann Sum)</strong>。請注意，此時尚未取極限。
        </div>
      </div>

      {/* 1.2 Sigma 運算性質與公式 */}
      <div className="math-box mb-6 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-200 mt-8">
        <h3 className="text-xl font-bold mb-3 text-slate-800">1.2 Sigma ($\sum$) 運算性質與常用公式</h3>
        <p className="mb-4 text-gray-700 text-sm">
          在實際計算黎曼和時，我們經常需要使用以下 Sigma 符號的性質與求和公式：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 性質部分 */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-700 border-b pb-1">運算性質</h4>
            <ul className="space-y-3 text-sm">
              <li>1. <InlineMath math="\sum_{i=1}^{n} c = cn" /> <span className="text-gray-400 text-xs ml-2">(c 為常數)</span></li>
              <li>2. <InlineMath math="\sum_{i=1}^{n} ca_i = c \sum_{i=1}^{n} a_i" /></li>
              <li>3. <InlineMath math="\sum_{i=1}^{n} (a_i \pm b_i) = \sum_{i=1}^{n} a_i \pm \sum_{i=1}^{n} b_i" /></li>
            </ul>
          </div>

          {/* 公式部分 - 改為靠左對齊 */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-700 border-b pb-1">常用公式</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-slate-100">
                <InlineMath math="\sum_{i=1}^{n} i = \frac{n(n+1)}{2}" />
              </div>
              <div className="bg-white p-3 rounded border border-slate-100">
                <InlineMath math="\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}" />
              </div>
              <div className="bg-white p-3 rounded border border-slate-100">
                <InlineMath math="\sum_{i=1}^{n} i^3 = \left[ \frac{n(n+1)}{2} \right]^2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1.3 定積分的定義 */}
      <div className="math-box mb-6 p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-blue-800">1.3 定積分 (The Definite Integral)</h3>
        <p className="mb-4 text-gray-700">
          當切割的數量 <InlineMath math="n" /> 趨向無限大（即寬度 <InlineMath math="\Delta x" /> 趨向於 0）時，矩形的加總就會精確地等於曲線下的面積：
        </p>

        <div className="theorem-box bg-blue-100/50 border-blue-200 text-blue-900 mb-4">
          <strong>定義：</strong> 透過黎曼和取極限所定義出的積分稱為 <strong>黎曼積分 (Riemann Integral)</strong>：
          <BlockMath math="\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x" />
        </div>

        {/* 筆記中的 Remark 12 */}
        <div className="mt-6 p-4 bg-white/60 rounded-md border border-blue-200">
          <h4 className="font-bold text-blue-900 mb-2">💡 備註：積分變數的替換</h4>
          <p className="text-sm text-gray-700">
            定積分 <InlineMath math="\int_a^b f(x) \, dx" /> 的結果是一個固定的<strong>數值</strong>，與變數所使用的字母無關。您可以將 <InlineMath math="x" /> 換成任何字母，只要同步更換即可：
          </p>
          <div className="py-2 text-center">
            <InlineMath math="\int_a^b f(x) \, dx = \int_a^b f(u) \, du = \int_a^b f(y) \, dy" />
          </div>
        </div>
      </div>

      {/* 1.4 定積分的性質 */}
      <div className="example-box mt-8 border-t-4 border-blue-500 shadow-md">
        <h3 className="example-title text-xl font-bold text-blue-900 mb-6">1.4 定積分的幾何性質</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <strong className="text-blue-800">1. 線性性質 (Linearity)：</strong>
            <BlockMath math="\int_a^b [cf(x) + g(x)] \, dx = c\int_a^b f(x) \, dx + \int_a^b g(x) \, dx" />
          </div>
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <strong className="text-blue-800">2. 區間加成性 (Additivity)：</strong>
            <BlockMath math="\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx" />
          </div>
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            <strong className="text-blue-800">3. 方向與範圍性質：</strong>
            <div className="flex justify-around flex-wrap gap-4 mt-2">
              <InlineMath math="\int_a^a f(x) \, dx = 0" />
              <InlineMath math="\int_b^a f(x) \, dx = -\int_a^b f(x) \, dx" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
