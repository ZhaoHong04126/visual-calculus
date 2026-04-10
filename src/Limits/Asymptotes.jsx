// src/Limits/Asymptotes.jsx
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

export default function Asymptotes() {
  return (
    <section className="subsection">
      <h2 className="section-title">5. 漸近線 (Asymptotes) 與嚴格定義</h2>
      
      <p>
        綜合上述的極限概念，我們可以嚴格定義函數圖形上的三種漸近線。漸近線是一條直線，當圖形向無限遠處延伸時，會與這條直線無限靠近。以下我們將給出每一種漸近線的嚴格數學定義。
      </p>

      <div className="content-block">
        
        {/* =========================================
            5.1 垂直漸近線 
        ========================================= */}
        <div className="example-box">
          <h3 className="example-title">5.1 垂直漸近線 (Vertical Asymptotes)</h3>
          <p>
            當 <InlineMath settings={{ strict: false }} math="x" /> 逼近某個有限值 <InlineMath settings={{ strict: false }} math="a" /> 時，如果函數值 <InlineMath settings={{ strict: false }} math="f(x)" /> 無限增大或無限縮小（發散至正負無窮大），這條垂直線 <InlineMath settings={{ strict: false }} math="x = a" /> 就稱為函數的垂直漸近線。
          </p>
          
          <div className="math-box">
            <strong>嚴格定義：</strong>
            <p>若函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 滿足下列六種極限情況中的<strong>任何一種</strong>：</p>
            
            {/* 使用 CSS Grid 排版 6 種極限情況 */}
            <div className="limit-grid">
              <div className="limit-item"><BlockMath settings={{ strict: false }} math="\lim_{x \to a} f(x) = +\infty" /></div>
              <div className="limit-item"><BlockMath settings={{ strict: false }} math="\lim_{x \to a^+} f(x) = +\infty" /></div>
              <div className="limit-item"><BlockMath settings={{ strict: false }} math="\lim_{x \to a^-} f(x) = +\infty" /></div>
              <div className="limit-item"><BlockMath settings={{ strict: false }} math="\lim_{x \to a} f(x) = -\infty" /></div>
              <div className="limit-item"><BlockMath settings={{ strict: false }} math="\lim_{x \to a^+} f(x) = -\infty" /></div>
              <div className="limit-item"><BlockMath settings={{ strict: false }} math="\lim_{x \to a^-} f(x) = -\infty" /></div>
            </div>

            <p className="mt-4">
              則直線 <InlineMath settings={{ strict: false }} math="x = a" /> 即為 <InlineMath settings={{ strict: false }} math="f(x)" /> 的 <strong>垂直漸近線 (Vertical Asymptote)</strong>。
            </p>
          </div>
          
          <div className="proof-box">
            <h4>✍️ $\epsilon-M$ 嚴格定義證明</h4>
            <p>
              以「右極限趨近正無窮大」 (<InlineMath settings={{ strict: false }} math="\lim_{x \to a^+} f(x) = +\infty" />) 為例：
            </p>
            <p>
              稱直線 <InlineMath settings={{ strict: false }} math="x = a" /> 為函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 的垂直漸近線，若對於任意給定的極大正數 <InlineMath settings={{ strict: false }} math="M > 0" />，都存在一個對應的範圍 <InlineMath settings={{ strict: false }} math="\delta > 0" />，使得當自變數滿足：
            </p>
            <BlockMath settings={{ strict: false }} math="0 < x - a < \delta" />
            <p>時，函數值恆滿足：</p>
            <BlockMath settings={{ strict: false }} math="f(x) > M" />
          </div>
        </div>

        {/* =========================================
            5.2 水平漸近線 
        ========================================= */}
        <div className="example-box">
          <h3 className="example-title">5.2 水平漸近線 (Horizontal Asymptotes)</h3>
          <p>
            描述函數在 <InlineMath settings={{ strict: false }} math="x" /> 趨向正負無限大時的最終穩定狀態。
          </p>
          <div className="math-box">
            <p><strong>極限表示法：</strong>若極限存在且為有限值 <InlineMath settings={{ strict: false }} math="L" />，則直線 <InlineMath settings={{ strict: false }} math="y = L" /> 為水平漸近線：</p>
            <BlockMath settings={{ strict: false }} math="\lim_{x \to \infty} f(x) = L \quad \text{或} \quad \lim_{x \to -\infty} f(x) = L" />
          </div>

          <div className="proof-box">
            <h4>✍️ 嚴格定義 (以 $x \to \infty$ 為例)</h4>
            <p>
              稱直線 <InlineMath settings={{ strict: false }} math="y = L" /> 為函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 的水平漸近線，若對於任意給定的誤差容忍值 <InlineMath settings={{ strict: false }} math="\epsilon > 0" />，都存在一個正實數 <InlineMath settings={{ strict: false }} math="M > 0" />，使得當自變數：
            </p>
            <BlockMath settings={{ strict: false }} math="x > M" />
            <p>時，函數值與 <InlineMath settings={{ strict: false }} math="L" /> 的距離恆滿足：</p>
            <BlockMath settings={{ strict: false }} math="|f(x) - L| < \epsilon" />
          </div>
        </div>

        {/* =========================================
            5.3 斜漸近線 
        ========================================= */}
        <div className="example-box">
          <h3 className="example-title">5.3 斜直線/斜漸近線 (Slant / Oblique Asymptotes)</h3>
          <p>
            當分式函數中，分子的最高次方剛好比分母大 <InlineMath settings={{ strict: false }} math="1" /> 時會出現。此時圖形在無限遠處會趨近一條斜直線 <InlineMath settings={{ strict: false }} math="y = mx + b" />。
          </p>
          <div className="math-box">
            <p><strong>極限表示法：</strong>若存在常數 <InlineMath settings={{ strict: false }} math="m \neq 0" /> 與 <InlineMath settings={{ strict: false }} math="b" />，使得：</p>
            <BlockMath settings={{ strict: false }} math="\lim_{x \to \pm\infty} [f(x) - (mx + b)] = 0" />
            <p>則直線 <InlineMath settings={{ strict: false }} math="y = mx + b" /> 為函數的斜漸近線。</p>
          </div>

          <div className="proof-box">
            <h4>✍️ 嚴格定義 (以 $x \to \infty$ 為例)</h4>
            <p>
              稱直線 <InlineMath settings={{ strict: false }} math="y = mx + b" /> 為函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 的斜漸近線，若對於任意給定的 <InlineMath settings={{ strict: false }} math="\epsilon > 0" />，都存在一個正實數 <InlineMath settings={{ strict: false }} math="M > 0" />，使得當：
            </p>
            <BlockMath settings={{ strict: false }} math="x > M" />
            <p>時，函數圖形上的點 <InlineMath settings={{ strict: false }} math="(x, f(x))" /> 與直線 <InlineMath settings={{ strict: false }} math="y = mx + b" /> 上的對應點之間的垂直距離，恆滿足：</p>
            <BlockMath settings={{ strict: false }} math="|f(x) - (mx + b)| < \epsilon" />
          </div>
          
          <div className="scratchpad-box mt-4">
            <h4>💡 尋找斜漸近線的技巧</h4>
            <p>
              可以使用多項式長除法，將 <InlineMath settings={{ strict: false }} math="f(x)" /> 寫成 <InlineMath settings={{ strict: false }} math="Q(x) + \frac{R(x)}{D(x)}" /> 的形式。當 <InlineMath settings={{ strict: false }} math="x \to \infty" /> 時，由於分母次數較高，餘式部分 <InlineMath settings={{ strict: false }} math="\frac{R(x)}{D(x)}" /> 的極限會趨近於 <InlineMath settings={{ strict: false }} math="0" />，剩下的商式 <InlineMath settings={{ strict: false }} math="Q(x)" /> 即為斜漸近線的方程式。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}