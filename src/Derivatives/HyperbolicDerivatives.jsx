// src/Derivatives/HyperbolicDerivatives.jsx
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

export default function HyperbolicDerivatives() {
  return (
    <section className="subsection mt-12 pb-20">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-indigo-500 pb-2">6. 雙曲函數 (Hyperbolic Functions)</h2>
      
      <p className="mb-4 text-gray-700">
        雙曲函數是用指數函數定義的，因此它們的微分公式與三角函數非常相似，但在符號上有一些細微的差別。
      </p>

      <div className="math-box p-6 bg-rose-50 rounded-lg shadow-sm border border-rose-200">
        <h3 className="text-xl font-bold mb-3 text-rose-800">6.1 基本雙曲函數</h3>
        <p className="mb-4 text-gray-700">
          底下是六個基本雙曲函數的微分公式。請注意 <InlineMath math="\cosh x" /> 的導數是正的 <InlineMath math="\sinh x" />，這與三角函數中 <InlineMath math="\cos x" /> 的導數為負的 <InlineMath math="\sin x" /> 不同。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* sinh */}
          <div className="p-4 bg-white rounded border border-rose-200">
            <strong>6.1.1 雙曲正弦 (sinh)：</strong>
            <BlockMath math="\dfrac{d}{dx}[\sinh x] = \cosh x" />
            <ProofBox title="查看證明 (利用指數定義)">
              <p className="my-2">根據定義 <InlineMath math="\sinh x = \dfrac{e^x - e^{-x}}{2}" />：</p>
              <BlockMath math="\dfrac{d}{dx}\left[\dfrac{e^x - e^{-x}}{2}\right] = \dfrac{1}{2}(e^x - e^{-x}(-1)) = \dfrac{e^x + e^{-x}}{2} = \cosh x" />
            </ProofBox>
          </div>

          {/* cosh */}
          <div className="p-4 bg-white rounded border border-rose-200">
            <strong>6.1.2 雙曲餘弦 (cosh)：</strong>
            <BlockMath math="\dfrac{d}{dx}[\cosh x] = \sinh x" />
            <ProofBox title="查看證明 (利用指數定義)">
              <p className="my-2">根據定義 <InlineMath math="\cosh x = \dfrac{e^x + e^{-x}}{2}" />：</p>
              <BlockMath math="\dfrac{d}{dx}\left[\dfrac{e^x + e^{-x}}{2}\right] = \dfrac{1}{2}(e^x + e^{-x}(-1)) = \dfrac{e^x - e^{-x}}{2} = \sinh x" />
            </ProofBox>
          </div>

          {/* tanh */}
          <div className="p-4 bg-white rounded border border-rose-200">
            <strong>6.1.3 雙曲正切 (tanh)：</strong>
            <BlockMath math="\dfrac{d}{dx}[\tanh x] = \text{sech}^2 x" />
            <ProofBox title="查看證明 (除法法則)">
              <p className="my-2">利用 <InlineMath math="\tanh x = \dfrac{\sinh x}{\cosh x}" />：</p>
              <BlockMath math="\dfrac{d}{dx}\left[\dfrac{\sinh x}{\cosh x}\right] = \dfrac{\cosh x \cdot \cosh x - \sinh x \cdot \sinh x}{\cosh^2 x} = \dfrac{\cosh^2 x - \sinh^2 x}{\cosh^2 x}" />
              <p className="my-2">利用恆等式 <InlineMath math="\cosh^2 x - \sinh^2 x = 1" />：</p>
              <BlockMath math="= \dfrac{1}{\cosh^2 x} = \text{sech}^2 x" />
            </ProofBox>
          </div>

          {/* coth */}
          <div className="p-4 bg-white rounded border border-rose-200">
            <strong>6.1.4 雙曲餘切 (coth)：</strong>
            <BlockMath math="\dfrac{d}{dx}[\coth x] = -\text{csch}^2 x" />
            <ProofBox title="查看證明">
              <p className="my-2">利用 <InlineMath math="\coth x = \dfrac{\cosh x}{\sinh x}" /> 並使用除法法則：</p>
              <BlockMath math="\dfrac{d}{dx}\left[\dfrac{\cosh x}{\sinh x}\right] = \dfrac{\sinh^2 x - \cosh^2 x}{\sinh^2 x} = \dfrac{-(cosh^2 x - \sinh^2 x)}{\sinh^2 x} = -\dfrac{1}{\sinh^2 x} = -\text{csch}^2 x" />
            </ProofBox>
          </div>

          {/* sech */}
          <div className="p-4 bg-white rounded border border-rose-200">
            <strong>6.1.5 雙曲正割 (sech)：</strong>
            <BlockMath math="\dfrac{d}{dx}[\text{sech } x] = -\text{sech } x \tanh x" />
            <ProofBox title="查看證明">
              <p className="my-2">利用 <InlineMath math="\text{sech } x = (\cosh x)^{-1}" /> 並使用鏈鎖律：</p>
              <BlockMath math="\dfrac{d}{dx}(\cosh x)^{-1} = -(\cosh x)^{-2} \cdot \sinh x = -\dfrac{1}{\cosh x} \cdot \dfrac{\sinh x}{\cosh x} = -\text{sech } x \tanh x" />
            </ProofBox>
          </div>

          {/* csch */}
          <div className="p-4 bg-white rounded border border-rose-200">
            <strong>6.1.6 雙曲餘割 (csch)：</strong>
            <BlockMath math="\dfrac{d}{dx}[\text{csch } x] = -\text{csch } x \coth x" />
            <ProofBox title="查看證明">
              <p className="my-2">利用 <InlineMath math="\text{csch } x = (\sinh x)^{-1}" /> 並使用鏈鎖律：</p>
              <BlockMath math="\dfrac{d}{dx}(\sinh x)^{-1} = -(\sinh x)^{-2} \cdot \cosh x = -\dfrac{1}{\sinh x} \cdot \dfrac{\cosh x}{\sinh x} = -\text{csch } x \coth x" />
            </ProofBox>
          </div>
        </div>
      </div>

      <div className="math-box p-6 bg-orange-50 rounded-lg shadow-sm border border-orange-200 mt-8">
        <h3 className="text-xl font-bold mb-3 text-orange-800">6.2 反雙曲函數</h3>
        <p className="mb-4 text-gray-700">
          反雙曲函數的微分公式與反三角函數有相似之處，通常涉及平方根與分式。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* arsinh */}
          <div className="p-4 bg-white rounded border border-orange-200">
            <strong>6.2.1 反雙曲正弦 (arsinh)：</strong>
            <BlockMath math="\dfrac{d}{dx}[\text{arsinh } x] = \dfrac{1}{\sqrt{x^2 + 1}}" />
            <ProofBox title="查看證明 (隱函數微分)">
              <p className="my-2">令 <InlineMath math="y = \text{arsinh } x" />，則 <InlineMath math="\sinh y = x" />。兩邊對 <InlineMath math="x" /> 微分：</p>
              <BlockMath math="\cosh y \cdot \dfrac{dy}{dx} = 1 \implies \dfrac{dy}{dx} = \dfrac{1}{\cosh y}" />
              <p className="my-2">利用 <InlineMath math="\cosh^2 y - \sinh^2 y = 1" />，得 <InlineMath math="\cosh y = \sqrt{1 + \sinh^2 y} = \sqrt{1 + x^2}" />。</p>
              <BlockMath math="\therefore \dfrac{dy}{dx} = \dfrac{1}{\sqrt{x^2 + 1}}" />
            </ProofBox>
          </div>

          {/* arcosh */}
          <div className="p-4 bg-white rounded border border-orange-200">
            <strong>6.2.2 反雙曲餘弦 (arcosh)：</strong>
            <div className="text-sm text-gray-500 float-right mt-1">(x &gt; 1)</div>
            <BlockMath math="\dfrac{d}{dx}[\text{arcosh } x] = \dfrac{1}{\sqrt{x^2 - 1}}" />
            <ProofBox title="查看證明">
              <p className="my-2">令 <InlineMath math="y = \text{arcosh } x" />，則 <InlineMath math="\cosh y = x" />。兩邊對 <InlineMath math="x" /> 微分：</p>
              <BlockMath math="\sinh y \cdot \dfrac{dy}{dx} = 1 \implies \dfrac{dy}{dx} = \dfrac{1}{\sinh y}" />
              <p className="my-2">利用 <InlineMath math="\sinh y = \sqrt{\cosh^2 y - 1} = \sqrt{x^2 - 1}" />。</p>
              <BlockMath math="\therefore \dfrac{dy}{dx} = \dfrac{1}{\sqrt{x^2 - 1}}" />
            </ProofBox>
          </div>

          {/* artanh */}
          <div className="p-4 bg-white rounded border border-orange-200">
            <strong>6.2.3 反雙曲正切 (artanh)：</strong>
            <div className="text-sm text-gray-500 float-right mt-1">(|x| &lt; 1)</div>
            <BlockMath math="\dfrac{d}{dx}[\text{artanh } x] = \dfrac{1}{1 - x^2}" />
            <ProofBox title="查看證明">
              <p className="my-2">令 <InlineMath math="y = \text{artanh } x" />，則 <InlineMath math="\tanh y = x" />。兩邊對 <InlineMath math="x" /> 微分：</p>
              <BlockMath math="\text{sech}^2 y \cdot \dfrac{dy}{dx} = 1 \implies \dfrac{dy}{dx} = \dfrac{1}{\text{sech}^2 y}" />
              <p className="my-2">利用 <InlineMath math="\text{sech}^2 y = 1 - \tanh^2 y = 1 - x^2" />。</p>
              <BlockMath math="\therefore \dfrac{dy}{dx} = \dfrac{1}{1 - x^2}" />
            </ProofBox>
          </div>

          {/* arcoth */}
          <div className="p-4 bg-white rounded border border-orange-200">
            <strong>6.2.4 反雙曲餘切 (arcoth)：</strong>
            <div className="text-sm text-gray-500 float-right mt-1">(|x| &gt; 1)</div>
            <BlockMath math="\dfrac{d}{dx}[\text{arcoth } x] = \dfrac{1}{1 - x^2}" />
            <ProofBox title="查看證明">
              <p className="my-2">令 <InlineMath math="y = \text{arcoth } x" />，則 <InlineMath math="\coth y = x" />。兩邊對 <InlineMath math="x" /> 微分：</p>
              <BlockMath math="-\text{csch}^2 y \cdot \dfrac{dy}{dx} = 1 \implies \dfrac{dy}{dx} = \dfrac{-1}{\text{csch}^2 y}" />
              <p className="my-2">利用 <InlineMath math="\text{csch}^2 y = \coth^2 y - 1 = x^2 - 1" />。</p>
              <BlockMath math="\therefore \dfrac{dy}{dx} = \dfrac{-1}{x^2 - 1} = \dfrac{1}{1 - x^2}" />
            </ProofBox>
          </div>

          {/* arsech */}
          <div className="p-4 bg-white rounded border border-orange-200">
            <strong>6.2.5 反雙曲正割 (arsech)：</strong>
            <div className="text-sm text-gray-500 float-right mt-1">(0 &lt; x &lt; 1)</div>
            <BlockMath math="\dfrac{d}{dx}[\text{arsech } x] = \dfrac{-1}{x\sqrt{1 - x^2}}" />
            <ProofBox title="查看證明">
              <p className="my-2">令 <InlineMath math="y = \text{arsech } x" />，則 <InlineMath math="\text{sech } y = x" />。即 <InlineMath math="\cosh y = \frac{1}{x}" />。兩邊微分：</p>
              <BlockMath math="\sinh y \cdot \dfrac{dy}{dx} = -\dfrac{1}{x^2} \implies \dfrac{dy}{dx} = -\dfrac{1}{x^2 \sinh y}" />
              <p className="my-2">利用 <InlineMath math="\sinh y = \sqrt{\cosh^2 y - 1} = \sqrt{\frac{1}{x^2} - 1} = \frac{\sqrt{1 - x^2}}{x}" />（此處 <InlineMath math="x > 0" />）。</p>
              <BlockMath math="\therefore \dfrac{dy}{dx} = -\dfrac{1}{x^2 \cdot \frac{\sqrt{1 - x^2}}{x}} = \dfrac{-1}{x\sqrt{1 - x^2}}" />
            </ProofBox>
          </div>

          {/* arcsch */}
          <div className="p-4 bg-white rounded border border-orange-200">
            <strong>6.2.6 反雙曲餘割 (arcsch)：</strong>
            <div className="text-sm text-gray-500 float-right mt-1">(x \neq 0)</div>
            <BlockMath math="\dfrac{d}{dx}[\text{arcsch } x] = \dfrac{-1}{|x|\sqrt{1 + x^2}}" />
            <ProofBox title="查看證明">
              <p className="my-2">令 <InlineMath math="y = \text{arcsch } x" />，則 <InlineMath math="\text{csch } y = x" />。即 <InlineMath math="\sinh y = \frac{1}{x}" />。兩邊微分：</p>
              <BlockMath math="\cosh y \cdot \dfrac{dy}{dx} = -\dfrac{1}{x^2} \implies \dfrac{dy}{dx} = -\dfrac{1}{x^2 \cosh y}" />
              <p className="my-2">利用 <InlineMath math="\cosh y = \sqrt{1 + \sinh^2 y} = \sqrt{1 + \frac{1}{x^2}} = \frac{\sqrt{x^2 + 1}}{|x|}" />。</p>
              <BlockMath math="\therefore \dfrac{dy}{dx} = -\dfrac{1}{x^2 \cdot \frac{\sqrt{x^2 + 1}}{|x|}} = \dfrac{-1}{|x|\sqrt{x^2 + 1}}" />
            </ProofBox>
          </div>
        </div>
      </div>

    </section>
  );
}
