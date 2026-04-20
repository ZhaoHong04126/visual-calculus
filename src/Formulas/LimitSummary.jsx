import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';

export default function LimitSummary() {
  return (
    <div className="section-content">
      <h2 id="limit-summary" className="section-title text-2xl font-bold mb-4 border-b-2 border-indigo-500 pb-2">
        1. 極限公式整理 (Limit Formulas)
      </h2>

      {/* 2.1 極限運算法則 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-indigo-800">1.1 極限運算法則 (Limit Laws)</h3>
        <p className="mb-4 text-sm text-gray-700">
          若 <InlineMath math="\lim_{x \to a} f(x) = L" /> 與 <InlineMath math="\lim_{x \to a} g(x) = M" /> 均存在，則：
        </p>
        <div className="formula-container">
          <table className="formula-table">
            <thead>
              <tr>
                <th style={{ width: '150px' }}>法則名稱</th>
                <th>公式內容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>和差法則</td>
                <td className="math-cell pt-4 pb-4">
                  <BlockMath math="\lim_{x \to a} [f(x) \pm g(x)] = L \pm M" />
                </td>
              </tr>
              <tr>
                <td>常數積法則</td>
                <td className="math-cell pt-4 pb-4">
                  <BlockMath math="\lim_{x \to a} [c \cdot f(x)] = c \cdot L" />
                </td>
              </tr>
              <tr>
                <td>乘積法則</td>
                <td className="math-cell pt-4 pb-4">
                  <BlockMath math="\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M" />
                </td>
              </tr>
              <tr>
                <td>商法則</td>
                <td className="math-cell pt-4 pb-4">
                  <BlockMath math="\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M} \quad (M \neq 0)" />
                </td>
              </tr>
              <tr>
                <td>冪次/方根</td>
                <td className="math-cell pt-4 pb-4">
                  <BlockMath math="\lim_{x \to a} [f(x)]^n = L^n \quad , \quad \lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L}" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 1.2 重要特殊極限 */}
      <h3 className="text-xl font-bold mb-4 text-indigo-800">1.2 重要特殊極限 (Special Limits)</h3>
      <div className="formula-container mb-8">
        <table className="formula-table">
          <thead>
            <tr>
              <th style={{ width: '150px' }}>類型</th>
              <th>公式內容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>三角函數</td>
              <td className="math-cell pt-4 pb-4">
                <BlockMath math="\lim_{x \to 0} \frac{\sin x}{x} = 1 \quad , \quad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0" />
              </td>
            </tr>
            <tr>
              <td>自然常數 e</td>
              <td className="math-cell pt-4 pb-4">
                <BlockMath math="\lim_{n \to \infty} \left( 1 + \frac{1}{n} \right)^n = e = \lim_{x \to 0} (1 + x)^{1/x}" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
