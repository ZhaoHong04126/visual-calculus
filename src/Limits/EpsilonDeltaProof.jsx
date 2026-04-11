import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './Limits.css';

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

export default function EpsilonDeltaProof() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-emerald-500 pb-2">
        3. <InlineMath math="\epsilon-\delta" /> 嚴格定義證明範例
      </h2>
      
      <p>
        學習了嚴格定義後，我們來看一個實際的證明。要證明極限成立，我們的目標是：給定任意一個大於 0 的誤差容忍值 <InlineMath settings={{ strict: false }} math="\epsilon" />，我們都必須「找到」一個對應的控制範圍 <InlineMath settings={{ strict: false }} math="\delta" /> 來滿足條件。
      </p>

      <div className="example-box bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
        <h3 className="example-title font-bold text-lg text-gray-800 mb-3">例題：</h3>
        <p className="mb-2 text-gray-700">請使用極限的嚴格定義證明：<InlineMath settings={{ strict: false }} math="\lim_{x \to 2} (3x - 1) = 5" /></p>
        
        <ProofBox title={<>思考與草稿區（尋找 <InlineMath math="\delta" />）</>}>
          <p>
            我們要讓 <InlineMath settings={{ strict: false }} math="|(3x - 1) - 5| < \epsilon" /> 成立。先將絕對值內的式子化簡：
          </p>
          <BlockMath settings={{ strict: false }} math="|(3x - 1) - 5| = |3x - 6| = 3|x - 2|" />
          <p>
            因為我們希望 <InlineMath settings={{ strict: false }} math="3|x - 2| < \epsilon" />，將兩邊同除以 3，得到：
          </p>
          <BlockMath settings={{ strict: false }} math="|x - 2| < \frac{\epsilon}{3}" />
          <p>
            這提示了我們，只要讓 <InlineMath settings={{ strict: false }} math="x" /> 與 2 的距離小於 <InlineMath settings={{ strict: false }} math="\epsilon / 3" />，就能保證函數值與 5 的距離小於 <InlineMath settings={{ strict: false }} math="\epsilon" />。因此，我們選擇 <InlineMath settings={{ strict: false }} math="\delta = \frac{\epsilon}{3}" />。
          </p>
        </ProofBox>

        <ProofBox title="正式證明">
          <p>
            給定任意 <InlineMath settings={{ strict: false }} math="\epsilon > 0" />，我們取 <InlineMath settings={{ strict: false }} math="\delta = \frac{\epsilon}{3} > 0" />。
          </p>
          <p>
            當 <InlineMath settings={{ strict: false }} math="0 < |x - 2| < \delta" /> 時，我們有：
          </p>
          <BlockMath settings={{ strict: false }} math="|(3x - 1) - 5| = |3x - 6|" />
          <BlockMath settings={{ strict: false }} math="= 3|x - 2|" />
          <BlockMath settings={{ strict: false }} math="< 3\delta" />
          <p>
            將我們設定的 <InlineMath settings={{ strict: false }} math="\delta" /> 代入：
          </p>
          <BlockMath settings={{ strict: false }} math="= 3\left(\frac{\epsilon}{3}\right) = \epsilon" />
          <p>
            因為對於任意 <InlineMath settings={{ strict: false }} math="\epsilon > 0" />，我們都找到了對應的 <InlineMath settings={{ strict: false }} math="\delta" /> 使得定義成立，故證明完畢（Q.E.D.）。
          </p>
        </ProofBox>
      </div>
    </section>
  );
}