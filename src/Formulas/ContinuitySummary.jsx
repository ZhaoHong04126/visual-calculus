import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function ContinuitySummary() {
  return (
    <div className="section-content">
      <h2 id="continuity-summary" className="section-title text-2xl font-bold mb-4 border-b-2 border-teal-500 pb-2">
        2. 連續與重要定理 (Continuity & Theorems)
      </h2>

      {/* 2.1 連續判定 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-teal-800">2.1 連續的判定 (Definition)</h3>
        <p className="mb-4 text-sm text-gray-700">
          函數 <InlineMath math="f(x)" /> 在點 <InlineMath math="x = a" /> 處連續，必須滿足：
        </p>
        <div className="py-2 flex flex-col items-center">
          <BlockMath math="\lim_{x \to a} f(x) = f(a)" />
          <p className="mt-4 text-xs text-teal-700 italic">意即：函數值存在、極限存在，且兩者相等。</p>
        </div>
      </div>

      {/* 2.2 不連續種類 */}
      <h3 className="text-xl font-bold mb-4 text-teal-800">2.2 不連續點的種類 (Discontinuity)</h3>
      <div className="formula-container mb-8">
        <table className="formula-table">
          <thead>
            <tr>
              <th style={{ width: '150px' }}>種類</th>
              <th>特徵說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>可移除 (Removable)</td>
              <td>極限存在，但極限值 <InlineMath math="\neq f(a)" /> 或 <InlineMath math="f(a)" /> 無定義。</td>
            </tr>
            <tr>
              <td>跳躍 (Jump)</td>
              <td>左、右極限均存在，但相互不相等（<InlineMath math="L^- \neq L^+" />）。</td>
            </tr>
            <tr>
              <td>無窮 (Infinite)</td>
              <td>極限趨近於 <InlineMath math="\pm \infty" />（通常發生在垂直漸近線）。</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2.3 重要定理 */}
      <h3 className="text-xl font-bold mb-4 text-teal-800">2.3 連續函數的高級定理 (Theorems)</h3>
      <div className="formula-container mb-8">
        <table className="formula-table">
          <thead>
            <tr>
              <th style={{ width: '150px' }}>定理名稱</th>
              <th>內容簡述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>中間值定理 (IVT)</td>
              <td className="text-sm">
                若 <InlineMath math="f" /> 在 <InlineMath math="[a,b]" /> 連續，且 <InlineMath math="f(a) \neq f(b)" />，則對於介於之間的任何 <InlineMath math="N" />，至少存在一 <InlineMath math="c \in (a,b)" /> 使得 <InlineMath math="f(c) = N" />。
              </td>
            </tr>
            <tr>
              <td>勘根定理</td>
              <td className="text-sm">
                若 <InlineMath math="f" /> 在 <InlineMath math="[a,b]" /> 連續，且 <InlineMath math="f(a) \cdot f(b) < 0" />，則至少存在一根 <InlineMath math="c \in (a,b)" /> 滿足 <InlineMath math="f(c) = 0" />。
              </td>
            </tr>
            <tr>
              <td>極值定理 (EVT)</td>
              <td className="text-sm">
                若 <InlineMath math="f" /> 在閉區間 <InlineMath math="[a,b]" /> 連續，則 <InlineMath math="f" /> 在該區間內必有最大值與最小值。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
