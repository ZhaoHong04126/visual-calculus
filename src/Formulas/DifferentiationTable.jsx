import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './Formulas.css';

export default function DifferentiationTable() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">2. 微分公式表 (Differentiation Table)</h2>
      
      {/* 2.1 基本求導法則 */}
      <h3 className="text-xl font-bold mt-8 mb-4 text-red-800">2.1 基本求導法則</h3>
      <table className="formula-table">
        <thead>
          <tr>
            <th>法則名稱</th>
            <th>公式</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>和差法則</td>
            <td className="math-cell"><InlineMath math="(f \pm g)' = f' \pm g'" /></td>
          </tr>
          <tr>
            <td>乘法法則</td>
            <td className="math-cell"><InlineMath math="(fg)' = f'g + fg'" /></td>
          </tr>
          <tr>
            <td>除法法則</td>
            <td className="math-cell"><InlineMath math="(f/g)' = \dfrac{f'g - fg'}{g^2}" /></td>
          </tr>
          <tr>
            <td>鏈鎖律</td>
            <td className="math-cell"><InlineMath math="\dfrac{dy}{dx} = \dfrac{dy}{du} \cdot \dfrac{du}{dx}" /></td>
          </tr>
        </tbody>
      </table>

      {/* 2.2 超越函數 */}
      <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">2.2 指數、對數與各類函數</h3>
      <div className="compact-formula-grid">
        <table className="formula-table">
          <thead>
            <tr>
              <th>函數類型</th>
              <th>導數</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>自然指數 <InlineMath math="e^x" /></td>
              <td className="math-cell"><InlineMath math="e^x" /></td>
            </tr>
            <tr>
              <td>一般指數 <InlineMath math="a^x" /></td>
              <td className="math-cell"><InlineMath math="a^x \ln a" /></td>
            </tr>
            <tr>
              <td>自然對數 <InlineMath math="\ln x" /></td>
              <td className="math-cell"><InlineMath math="\dfrac{1}{x}" /></td>
            </tr>
            <tr>
              <td>一般對數 <InlineMath math="\log_a x" /></td>
              <td className="math-cell"><InlineMath math="\dfrac{1}{x \ln a}" /></td>
            </tr>
          </tbody>
        </table>

        <table className="formula-table">
          <thead>
            <tr>
              <th>反三角函數</th>
              <th>導數</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><InlineMath math="\arcsin x" /></td>
              <td className="math-cell"><InlineMath math="\dfrac{1}{\sqrt{1-x^2}}" /></td>
            </tr>
            <tr>
              <td><InlineMath math="\arccos x" /></td>
              <td className="math-cell"><InlineMath math="-\dfrac{1}{\sqrt{1-x^2}}" /></td>
            </tr>
            <tr>
              <td><InlineMath math="\arctan x" /></td>
              <td className="math-cell"><InlineMath math="\dfrac{1}{1+x^2}" /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2.3 三角與雙曲函數 */}
      <h3 className="text-xl font-bold mt-12 mb-4 text-emerald-800">2.3 三角與雙曲函數對照</h3>
      <div className="compact-formula-grid">
        <table className="formula-table">
          <thead>
            <tr>
              <th>三角函數</th>
              <th>導數</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><InlineMath math="\sin x" /></td><td><InlineMath math="\cos x" /></td></tr>
            <tr><td><InlineMath math="\cos x" /></td><td><InlineMath math="-\sin x" /></td></tr>
            <tr><td><InlineMath math="\tan x" /></td><td><InlineMath math="\sec^2 x" /></td></tr>
            <tr><td><InlineMath math="\cot x" /></td><td><InlineMath math="-\csc^2 x" /></td></tr>
            <tr><td><InlineMath math="\sec x" /></td><td><InlineMath math="\sec x \tan x" /></td></tr>
            <tr><td><InlineMath math="\csc x" /></td><td><InlineMath math="-\csc x \cot x" /></td></tr>
          </tbody>
        </table>

        <table className="formula-table">
          <thead>
            <tr>
              <th>雙曲函數</th>
              <th>導數</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><InlineMath math="\sinh x" /></td><td><InlineMath math="\cosh x" /></td></tr>
            <tr><td><InlineMath math="\cosh x" /></td><td><InlineMath math="\sinh x" /></td></tr>
            <tr><td><InlineMath math="\tanh x" /></td><td><InlineMath math="\text{sech}^2 x" /></td></tr>
            <tr><td><InlineMath math="\coth x" /></td><td><InlineMath math="-\text{csch}^2 x" /></td></tr>
            <tr><td><InlineMath math="\text{sech } x" /></td><td><InlineMath math="-\text{sech } x \tanh x" /></td></tr>
            <tr><td><InlineMath math="\text{csch } x" /></td><td><InlineMath math="-\text{csch } x \coth x" /></td></tr>
          </tbody>
        </table>
      </div>

      {/* 2.4 反雙曲函數 */}
      <h3 className="text-xl font-bold mt-12 mb-4 text-indigo-800">2.4 反雙曲函數</h3>
      <table className="formula-table">
        <thead>
          <tr>
            <th>函數</th>
            <th>導數</th>
            <th>函數</th>
            <th>導數</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><InlineMath math="\text{arsinh } x" /></td>
            <td className="math-cell"><InlineMath math="\dfrac{1}{\sqrt{x^2+1}}" /></td>
            <td><InlineMath math="\text{arsech } x" /></td>
            <td className="math-cell"><InlineMath math="\dfrac{-1}{x\sqrt{1-x^2}}" /></td>
          </tr>
          <tr>
            <td><InlineMath math="\text{arcosh } x" /></td>
            <td className="math-cell"><InlineMath math="\dfrac{1}{\sqrt{x^2-1}}" /></td>
            <td><InlineMath math="\text{arcsch } x" /></td>
            <td className="math-cell"><InlineMath math="\dfrac{-1}{|x|\sqrt{1+x^2}}" /></td>
          </tr>
          <tr>
            <td><InlineMath math="\text{artanh } x" /></td>
            <td className="math-cell"><InlineMath math="\dfrac{1}{1-x^2}" /></td>
            <td><InlineMath math="\text{arcoth } x" /></td>
            <td className="math-cell"><InlineMath math="\dfrac{1}{1-x^2}" /></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
