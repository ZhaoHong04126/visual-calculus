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

export default function Asymptotes() {
  return (
    <section className="subsection mt-12">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-emerald-500 pb-2">6. 漸近線 (Asymptotes) 與嚴格定義</h2>
      
      <p className="mb-4 text-gray-700">
        綜合上述的極限概念，我們可以嚴格定義函數圖形上的三種漸近線。漸近線是一條直線，當圖形向無限遠處延伸時，會與這條直線無限靠近。以下我們將給出每一種漸近線的嚴格數學定義。
      </p>

      <div className="content-block">
        
        {/* =========================================
            6.1 垂直漸近線 
        ========================================= */}
        <div className="example-box mb-8">
          <h3 className="example-title text-xl font-bold mb-3 text-blue-800">6.1 垂直漸近線 (Vertical Asymptotes)</h3>
          <p className="mb-4 text-gray-700">
            當 <InlineMath settings={{ strict: false }} math="x" /> 逼近某個有限值 <InlineMath settings={{ strict: false }} math="a" /> 時，如果函數值 <InlineMath settings={{ strict: false }} math="f(x)" /> 無限增大或無限縮小（發散至正負無窮大），這條垂直線 <InlineMath settings={{ strict: false }} math="x = a" /> 就稱為函數的垂直漸近線。
          </p>
          
          <div className="math-box p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
            <strong className="block mb-2 text-gray-800">極限定義：</strong>
            <p className="mb-4 text-gray-700">若函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 滿足下列六種極限情況中的<strong>任何一種</strong>：</p>
            
            {/* 強制響應式呈現 2x3 矩陣，小螢幕自動縮列 */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))', 
              gap: '12px', 
              marginBottom: '16px',
              width: '100%'
            }}>
              {/* Row 1: +infinity */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px 8px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', minWidth: 0, overflow: 'hidden' }}>
                <InlineMath math="\lim_{x \to a} f(x) = +\infty" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px 8px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', minWidth: 0, overflow: 'hidden' }}>
                <InlineMath math="\lim_{x \to a^+} f(x) = +\infty" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px 8px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', minWidth: 0, overflow: 'hidden' }}>
                <InlineMath math="\lim_{x \to a^-} f(x) = +\infty" />
              </div>
              
              {/* Row 2: -infinity */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px 8px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', minWidth: 0, overflow: 'hidden' }}>
                <InlineMath math="\lim_{x \to a} f(x) = -\infty" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px 8px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', minWidth: 0, overflow: 'hidden' }}>
                <InlineMath math="\lim_{x \to a^+} f(x) = -\infty" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '12px 8px', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', minWidth: 0, overflow: 'hidden' }}>
                <InlineMath math="\lim_{x \to a^-} f(x) = -\infty" />
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              則直線 <InlineMath settings={{ strict: false }} math="x = a" /> 即為 <InlineMath settings={{ strict: false }} math="f(x)" /> 的 <strong>垂直漸近線 (Vertical Asymptote)</strong>。
            </p>
          </div>
          
          <ProofBox title="ε-M 嚴格定義證明">
            <p>
              以「右極限趨近正無窮大」 (<InlineMath settings={{ strict: false }} math="\lim_{x \to a^+} f(x) = +\infty" />) 為例：
            </p>
            <p className="mt-2">
              稱直線 <InlineMath settings={{ strict: false }} math="x = a" /> 為函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 的垂直漸近線，若對於任意給定的極大正數 <InlineMath settings={{ strict: false }} math="M > 0" />，都存在一個對應的範圍 <InlineMath settings={{ strict: false }} math="\delta > 0" />，使得當自變數滿足：
            </p>
            <BlockMath settings={{ strict: false }} math="0 < x - a < \delta" />
            <p>時，函數值恆滿足：</p>
            <BlockMath settings={{ strict: false }} math="f(x) > M" />
          </ProofBox>
        </div>

        {/* =========================================
            6.2 水平漸近線 
        ========================================= */}
        <div className="example-box mb-8">
          <h3 className="example-title text-xl font-bold mb-3 text-blue-800">6.2 水平漸近線 (Horizontal Asymptotes)</h3>
          <p className="mb-4 text-gray-700">
            描述函數在 <InlineMath settings={{ strict: false }} math="x" /> 趨向正負無限大時的最終穩定狀態。
          </p>
          <div className="math-box p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
            <p className="mb-2"><strong>極限表示法：</strong>若極限存在且為有限值 <InlineMath settings={{ strict: false }} math="L" />，則直線 <InlineMath settings={{ strict: false }} math="y = L" /> 為水平漸近線：</p>
            {/* 垂直排列：公式一 → 或（置中）→ 公式二 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <BlockMath settings={{ strict: false }} math="\lim_{x \to \infty} f(x) = L" />
              <div style={{ fontWeight: 'bold', color: '#475569', margin: '-0.25rem 0', fontSize: '1rem' }}>或</div>
              <BlockMath settings={{ strict: false }} math="\lim_{x \to -\infty} f(x) = L" />
            </div>
          </div>

          <ProofBox title="嚴格定義 (以 x → ∞ 為例)">
            <p>
              稱直線 <InlineMath settings={{ strict: false }} math="y = L" /> 為函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 的水平漸近線，若對於任意給定的誤差容忍值 <InlineMath settings={{ strict: false }} math="\epsilon > 0" />，都存在一個正實數 <InlineMath settings={{ strict: false }} math="M > 0" />，使得當自變數：
            </p>
            <BlockMath settings={{ strict: false }} math="x > M" />
            <p>時，函數值與 <InlineMath settings={{ strict: false }} math="L" /> 的距離恆滿足：</p>
            <BlockMath settings={{ strict: false }} math="|f(x) - L| < \epsilon" />
          </ProofBox>
        </div>

        {/* =========================================
            6.3 斜漸近線 
        ========================================= */}
        <div className="example-box">
          <h3 className="example-title text-xl font-bold mb-3 text-blue-800">6.3 斜直線/斜漸近線 (Slant / Oblique Asymptotes)</h3>
          <p className="mb-4 text-gray-700">
            當分式函數中，分子的最高次方剛好比分母大 <InlineMath settings={{ strict: false }} math="1" /> 時會出現。此時圖形在無限遠處會趨近一條斜直線 <InlineMath settings={{ strict: false }} math="y = mx + b" />。
          </p>
          <div className="math-box p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
            <p className="mb-2"><strong>極限表示法：</strong>若存在常數 <InlineMath settings={{ strict: false }} math="m \neq 0" /> 與 <InlineMath settings={{ strict: false }} math="b" />，使得：</p>
            <BlockMath settings={{ strict: false }} math="\lim_{x \to \pm\infty} [f(x) - (mx + b)] = 0" />
            <p className="mt-2">則直線 <InlineMath settings={{ strict: false }} math="y = mx + b" /> 為函數的斜漸近線。</p>
          </div>

          <ProofBox title="嚴格定義 (以 x → ∞ 為例)">
            <p>
              稱直線 <InlineMath settings={{ strict: false }} math="y = mx + b" /> 為函數 <InlineMath settings={{ strict: false }} math="f(x)" /> 的斜漸近線，若對於任意給定的 <InlineMath settings={{ strict: false }} math="\epsilon > 0" />，都存在一個正實數 <InlineMath settings={{ strict: false }} math="M > 0" />，使得當：
            </p>
            <BlockMath settings={{ strict: false }} math="x > M" />
            <p>時，函數圖形上的點 <InlineMath settings={{ strict: false }} math="(x, f(x))" /> 與直線 <InlineMath settings={{ strict: false }} math="y = mx + b" /> 上的對應點之間的垂直距離，恆滿足：</p>
            <BlockMath settings={{ strict: false }} math="|f(x) - (mx + b)| < \epsilon" />
          </ProofBox>
          
          <div className="scratchpad-box mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
            <h4 className="font-bold mb-2">💡 尋找斜漸近線的技巧</h4>
            <p className="text-sm">
              可以使用多項式長除法，將 <InlineMath settings={{ strict: false }} math="f(x)" /> 寫成 <InlineMath settings={{ strict: false }} math="Q(x) + \frac{R(x)}{D(x)}" /> 的形式。當 <InlineMath settings={{ strict: false }} math="x \to \infty" /> 時，由於分母次數較高，餘式部分 <InlineMath settings={{ strict: false }} math="\frac{R(x)}{D(x)}" /> 的極限會趨近於 <InlineMath settings={{ strict: false }} math="0" />，剩下的商式 <InlineMath settings={{ strict: false }} math="Q(x)" /> 即為斜漸近線的方程式。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}