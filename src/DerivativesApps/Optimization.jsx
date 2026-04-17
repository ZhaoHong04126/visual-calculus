// src/DerivativesApps/Optimization.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function Optimization() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-teal-500 pb-2">5. 最佳化問題 (Optimization Problems)</h2>
      
      <p className="mb-4 text-gray-700">
        最佳化是微分最廣泛的應用之一。無論是追求利潤極大化、成本極小化，還是尋找物理路徑的最短時間。
      </p>

      {/* 解題步驟 */}
      <div className="math-box mb-6 p-6 bg-teal-50 rounded-lg shadow-sm border border-teal-100">
        <h3 className="text-xl font-bold mb-3 text-teal-800">5.1 一般解題步驟</h3>
        <ol className="list-decimal ml-6 space-y-3 text-gray-700">
          <li><strong>理解問題：</strong> 標記已知條件，找出需要求極值的目標變數。</li>
          <li><strong>建立模型：</strong> 寫出目標函數與約束條件。</li>
          <li><strong>單一變數化：</strong> 利用約束條件將目標函數化為單一變數的函數。</li>
          <li><strong>求極值：</strong> 尋找臨界點並檢定（通常是在閉區間尋找絕對極值）。</li>
        </ol>
      </div>

      {/* 常見範例 */}
      <div className="math-box mb-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
        <h3 className="text-xl font-bold mb-3 text-gray-800">經典範例：最大面積</h3>
        <p className="text-gray-700 italic">
          「給定固定長度的圍籬，如何圍成一個面積最大的矩形？」
        </p>
        <p className="mt-2 text-sm text-gray-600">
          透過微分，我們可以證明在周長固定時，正方形的面積最大。
        </p>
      </div>
    </section>
  );
}
