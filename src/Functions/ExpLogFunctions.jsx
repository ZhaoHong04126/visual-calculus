// src/Functions/ExpLogFunctions.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function ExpLogFunctions() {
  return (
    <section className="subsection">
      <h2 className="section-title">2. 指數與對數函數 (Exponential and Logarithmic Functions)</h2>
      
      <p className="mb-4">
        指數函數與對數函數是微積分中最核心的超越函數。在探討它們的微積分性質之前，我們必須先釐清它們的代數定義與幾何行為。
      </p>

      {/* ==========================================
          2.1 指數函數的嚴格定義與推廣
      ========================================== */}
      <div className="math-box mb-6">
        <h3 className="text-xl font-bold mb-3 text-blue-800">2.1 指數函數的定義推廣</h3>
        <p className="mb-2">
          一般形式的指數函數定義為 <InlineMath settings={{ strict: false }} math="f(x) = a^x" />，其中底數 <InlineMath settings={{ strict: false }} math="a > 0" /> 且 <InlineMath settings={{ strict: false }} math="a \neq 1" />。為了確保這個函數在整個實數線上都是連續的，數學家是這樣逐步推廣次方的意義的：
        </p>

        <ul className="list-decimal list-inside mt-4 space-y-3 text-gray-800">
          <li><strong>正整數次方 (<InlineMath settings={{ strict: false }} math="n \in \mathbb{N}" />)：</strong> 連乘的概念。<br/>
            <span className="ml-6"><InlineMath settings={{ strict: false }} math="a^n = a \times a \times \dots \times a" /> (共 n 次)</span>
          </li>
          <li><strong>零與負整數次方：</strong><br/>
            <span className="ml-6"><InlineMath settings={{ strict: false }} math="a^0 = 1" />，且 <InlineMath settings={{ strict: false }} math="a^{-n} = \frac{1}{a^n}" /></span>
          </li>
          <li><strong>有理數次方 (<InlineMath settings={{ strict: false }} math="x = \frac{q}{p}" />)：</strong> 結合次方與開根號。<br/>
            <span className="ml-6"><InlineMath settings={{ strict: false }} math="a^{q/p} = \sqrt[p]{a^q} = (\sqrt[p]{a})^q" /></span>
          </li>
          <li><strong>無理數次方 (如 <InlineMath settings={{ strict: false }} math="x = \sqrt{3}" />)：</strong> 這是最關鍵的一步。我們利用有理數數列來逼近無理數（例如用 <InlineMath settings={{ strict: false }} math="1.7, 1.73, 1.732 \dots" /> 來逼近 <InlineMath settings={{ strict: false }} math="\sqrt{3}" />），再利用極限來定義 <InlineMath settings={{ strict: false }} math="a^{\sqrt{3}}" /> 的值。這保證了指數函數圖形沒有斷點。</li>
        </ul>
        
        <div className="mt-4 border-t pt-4">
          <strong>💡 指數運算法則 (Laws of Exponents)</strong>
          <p className="mt-2 text-sm">對於任意實數 <InlineMath settings={{ strict: false }} math="x, y" /> 與正底數 <InlineMath settings={{ strict: false }} math="a, b" />：</p>
          <div className="grid grid-cols-2 gap-4 mt-2 text-center bg-gray-50 p-4 rounded">
            <div><InlineMath settings={{ strict: false }} math="a^x \cdot a^y = a^{x+y}" /></div>
            <div><InlineMath settings={{ strict: false }} math="\frac{a^x}{a^y} = a^{x-y}" /></div>
            <div><InlineMath settings={{ strict: false }} math="(a^x)^y = a^{xy}" /></div>
            <div><InlineMath settings={{ strict: false }} math="(ab)^x = a^x b^x" /></div>
          </div>
        </div>
      </div>

      {/* ==========================================
          2.2 尤拉數 e 與自然對數 (保留先前的內容)
      ========================================== */}
      <h3 className="text-xl font-bold mt-8 mb-4 border-b pb-2">2.2 尤拉數 $e$ 與自然對數</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-bold text-gray-800 mb-2">神奇的數字 $e \approx 2.71828...$</h4>
          <p className="text-sm mb-2">
            在所有的底數中，當底數 <InlineMath settings={{ strict: false }} math="a" /> 使得過點 <InlineMath settings={{ strict: false }} math="(0, 1)" /> 的切線斜率恰好等於 1 時，這個特定的底數就定義為 <InlineMath settings={{ strict: false }} math="e" />。
          </p>
          <p className="text-sm">
            我們也可以透過極限嚴格定義它：
          </p>
          <BlockMath settings={{ strict: false }} math="e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n" />
        </div>

        <div className="bg-white p-4 rounded border border-gray-200">
          <h4 className="font-bold text-gray-800 mb-2">自然對數 ($\ln$)</h4>
          <p className="text-sm mb-2">
            以 <InlineMath settings={{ strict: false }} math="e" /> 為底的對數函數稱為自然對數，記為 <InlineMath settings={{ strict: false }} math="\ln x" />。它是 <InlineMath settings={{ strict: false }} math="e^x" /> 的反函數。
          </p>
          <BlockMath settings={{ strict: false }} math="\ln x = \log_e x" />
          <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
            <li>對消性質：<InlineMath settings={{ strict: false }} math="\ln(e^x) = x" /> 且 <InlineMath settings={{ strict: false }} math="e^{\ln x} = x" /></li>
          </ul>
        </div>
      </div>

    </section>
  );
}