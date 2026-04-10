// src/Functions/InverseFunctions.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function InverseFunctions() {
  return (
    <section className="subsection">
      <h2 className="section-title">1. 反函數 (Inverse Functions)</h2>

      <p className="mb-4">
        在探討指數與反三角函數之前，我們必須先了解「反函數」的核心概念。簡單來說，反函數的作用是「將原本函數的對應關係反推回去」。但我們必須先確認，這個反推的關係，是否仍然是一個合理的函數？
      </p>

      {/* 1. 一對一函數 */}
      <div className="math-box">
        <strong>一對一函數 (One-to-One, 1-1)</strong>
        <p className="mt-2">
          並非所有函數都有反函數。一個函數必須滿足「不同的輸入值，必定對應到不同的輸出值」，我們才稱之為一對一函數。這也是函數具備反函數的<strong>先決條件</strong>。
        </p>
        <BlockMath settings={{ strict: false }} math="x_1 \neq x_2 \implies f(x_1) \neq f(x_2)" />

        <div className="mt-4 p-4 bg-gray-50 border-l-4 border-gray-400">
          <strong>📝 檢驗與證明方式</strong>
          <ul className="list-disc list-inside mt-2 text-sm leading-relaxed">
            <li><strong>代數證明：</strong> 若假設 <InlineMath settings={{ strict: false }} math="f(x_1) = f(x_2)" />，且能推導出唯一結果 <InlineMath settings={{ strict: false }} math="x_1 = x_2" />，則該函數為一對一。</li>
            <li><strong>水平線檢驗法 (Horizontal Line Test)：</strong> 在圖形上，若沒有任何一條水平線與函數圖形相交超過一次，則該函數為一對一。此方法適合直觀判斷。</li>
          </ul>
        </div>
      </div>

      {/* 2. 反函數的定義 */}
      <div className="math-box mt-6">
        <strong>反函數的嚴格定義</strong>
        <p className="mt-2">
          若 <InlineMath settings={{ strict: false }} math="f" /> 是一對一函數，其定義域為 <InlineMath settings={{ strict: false }} math="A" />，值域為 <InlineMath settings={{ strict: false }} math="B" />。則其反函數記為 <InlineMath settings={{ strict: false }} math="f^{-1}" />，此時定義域與值域會互換（定義域變成 <InlineMath settings={{ strict: false }} math="B" />，值域變成 <InlineMath settings={{ strict: false }} math="A" />），且滿足：
        </p>
        <BlockMath settings={{ strict: false }} math="f^{-1}(y) = x \iff f(x) = y \quad (\text{對於所有 } y \in B)" />
        <p className="text-sm text-red-600 font-bold mt-2">
          ⚠️ 注意符號：<InlineMath settings={{ strict: false }} math="f^{-1}(x)" /> 代表的是反函數，絕對不等於函數的倒數 <InlineMath settings={{ strict: false }} math="\frac{1}{f(x)}" />。
        </p>

        <div className="mt-4 border-t pt-4">
          <strong>💡 反函數的對消性質 (Cancellation Equations)</strong>
          <p className="mt-2 text-sm text-gray-700">
            將函數與其反函數互相代入，會抵消彼此的作用，還原成原本的輸入值：
          </p>
          <BlockMath settings={{ strict: false }} math="f^{-1}(f(x)) = x \quad (\text{對於所有 } x \in A)" />
          <BlockMath settings={{ strict: false }} math="f(f^{-1}(y)) = y \quad (\text{對於所有 } y \in B)" />
        </div>
      </div>

    </section>
  );
}