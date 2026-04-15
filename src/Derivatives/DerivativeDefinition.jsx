// src/Derivatives/DerivativeDefinition.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function DerivativeDefinition() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-emerald-500 pb-2">1. 變化率與導數定義</h2>
      
      <p className="mb-4 text-gray-700">
        在進入嚴格的數學定義之前，讓我們先從一個日常生活的問題出發：<strong>如何測量「現在」這一瞬間的速度？</strong>
      </p>

      {/* 1.1 平均變化率 */}
      <div className="math-box mb-6 p-6 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100">
        <h3 className="text-xl font-bold mb-3 text-emerald-800">1.1 平均變化率 (Average Rate of Change)</h3>
        <p className="mb-4 text-gray-700">
          如果我們知道一輛車在下午 1:00 在里程碑 100 公里處，下午 3:00 在 200 公里處，我們可以很輕易地算出這兩小時內的平均速度：
          <span className="font-bold block text-center my-2">(200 - 100) / (3 - 1) = 50 公里/小時</span>
        </p>
        <p className="mb-2">
          在數學上，這相當於計算函數圖形上兩點之間的<strong>割線斜率 (Secant Line Slope)</strong>。給定兩點 <InlineMath math="(a, f(a))" /> 和 <InlineMath math="(x, f(x))" />，平均變化率為：
        </p>
        <div className="my-4 p-4 bg-white rounded border border-emerald-200">
          <BlockMath math="m_{sec} = \frac{\Delta y}{\Delta x} = \frac{f(x) - f(a)}{x - a}" />
        </div>
      </div>

      {/* 1.2 瞬時變化率與導數 */}
      <div className="math-box mb-6 p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-blue-800">1.2 瞬時變化率與導數 (The Derivative)</h3>
        <p className="mb-4 text-gray-700">
          如果我們想知道下午 2:00 「準確的那一瞬間」車速是多少呢？我們必須縮短測量的時間差。當時間差縮小到趨近於 0 時，我們就能得到瞬時速度。這正是我們在第二章學到的<strong>極限</strong>派上用場的時候！
        </p>
        <p className="mb-2">
          我們讓點 <InlineMath math="x" /> 無限逼近點 <InlineMath math="a" />（或者令距離 <InlineMath math="h = x - a" />，讓 <InlineMath math="h \to 0" />）。這時，割線會逼近成<strong>切線 (Tangent Line)</strong>。
        </p>
        
        <div className="my-4 p-4 bg-white rounded border border-blue-200">
          <strong className="block mb-2 text-gray-800">導數的正式定義：</strong>
          <p className="text-sm text-gray-600 mb-2">
            函數 <InlineMath math="f(x)" /> 在 <InlineMath math="x = a" /> 處的導數記為 <InlineMath math="f'(a)" />，定義為：
          </p>
          <BlockMath math="f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}" />
          <p className="mt-3 text-sm text-gray-600">
            如果這個極限存在，我們就說函數在該點是<strong>可微的 (differentiable)</strong>。
          </p>
        </div>
      </div>

      {/* 1.3 導數的寫法 */}
      <div className="math-box mb-6 p-6 bg-purple-50 rounded-lg shadow-sm border border-purple-100 mt-8">
        <h3 className="text-xl font-bold mb-3 text-purple-800">1.3 導數的寫法 (Notation of Derivatives)</h3>
        <p className="mb-4 text-gray-700">
          在微積分中，導數有多種常見的表示方式。它們由不同的數學家提出，適用於不同的情境：
        </p>
        <ul className="list-none space-y-4 text-gray-700">
          <li className="bg-white p-4 rounded border border-purple-200">
            <strong>拉格朗日符號 (Lagrange's notation)：</strong> 
            <p className="text-sm text-gray-600 my-1">最常見且簡潔的寫法，使用撇號。</p>
            <div className="mt-2 text-center text-lg"><InlineMath math="f'(x), \quad y'" /></div>
          </li>
          <li className="bg-white p-4 rounded border border-purple-200">
            <strong>萊布尼茲符號 (Leibniz's notation)：</strong> 
            <p className="text-sm text-gray-600 my-1">強調微小的變化量比例（<InlineMath math="dy" /> 與 <InlineMath math="dx" />），在連鎖律和積分計算中非常直觀。</p>
            {/* 這裡把 \frac 改成了 \dfrac，並加上 text-lg 讓字體再放大一點 */}
            <div className="mt-3 text-center text-lg"><InlineMath math="\dfrac{dy}{dx}, \quad \dfrac{d}{dx}f(x)" /></div>
          </li>
          <li className="bg-white p-4 rounded border border-purple-200">
            <strong>牛頓符號 (Newton's notation)：</strong> 
            <p className="text-sm text-gray-600 my-1">在變數上方加點，通常專門用於物理學中表示對「時間」的微分。</p>
            <div className="mt-2 text-center text-lg"><InlineMath math="\dot{y}, \quad \ddot{y}" /></div>
          </li>
          <li className="bg-white p-4 rounded border border-purple-200">
            <strong>尤拉符號 (Euler's notation)：</strong> 
            <p className="text-sm text-gray-600 my-1">將微分視為一個算子 (Operator) 作用在函數上。</p>
            <div className="mt-2 text-center text-lg"><InlineMath math="D_x y, \quad Df(x)" /></div>
          </li>
        </ul>
      </div>

    </section>
  );
}