// src/Derivatives/ChainRule.jsx
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

export default function ChainRule() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-purple-500 pb-2">3. 鏈鎖律 (Chain Rule)</h2>
      
      <p className="mb-4 text-gray-700">
        鏈鎖律是微分學中最重要且最常使用的法則之一，專門用來處理<strong>複合函數</strong>的微分。當函數像洋蔥一樣層層包覆時，我們需要由外而內，一層一層地剝開（微分）。
      </p>

      <div className="math-box mb-6 p-6 bg-purple-50 rounded-lg shadow-sm border border-purple-200">
        <h3 className="text-xl font-bold mb-3 text-purple-800">3.1 鏈鎖律的定義</h3>
        <p className="mb-2 text-gray-800">
          若 <InlineMath math="g" /> 在 <InlineMath math="x" /> 處可微，且 <InlineMath math="f" /> 在 <InlineMath math="g(x)" /> 處可微，則複合函數 <InlineMath math="F(x) = f(g(x))" /> 在 <InlineMath math="x" /> 處也可微，其導數為：
        </p>
        <div className="my-4 p-4 bg-white rounded border border-purple-100">
          <BlockMath math="F'(x) = f'(g(x)) \cdot g'(x)" />
        </div>
        
        <p className="mt-4 mb-2 text-gray-800">
          <strong>萊布尼茲符號 (Leibniz Notation) 表示法：</strong>
        </p>
        <p className="text-sm text-gray-600 mb-2">
          令 <InlineMath math="y = f(u)" /> 且 <InlineMath math="u = g(x)" />，則 <InlineMath math="y" /> 對 <InlineMath math="x" /> 的導數可以看作兩個變化率的相乘：
        </p>
        <div className="my-2 p-4 bg-white rounded border border-purple-100">
          <BlockMath math="\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}" />
        </div>
      </div>

      <div className="example-box bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h4 className="font-bold text-lg text-gray-800 mb-3">💡 實戰範例：</h4>
        <p className="mb-2 text-gray-700">計算 <InlineMath math="y = \sin(x^2)" /> 的導數。</p>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
          <li><strong>辨認內外函數：</strong> 外函數是 <InlineMath math="f(u) = \sin(u)" />，內函數是 <InlineMath math="g(x) = x^2" />。</li>
          <li><strong>外函數微分：</strong> <InlineMath math="\sin" /> 微分得到 <InlineMath math="\cos" />，內部保持不變，得到 <InlineMath math="\cos(x^2)" />。</li>
          <li><strong>內函數微分：</strong> <InlineMath math="x^2" /> 微分得到 <InlineMath math="2x" />。</li>
          <li><strong>相乘（鏈鎖）：</strong> 
            <BlockMath math="\frac{dy}{dx} = \cos(x^2) \cdot 2x = 2x \cos(x^2)" />
          </li>
        </ol>
      </div>
      <div className="math-box mt-6 p-6 bg-yellow-50 rounded-lg shadow-sm border border-yellow-200">
        <h3 className="text-xl font-bold mb-3 text-yellow-800">3.2 補充：一般指數與指對數型函數微分</h3>
        <p className="mb-4 text-gray-700">
          結合前面學過的一般指數函數，或是利用對數微分法與連鎖律，我們可以推導出以下兩個實用的延伸公式：
        </p>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-yellow-100">
            <strong className="text-gray-800 block mb-2">1. 底數為常數、指數為函數：</strong>
            <BlockMath math="\frac{d}{dx}\left[a^{g(x)}\right] = a^{g(x)}(\ln a)g'(x)" />
            <ProofBox title="查看推導過程 (使用連鎖律與自然指數)">
              <p className="mb-2">將 <InlineMath math="a^{g(x)}" /> 寫為以 <InlineMath math="e" /> 為底數的指數函數：</p>
              <BlockMath math="a^{g(x)} = e^{\ln(a^{g(x)})} = e^{g(x) \ln a}" />
              <p className="my-2">由於 <InlineMath math="\ln a" /> 是一個常數，我們對其微分並套用連鎖律：</p>
              <BlockMath math="\frac{d}{dx}\left[e^{g(x)\ln a}\right] = e^{g(x)\ln a} \cdot \frac{d}{dx}[g(x)\ln a]" />
              <p className="my-2">將 <InlineMath math="e^{g(x)\ln a}" /> 換回 <InlineMath math="a^{g(x)}" />，並提出常數 <InlineMath math="\ln a" />：</p>
              <BlockMath math="= a^{g(x)} \cdot (\ln a) \cdot g'(x)" />
            </ProofBox>
          </div>

          <div className="bg-white p-4 rounded border border-yellow-100">
            <strong className="text-gray-800 block mb-2">2. 底數與指數皆為變數函數：</strong>
            <BlockMath math="\frac{d}{dx}\left[f(x)^{g(x)}\right] = [f(x)]^{g(x)} \left[ \frac{g(x)f'(x)}{f(x)} + g'(x)\ln f(x) \right]" />
            <ProofBox title="查看推導過程 (對數微分法)">
              <p className="mb-2">這是一個標準的指對數型函數，我們使用對數微分法來推導。</p>
              <ol className="list-decimal list-inside space-y-3 text-gray-800">
                <li>令對象為 <InlineMath math="y" />：
                  <BlockMath math="y = f(x)^{g(x)}" />
                </li>
                <li>等號兩邊取自然對數 <InlineMath math="\ln" />，並利用對數次方的性質提出 <InlineMath math="g(x)" />：
                  <BlockMath math="\ln y = \ln[f(x)^{g(x)}] = g(x)\ln f(x)" />
                </li>
                <li>等號兩邊同時對 <InlineMath math="x" /> 使用隱函數微分。左邊運用連鎖律，右邊運用乘法法則「前微後不微 + 前不微後微」：
                  <BlockMath math="\frac{1}{y} \cdot \frac{dy}{dx} = g'(x)\ln f(x) + g(x) \cdot \frac{d}{dx}[\ln f(x)]" />
                  <BlockMath math="\frac{1}{y} \cdot \frac{dy}{dx} = g'(x)\ln f(x) + g(x) \cdot \frac{f'(x)}{f(x)}" />
                </li>
                <li>將 <InlineMath math="y" /> 移向至等式右邊乘上：
                  <BlockMath math="\frac{dy}{dx} = y \left[ \frac{g(x)f'(x)}{f(x)} + g'(x)\ln f(x) \right]" />
                </li>
                <li>最後將 <InlineMath math="y = f(x)^{g(x)}" /> 替換回去即完成證明：
                  <BlockMath math="\frac{dy}{dx} = [f(x)]^{g(x)} \left[ \frac{g(x)f'(x)}{f(x)} + g'(x)\ln f(x) \right]" />
                </li>
              </ol>
            </ProofBox>
          </div>
        </div>
      </div>

    </section>
  );
}