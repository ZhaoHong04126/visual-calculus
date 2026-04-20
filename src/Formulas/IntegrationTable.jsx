import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './Formulas.css';

export default function IntegrationTable() {
  return (
    <section className="subsection mt-12 mb-20">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-purple-500 pb-2">3. 積分公式表 (Integration Table)</h2>
      
      <p className="mb-4 text-gray-700 italic text-sm">註：以下所有不定積分公式均省略積分常數 <InlineMath math="C" />。</p>

      {/* 3.1 基本與指對數 */}
      <h3 className="text-xl font-bold mt-8 mb-4 text-purple-800">3.1 基本與指對數</h3>
      <table className="formula-table">
        <thead>
          <tr>
            <th>函數類型</th>
            <th>不定積分公式</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>冪函數 (n ≠ -1)</td>
            <td className="math-cell"><InlineMath math="\int x^n dx = \dfrac{x^{n+1}}{n+1}" /></td>
          </tr>
          <tr>
            <td>倒數函數</td>
            <td className="math-cell"><InlineMath math="\int \dfrac{1}{x} dx = \ln|x|" /></td>
          </tr>
          <tr>
            <td>自然指數</td>
            <td className="math-cell"><InlineMath math="\int e^x dx = e^x" /></td>
          </tr>
          <tr>
            <td>一般指數</td>
            <td className="math-cell"><InlineMath math="\int a^x dx = \dfrac{a^x}{\ln a}" /></td>
          </tr>
        </tbody>
      </table>

      {/* 3.2 三角函數積分 */}
      <h3 className="text-xl font-bold mt-12 mb-4 text-purple-800">3.2 三角函數與雙曲函數</h3>
      <div className="compact-formula-grid">
        <table className="formula-table">
          <thead>
            <tr>
              <th>三角函數</th>
              <th>積分結果</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><InlineMath math="\sin x" /></td><td><InlineMath math="-\cos x" /></td></tr>
            <tr><td><InlineMath math="\cos x" /></td><td><InlineMath math="\sin x" /></td></tr>
            <tr><td><InlineMath math="\sec^2 x" /></td><td><InlineMath math="\tan x" /></td></tr>
            <tr><td><InlineMath math="\csc^2 x" /></td><td><InlineMath math="-\cot x" /></td></tr>
            <tr><td><InlineMath math="\sec x \tan x" /></td><td><InlineMath math="\sec x" /></td></tr>
            <tr><td><InlineMath math="\tan x" /></td><td><InlineMath math="\ln|\sec x|" /></td></tr>
            <tr><td><InlineMath math="\sec x" /></td><td><InlineMath math="\ln|\sec x + \tan x|" /></td></tr>
          </tbody>
        </table>

        <table className="formula-table">
          <thead>
            <tr>
              <th>雙曲函數</th>
              <th>積分結果</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><InlineMath math="\sinh x" /></td><td><InlineMath math="\cosh x" /></td></tr>
            <tr><td><InlineMath math="\cosh x" /></td><td><InlineMath math="\sinh x" /></td></tr>
            <tr><td><InlineMath math="\text{sech}^2 x" /></td><td><InlineMath math="\tanh x" /></td></tr>
            <tr><td><InlineMath math="\text{csch}^2 x" /></td><td><InlineMath math="-\text{coth } x" /></td></tr>
          </tbody>
        </table>
      </div>

      {/* 3.3 反三角相關形 */}
      <h3 className="text-xl font-bold mt-12 mb-4 text-purple-800">3.3 高階積分與反三角相關形</h3>
      <table className="formula-table">
        <thead>
          <tr>
            <th style={{ width: '40%' }}>形式</th>
            <th>積分結果</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><InlineMath math="\int \dfrac{1}{x^2+a^2} dx" /></td>
            <td className="math-cell"><InlineMath math="\dfrac{1}{a} \arctan \dfrac{x}{a}" /></td>
          </tr>
          <tr>
            <td><InlineMath math="\int \dfrac{1}{\sqrt{a^2-x^2}} dx" /></td>
            <td className="math-cell"><InlineMath math="\arcsin \dfrac{x}{a}" /></td>
          </tr>
          <tr>
            <td><InlineMath math="\int u \, dv" /> (分部積分)</td>
            <td className="math-cell"><InlineMath math="uv - \int v \, du" /></td>
          </tr>
        </tbody>
      </table>
      
      <p className="text-sm text-gray-500 mt-4">
        * 分部積分常用優先順序 (LIATE)：Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.
      </p>
    </section>
  );
}
