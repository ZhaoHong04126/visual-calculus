import React from 'react';
import SectionNav from '../components/SectionNav';
import AlgebraTrigFormulas from './AlgebraTrigFormulas';
import { InlineMath, BlockMath } from '../components/Math';
import './Formulas.css';

export default function BasicFormulas() {
  const sections = [
    { id: 'algebra-trig', title: '代數與三角' },
    { id: 'inequalities', title: '常用不等式' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第二章：基本公式</h1>
        <p className="text-lg mt-2 text-gray-600">
          整合微積分學習中必備的預備數學工具，包含三角恆等式與各類重要不等式。
        </p>
      </header>

      <SectionNav sections={sections} />

      <div id="algebra-trig">
        <AlgebraTrigFormulas />
      </div>

      <div id="inequalities" className="subsection mt-12 mb-20">
        <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">2. 常用不等式 (Important Inequalities)</h2>
        
        <div className="formula-container">
          <table className="formula-table">
            <thead>
              <tr>
                <th style={{ width: '20%' }}>不等式名稱</th>
                <th>公式內容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>三角不等式<br />(Triangle)</td>
                <td className="math-cell pt-4 pb-4">
                  <BlockMath math="|a + b| \le |a| + |b|" />
                  <BlockMath math="||a| - |b|| \le |a - b|" />
                </td>
              </tr>
              <tr>
                <td>算幾不等式<br />(AM-GM)</td>
                <td className="math-cell pt-4 pb-4">
                  <p className="text-sm text-gray-600 mb-2">對於正實數 <InlineMath math="a_1, a_2, \dots, a_n" />：</p>
                  <BlockMath math="\dfrac{a_1 + a_2 + \dots + a_n}{n} \ge \sqrt[n]{a_1 a_2 \dots a_n}" />
                  <p className="text-xs text-gray-500">等號成立於 <InlineMath math="a_1 = a_2 = \dots = a_n" /> 時。</p>
                </td>
              </tr>
              <tr>
                <td>柯西不等式<br />(Cauchy-Schwarz)</td>
                <td className="math-cell pt-4 pb-4">
                  <BlockMath math="\left( \sum_{i=1}^n a_i^2 \right) \left( \sum_{i=1}^n b_i^2 \right) \ge \left( \sum_{i=1}^n a_i b_i \right)^2" />
                </td>
              </tr>
              <tr>
                <td>絕對值與區間</td>
                <td className="math-cell pt-4 pb-4">
                  <BlockMath math="|x| \le a \iff -a \le x \le a" />
                  <BlockMath math="|x| \ge a \iff x \ge a \text{ or } x \le -a" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
