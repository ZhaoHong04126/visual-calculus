// src/Review/Review.jsx
import React from 'react';
import './Review.css';
import { InlineMath, BlockMath } from '../components/Math';
import TrigHexagon from './TrigHexagon';

export default function Review() {
  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">複習：國高中數學重點公式</h1>
        <p>在開始微積分之旅前，我們先快速複習一下國高中常見的代數、幾何與三角函數公式。這些是理解微積分的重要基石。</p>
      </header>

      <section className="review-section">
        <h2 className="review-section-title">1. 代數基礎</h2>
        <div className="formula-grid">
          <div className="formula-card">
            <h3>乘法公式與因式分解</h3>
            <ul className="formula-list">
              <li><InlineMath math="(a+b)^2 = a^2 + 2ab + b^2" /></li>
              <li><InlineMath math="(a-b)^2 = a^2 - 2ab + b^2" /></li>
              <li><InlineMath math="(a+b)(a-b) = a^2 - b^2" /></li>
              <li><InlineMath math="a^3 + b^3 = (a+b)(a^2 - ab + b^2)" /></li>
              <li><InlineMath math="a^3 - b^3 = (a-b)(a^2 + ab + b^2)" /></li>
            </ul>
            <details className="derivation-box">
              <summary>過程推導：分配律與展開</summary>
              <div className="derivation-steps">
                <div className="step-item">
                  <div className="step-desc">平方公式 (a+b)²：</div>
                  <BlockMath math="(a+b)(a+b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2" />
                </div>
                <div className="step-item">
                  <div className="step-desc">立方和公式 a³+b³：</div>
                  <BlockMath math="(a+b)(a^2 - ab + b^2) = (a^3 - a^2b + ab^2) + (ba^2 - ab^2 + b^3) = a^3 + b^3" />
                </div>
              </div>
            </details>
          </div>
          <div className="formula-card">
            <h3>二次方程式解的公式</h3>
            <p>對於 <InlineMath math="ax^2 + bx + c = 0" />：</p>
            <BlockMath math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
            <p>判別式 <InlineMath math="D = b^2 - 4ac" /></p>
            <details className="derivation-box">
              <summary>過程推導：配方法</summary>
              <div className="derivation-steps">
                <div className="step-item">
                  <div className="step-desc">1. 移項並除以 a：</div>
                  <BlockMath math="x^2 + \frac{b}{a}x = -\frac{c}{a}" />
                </div>
                <div className="step-item">
                  <div className="step-desc">2. 兩邊補上一次項係數一半的平方：</div>
                  <BlockMath math="x^2 + \frac{b}{a}x + (\frac{b}{2a})^2 = \frac{b^2}{4a^2} - \frac{c}{a}" />
                </div>
                <div className="step-item">
                  <div className="step-desc">3. 化簡與開根號：</div>
                  <BlockMath math="(x + \frac{b}{2a})^2 = \frac{b^2 - 4ac}{4a^2}" />
                  <BlockMath math="x + \frac{b}{2a} = \pm \frac{\sqrt{b^2 - 4ac}}{2a}" />
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="review-section">
        <h2 className="review-section-title">2. 指數與對數</h2>
        <div className="formula-grid">
          <div className="formula-card">
            <h3>指數性質</h3>
            <ul className="formula-list">
              <li><InlineMath math="a^m \cdot a^n = a^{m+n}" /></li>
              <li><InlineMath math="(a^m)^n = a^{mn}" /></li>
              <li><InlineMath math="(ab)^n = a^n b^n" /></li>
              <li><InlineMath math="a^{-n} = \frac{1}{a^n}" /></li>
            </ul>
            <details className="derivation-box">
              <summary>過程推導：指數律邏輯</summary>
              <div className="derivation-steps">
                <div className="step-item">
                  <div className="step-desc">乘法結合：</div>
                  <p>依定義 <InlineMath math="a^m" /> 為 m 個 a 相乘，兩組相乘即為 m+n 個 a。</p>
                </div>
                <div className="step-item">
                  <div className="step-desc">負指數定義：</div>
                  <p>為了維持 <InlineMath math="a^m / a^n = a^{m-n}" /> 的規律，當 n &gt; m 時出現分式，故定義 <InlineMath math="a^{-n} = 1/a^n" />。</p>
                </div>
              </div>
            </details>
          </div>
          <div className="formula-card">
            <h3>對數性質</h3>
            <ul className="formula-list">
              <li><InlineMath math="\log_a(xy) = \log_a x + \log_a y" /></li>
              <li><InlineMath math="\log_a(\frac{x}{y}) = \log_a x - \log_a y" /></li>
              <li><InlineMath math="\log_a(x^n) = n \log_a x" /></li>
              <li>換底公式：<InlineMath math="\log_a b = \frac{\log_c b}{\log_c a}" /></li>
            </ul>
            <details className="derivation-box">
              <summary>過程推導：對數性質全解析</summary>
              <div className="derivation-steps">
                <div className="step-item">
                  <div className="step-desc">1. 相加與相乘：</div>
                  <p>設 <InlineMath math="x=a^m, y=a^n" />，則 <InlineMath math="\log_a(xy) = \log_a(a^{m+n}) = m+n = \log_ax + \log_ay" /></p>
                </div>
                <div className="step-item">
                  <div className="step-desc">2. 換底公式：</div>
                  <p>設 <InlineMath math="\log_a b = x \Rightarrow a^x = b" />。兩邊取 log_c：</p>
                  <BlockMath math="x \log_c a = \log_c b \Rightarrow x = \frac{\log_c b}{\log_c a}" />
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="review-section">
        <h2 className="review-section-title">3. 三角函數</h2>
        <div className="formula-grid">
          <div className="formula-card">
            <h3>基本恆等式</h3>
            <div className="side-by-side">
              <ul className="formula-list side-by-side-list">
                <li><InlineMath math="\sin^2 \theta + \cos^2 \theta = 1" /></li>
                <li><InlineMath math="\displaystyle \tan \theta = \frac{\sin \theta}{\cos \theta}" /></li>
                <li><InlineMath math="1 + \tan^2 \theta = \sec^2 \theta" /></li>
              </ul>
              <TrigHexagon />
            </div>
            <details className="derivation-box">
              <summary>過程推導：畢氏定理與定義</summary>
              <div className="derivation-steps">
                <div className="step-item">
                  <div className="step-desc">畢氏恆等式：</div>
                  <p>在單位圓中 <InlineMath math="x^2+y^2=1" />，代入 <InlineMath math="x=\cos\theta, y=\sin\theta" /> 即得。</p>
                </div>
                <div className="step-item">
                  <div className="step-desc">1 + tan²θ = sec²θ：</div>
                  <p>將 <InlineMath math="\sin^2\theta + \cos^2\theta = 1" /> 同除以 <InlineMath math="\cos^2\theta" />：</p>
                  <BlockMath math="\frac{\sin^2\theta}{\cos^2\theta} + \frac{\cos^2\theta}{\cos^2\theta} = \frac{1}{\cos^2\theta} \Rightarrow \tan^2\theta + 1 = \sec^2\theta" />
                </div>
              </div>
            </details>
          </div>
          <div className="formula-card">
            <h3>和角與倍角公式</h3>
            <ul className="formula-list">
              <li><InlineMath math="\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B" /></li>
              <li><InlineMath math="\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B" /></li>
              <li><InlineMath math="\sin 2\theta = 2 \sin \theta \cos \theta" /></li>
              <li><InlineMath math="\cos 2\theta = \cos^2 \theta - \sin^2 \theta" /></li>
            </ul>
            <details className="derivation-box">
              <summary>過程推導：倍角公式</summary>
              <div className="derivation-steps">
                <div className="step-item">
                  <div className="step-desc">由和角公式令 A = B = θ：</div>
                  <BlockMath math="\sin(2\theta) = \sin\theta\cos\theta + \cos\theta\sin\theta = 2\sin\theta\cos\theta" />
                  <BlockMath math="\cos(2\theta) = \cos\theta\cos\theta - \sin\theta\sin\theta = \cos^2\theta - \sin^2\theta" />
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="review-section">
        <h2 className="review-section-title">4. 幾何公式</h2>
        <div className="formula-grid">
          <div className="formula-card">
            <h3>平面幾何</h3>
            <ul className="formula-list">
              <li>三角形面積：<InlineMath math="\displaystyle A = \frac{1}{2}bh" /></li>
              <li>圓面積：<InlineMath math="A = \pi r^2" /></li>
              <li>圓周長：<InlineMath math="C = 2\pi r" /></li>
              <li>海龍公式：<InlineMath math="A = \sqrt{s(s-a)(s-b)(s-c)}" /></li>
            </ul>
            <details className="derivation-box">
              <summary>過程推導：幾何邏輯</summary>
              <div className="derivation-steps">
                <div className="step-item">
                  <div className="step-desc">圓面積與周長：</div>
                  <p>在微積分中，我們將圓切成無數個極小的扇形，近似於三角形，其面積加計即為 <InlineMath math="\pi r^2" />。</p>
                </div>
                <div className="step-item">
                  <div className="step-desc">海龍公式：</div>
                  <p>利用餘弦定理求出 <InlineMath math="\cos C" />，轉為 <InlineMath math="\sin C" /> 後代入面積公式 <InlineMath math="\frac{1}{2}ab\sin C" /> 化簡而得。</p>
                </div>
              </div>
            </details>
          </div>
          <div className="formula-card">
            <h3>立體幾何</h3>
            <ul className="formula-list">
              <li>球體體積：<InlineMath math="V = \frac{4}{3}\pi r^3" /></li>
              <li>球體表面積：<InlineMath math="A = 4\pi r^2" /></li>
              <li>圓錐體積：<InlineMath math="\displaystyle V = \frac{1}{3}\pi r^2 h" /></li>
            </ul>
            <details className="derivation-box">
              <summary>過程推導：微積分預告</summary>
              <div className="derivation-steps">
                <div className="step-item">
                  <div className="step-desc">球體體積：</div>
                  <p>利用微積分的「圓盤法」，對圓的截面積進行積分：</p>
                  <BlockMath math="V = \int_{-r}^{r} \pi(r^2 - x^2) dx = \frac{4}{3}\pi r^3" />
                </div>
                <div className="step-item">
                  <div className="step-desc">圓錐體積：</div>
                  <p>圓錐是圓柱體積的 1/3，這可以透過卡瓦列里原理或是積分截面積得出。</p>
                </div>
              </div>
            </details>
          </div>
          <div className="formula-card">
            <h3>幾何定理</h3>
            <ul className="formula-list">
              <li>畢氏定理：<InlineMath math="a^2 + b^2 = c^2" /></li>
              <li>正弦定理：<InlineMath math="\displaystyle \frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R" /></li>
              <li>餘弦定理：<InlineMath math="c^2 = a^2 + b^2 - 2ab \cos C" /></li>
              <li>相似三角形：對應邊成比例，對應角相等</li>
            </ul>
            <details className="derivation-box">
              <summary>過程推導：餘弦定理與相似性</summary>
              <div className="derivation-steps">
                <div className="step-item">
                  <div className="step-desc">餘弦定理簡述：</div>
                  <p>這是畢氏定理在非直角三角形中的推廣，可透過投影幾何或是座標系中的兩點距離公式導出。</p>
                </div>
                <div className="step-item">
                  <div className="step-desc">相似三角形 (微積分中的關鍵)：</div>
                  <p>在微積分的「相關變率 (Related Rates)」問題中（例如圓錐容器注水），常利用截面相似三角形的比例關係 <InlineMath math="r/h = R/H" /> 來減少變數，這是極其重要的運算技巧。</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
