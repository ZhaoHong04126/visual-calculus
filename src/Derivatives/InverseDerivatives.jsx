// src/Derivatives/InverseDerivatives.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './ProofBox.css';

const ProofBox = ({ title = "查看證明", children }) => {
  return (
    <details className="proof-box">
      <summary>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px', fontSize: '18px' }}>📝</span>
          {title}
        </div>
        <div>
          <span className="proof-toggle-btn expand-text">展開證明 ▼</span>
          <span className="proof-toggle-btn collapse-text">收起證明 ▲</span>
        </div>
      </summary>
      <div className="proof-content">
        {children}
      </div>
    </details>
  );
};

export default function InverseDerivatives() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-indigo-500 pb-2">5. 反函數的微分 (Derivatives of Inverse Functions)</h2>
      
      <p className="mb-4 text-gray-700">
        如果一個函數是<strong>一對一 (One-to-One)</strong> 且可微的，那麼它的反函數也是可微的（在其導數不為零的點上）。反函數的微分公式讓我們可以直接利用原函數的導數來求反函數的導數。
      </p>

      <div className="math-box mb-6 p-6 bg-indigo-50 rounded-lg shadow-sm border border-indigo-200">
        <h3 className="text-xl font-bold mb-3 text-indigo-800">5.1 反函數的導數公式</h3>
        <p className="mb-2 text-gray-800">
          設 <InlineMath math="f" /> 是一個有一階連續導數的嚴格單調函數（即反函數 <InlineMath math="f^{-1}" /> 存在），且 <InlineMath math="f'(x) \neq 0" />。
          若 <InlineMath math="y = f^{-1}(x)" />，則 <InlineMath math="x = f(y)" />，反函數的導數公式為：
        </p>
        <div className="my-4 p-4 bg-white rounded border border-indigo-100">
          <BlockMath math="(f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))}" />
        </div>
        
        <p className="mt-4 mb-2 text-gray-800">
          <strong>萊布尼茲寫法：</strong>
        </p>
        <div className="my-2 p-4 bg-white rounded border border-indigo-100">
          <BlockMath math="\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}}" />
        </div>
      </div>

      <div className="example-box bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-6">
        <h4 className="font-bold text-lg text-gray-800 mb-3">💡 實戰範例：</h4>
        <p className="mb-2 text-gray-700">已知 <InlineMath math="f(x) = x^3 + x" />，求 <InlineMath math="(f^{-1})'(2)" />。</p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><strong>尋找對應的 y 值：</strong> 我們需要找到一個 <InlineMath math="y" /> 使得 <InlineMath math="f(y) = 2" />。也就是 <InlineMath math="y^3 + y = 2" />。觀察可知，當 <InlineMath math="y = 1" /> 時，<InlineMath math="1^3 + 1 = 2" />，因此 <InlineMath math="f^{-1}(2) = 1" />。</li>
          <li><strong>求原函數的導數：</strong> <InlineMath math="f'(x) = 3x^2 + 1" />。</li>
          <li><strong>代入公式：</strong> 
            <BlockMath math="(f^{-1})'(2) = \frac{1}{f'(f^{-1}(2))} = \frac{1}{f'(1)} = \frac{1}{3(1)^2 + 1} = \frac{1}{4}" />
          </li>
        </ol>
      </div>

      <div className="math-box p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-200">
        <h3 className="text-xl font-bold mb-3 text-blue-800">5.2 反三角函數的微分與證明</h3>
        <p className="mb-4 text-gray-700">
          利用隱函數微分與三角恆等式，我們可以推導出六個反三角函數的微分公式。底下為公式總覽與詳細證明過程：
        </p>

        <div className="space-y-4 mt-4 text-base">
          {/* Arcsin */}
          <div className="p-4 bg-white rounded border border-blue-200">
            <strong>5.2.1 反正弦函數 (arcsin)：</strong>
            <div className="text-sm text-gray-500 float-right mt-1">(-1 &lt; x &lt; 1)</div>
            <BlockMath math="\dfrac{d}{dx}[\arcsin x] = \dfrac{1}{\sqrt{1 - x^2}}" />
            <ProofBox title="查看證明 (隱函數微分)">
              <ol className="list-decimal list-inside space-y-1 my-2">
                <li>令 <InlineMath math="y = \arcsin x" />，則 <InlineMath math="\sin y = x" />，且 <InlineMath math="y \in [-\frac{\pi}{2}, \frac{\pi}{2}]" />。</li>
                <li>對等式兩邊同時對 <InlineMath math="x" /> 微分：
                  <BlockMath math="\cos y \cdot \dfrac{dy}{dx} = 1" />
                </li>
                <li>移項得到：<BlockMath math="\dfrac{dy}{dx} = \dfrac{1}{\cos y}" /></li>
                <li>因為 <InlineMath math="y \in [-\frac{\pi}{2}, \frac{\pi}{2}]" />，<InlineMath math="\cos y \geq 0" />。因此 <InlineMath math="\cos y = \sqrt{1 - \sin^2 y} = \sqrt{1 - x^2}" />。</li>
                <li>代回原式即得：<BlockMath math="\dfrac{dy}{dx} = \dfrac{1}{\sqrt{1 - x^2}}" /></li>
              </ol>
            </ProofBox>
          </div>

          {/* Arccos */}
          <div className="p-4 bg-white rounded border border-blue-200">
            <strong>5.2.2 反餘弦函數 (arccos)：</strong>
            <div className="text-sm text-gray-500 float-right mt-1">(-1 &lt; x &lt; 1)</div>
            <BlockMath math="\dfrac{d}{dx}[\arccos x] = -\dfrac{1}{\sqrt{1 - x^2}}" />
            <ProofBox title="查看證明 (利用餘角關係)">
              <p className="my-2">利用恆等式 <InlineMath math="\arcsin x + \arccos x = \dfrac{\pi}{2}" />。兩邊對 <InlineMath math="x" /> 微分：</p>
              <BlockMath math="\dfrac{d}{dx}[\arcsin x] + \dfrac{d}{dx}[\arccos x] = 0" />
              <p className="my-2">因此 <InlineMath math="\dfrac{d}{dx}[\arccos x] = - \dfrac{d}{dx}[\arcsin x] = -\dfrac{1}{\sqrt{1 - x^2}}" />。</p>
            </ProofBox>
          </div>

          {/* Arctan */}
          <div className="p-4 bg-white rounded border border-blue-200">
            <strong>5.2.3 反正切函數 (arctan)：</strong>
            <BlockMath math="\dfrac{d}{dx}[\arctan x] = \dfrac{1}{1 + x^2}" />
            <ProofBox title="查看證明 (隱函數微分)">
              <ol className="list-decimal list-inside space-y-1 my-2">
                <li>令 <InlineMath math="y = \arctan x" />，則 <InlineMath math="\tan y = x" />，且 <InlineMath math="y \in (-\frac{\pi}{2}, \frac{\pi}{2})" />。</li>
                <li>兩邊對 <InlineMath math="x" /> 微分：
                  <BlockMath math="\sec^2 y \cdot \dfrac{dy}{dx} = 1" />
                </li>
                <li>移項得到：<BlockMath math="\dfrac{dy}{dx} = \dfrac{1}{\sec^2 y}" /></li>
                <li>將 <InlineMath math="\sec^2 y = 1 + \tan^2 y = 1 + x^2" /> 代入。</li>
                <li>即得：<BlockMath math="\dfrac{dy}{dx} = \dfrac{1}{1 + x^2}" /></li>
              </ol>
            </ProofBox>
          </div>

          {/* Arccot */}
          <div className="p-4 bg-white rounded border border-blue-200">
            <strong>5.2.4 反餘切函數 (arccot)：</strong>
            <BlockMath math="\dfrac{d}{dx}[\text{arccot } x] = -\dfrac{1}{1 + x^2}" />
            <ProofBox title="查看證明 (利用餘角關係)">
              <p className="my-2">利用恆等式 <InlineMath math="\arctan x + \text{arccot } x = \dfrac{\pi}{2}" />，兩邊微分即得：</p>
              <BlockMath math="\dfrac{d}{dx}[\text{arccot } x] = -\dfrac{1}{1 + x^2}" />
            </ProofBox>
          </div>

          {/* Arcsec & Arccsc 並列 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded border border-blue-200">
              <strong>5.2.5 反正割函數 (arcsec)：</strong>
              <div className="text-sm text-gray-500 float-right mt-1">(|x| &gt; 1)</div>
              <BlockMath math="\dfrac{d}{dx}[\text{arcsec } x] = \dfrac{1}{|x|\sqrt{x^2 - 1}}" />
              <ProofBox title="查看證明">
                <ol className="list-decimal list-inside space-y-1 my-2">
                  <li>令 <InlineMath math="y = \text{arcsec } x" />，則 <InlineMath math="\sec y = x" />。</li>
                  <li>兩邊對 <InlineMath math="x" /> 微分：
                    <BlockMath math="\sec y \tan y \cdot \dfrac{dy}{dx} = 1" />
                  </li>
                  <li>移項：<BlockMath math="\dfrac{dy}{dx} = \dfrac{1}{\sec y \tan y}" /></li>
                  <li>利用 <InlineMath math="\sec y = x" />，而根據值域定義，<InlineMath math="\sec y \tan y" /> 始終與 <InlineMath math="x" /> 同號，因此 <InlineMath math="\sec y \tan y = |x|\sqrt{x^2 - 1}" />。</li>
                  <li>即得：<BlockMath math="\dfrac{dy}{dx} = \dfrac{1}{|x|\sqrt{x^2 - 1}}" /></li>
                </ol>
              </ProofBox>
            </div>

            <div className="p-4 bg-white rounded border border-blue-200">
              <strong>5.2.6 反餘割函數 (arccsc)：</strong>
              <div className="text-sm text-gray-500 float-right mt-1">(|x| &gt; 1)</div>
              <BlockMath math="\dfrac{d}{dx}[\text{arccsc } x] = -\dfrac{1}{|x|\sqrt{x^2 - 1}}" />
              <ProofBox title="查看證明 (利用餘角關係)">
                <p className="my-2">利用恆等式 <InlineMath math="\text{arcsec } x + \text{arccsc } x = \dfrac{\pi}{2}" />，兩邊微分：</p>
                <BlockMath math="\dfrac{d}{dx}[\text{arccsc } x] = -\dfrac{1}{|x|\sqrt{x^2 - 1}}" />
              </ProofBox>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
