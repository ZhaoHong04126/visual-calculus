// src/Limits/EpsilonDeltaProof.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function EpsilonDeltaProof() {
  return (
    <section className="subsection">
      <h2 className="section-title">2. $\epsilon-\delta$ 嚴格證明範例</h2>
      
      <p>
        學習了嚴格定義後，我們來看一個實際的證明。要證明極限成立，我們的目標是：給定任意一個大於 0 的誤差容忍值 <InlineMath math="\epsilon" />，我們都必須「找到」一個對應的控制範圍 <InlineMath math="\delta" /> 來滿足條件。
      </p>

      <div className="example-box">
        <h3 className="example-title">例題：</h3>
        <p>請使用極限的嚴格定義證明：<InlineMath math="\lim_{x \to 2} (3x - 1) = 5" /></p>
      </div>

      {/* 思考與草稿區 */}
      <div className="scratchpad-box">
        <h4>💡 證明前的思考（尋找 $\delta$）</h4>
        <p>
          我們要讓 <InlineMath math="|(3x - 1) - 5| < \epsilon" /> 成立。先將絕對值內的式子化簡：
        </p>
        <BlockMath math="|(3x - 1) - 5| = |3x - 6| = 3|x - 2|" />
        <p>
          因為我們希望 <InlineMath math="3|x - 2| < \epsilon" />，將兩邊同除以 3，得到：
        </p>
        <BlockMath math="|x - 2| < \frac{\epsilon}{3}" />
        <p>
          這提示了我們，只要讓 <InlineMath math="x" /> 與 2 的距離小於 <InlineMath math="\epsilon / 3" />，就能保證函數值與 5 的距離小於 <InlineMath math="\epsilon" />。因此，我們選擇 <InlineMath math="\delta = \frac{\epsilon}{3}" />。
        </p>
      </div>

      {/* 正式證明區 */}
      <div className="proof-box">
        <h4>✍️ 正式證明</h4>
        <p>
          給定任意 <InlineMath math="\epsilon > 0" />，我們取 <InlineMath math="\delta = \frac{\epsilon}{3} > 0" />。
        </p>
        <p>
          當 <InlineMath math="0 < |x - 2| < \delta" /> 時，我們有：
        </p>
        <BlockMath math="|(3x - 1) - 5| = |3x - 6|" />
        <BlockMath math="= 3|x - 2|" />
        <BlockMath math="< 3\delta" />
        <p>
          將我們設定的 <InlineMath math="\delta" /> 代入：
        </p>
        <BlockMath math="= 3\left(\frac{\epsilon}{3}\right) = \epsilon" />
        <p>
          因為對於任意 <InlineMath math="\epsilon > 0" />，我們都找到了對應的 <InlineMath math="\delta" /> 使得定義成立，故證明完畢（Q.E.D.）。
        </p>
      </div>
    </section>
  );
}