/* eslint-disable react/prop-types */
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './Formulas.css';
import './ProofBox.css';

/// 定義與其他章節統一的 ProofBox 元件
const ProofBox = ({ title = "查看推導", children }) => {
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

export default function AlgebraTrigFormulas({ showDerivations = true }) {
  return (
    <div className="section-content">
      <h2 id="algebra-trig" className="section-title text-2xl font-bold mb-4 border-b-2 border-emerald-500 pb-2">
        1. 代數與三角公式 (Algebra & Trigonometry)
      </h2>
      
      {/* 1.1 指數與對數性質 */}
      <h3 className="text-xl font-bold mt-8 mb-4 text-emerald-800">1.1 指數與對數性質</h3>
      <div className="compact-formula-grid">
        <div className="formula-container">
          <table className="formula-table">
            <thead>
              <tr>
                <th style={{ width: '120px' }}>指數法則</th>
                <th style={{ width: '220px' }}>公式</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>相乘</td>
                <td className="math-cell"><InlineMath math="a^m \cdot a^n = a^{m+n}" /></td>
              </tr>
              <tr>
                <td>相除</td>
                <td className="math-cell"><InlineMath math="\dfrac{a^m}{a^n} = a^{m-n}" /></td>
              </tr>
              <tr>
                <td>冪次</td>
                <td className="math-cell"><InlineMath math="(a^m)^n = a^{mn}" /></td>
              </tr>
              <tr>
                <td>展開</td>
                <td className="math-cell"><InlineMath math="(ab)^n = a^n b^n" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="formula-container">
          <table className="formula-table">
            <thead>
              <tr>
                <th style={{ width: '120px' }}>對數法則</th>
                <th style={{ width: '220px' }}>公式</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>乘法變加法</td>
                <td className="math-cell"><InlineMath math="\log_a (xy) = \log_a x + \log_a y" /></td>
              </tr>
              <tr>
                <td>除法變減法</td>
                <td className="math-cell"><InlineMath math="\log_a (\frac{x}{y}) = \log_a x - \log_a y" /></td>
              </tr>
              <tr>
                <td>冪次提出</td>
                <td className="math-cell"><InlineMath math="\log_a (x^n) = n \log_a x" /></td>
              </tr>
              <tr>
                <td>換底公式</td>
                <td className="math-cell"><InlineMath math="\log_a x = \dfrac{\ln x}{\ln a}" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 1.2 三角函數基本恆等式 */}
      <h3 className="text-xl font-bold mt-12 mb-4 text-emerald-800">1.2 三角函數基本恆等式</h3>
      <div className="compact-formula-grid">
        <div className="formula-container">
          <table className="formula-table">
            <thead>
              <tr>
                <th style={{ width: '180px' }}>畢氏恆等式</th>
                <th style={{ width: '250px' }}>公式</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sine & Cosine</td>
                <td className="math-cell"><InlineMath math="\sin^2 \theta + \cos^2 \theta = 1" /></td>
              </tr>
              <tr>
                <td>Tangent & Secant</td>
                <td className="math-cell"><InlineMath math="1 + \tan^2 \theta = \sec^2 \theta" /></td>
              </tr>
              <tr>
                <td>Cotangent & Cosecant</td>
                <td className="math-cell"><InlineMath math="1 + \cot^2 \theta = \csc^2 \theta" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="formula-container">
          <table className="formula-table">
            <thead>
              <tr>
                <th style={{ width: '180px' }}>負角與餘角公式</th>
                <th style={{ width: '250px' }}>公式</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>負角 sin</td>
                <td className="math-cell"><InlineMath math="\sin(-\theta) = -\sin \theta" /></td>
              </tr>
              <tr>
                <td>負角 cos</td>
                <td className="math-cell"><InlineMath math="\cos(-\theta) = \cos \theta" /></td>
              </tr>
              <tr>
                <td>餘角 sin</td>
                <td className="math-cell"><InlineMath math="\sin(\frac{\pi}{2}-\theta) = \cos \theta" /></td>
              </tr>
              <tr>
                <td>餘角 cos</td>
                <td className="math-cell"><InlineMath math="\cos(\frac{\pi}{2}-\theta) = \sin \theta" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-12 mb-4 text-amber-800">1.3 和角、倍角、半角與積化和差</h3>
      <div className="formula-container">
        <table className="formula-table" style={{ width: 'auto', minWidth: '800px' }}>
          <thead>
            <tr>
              <th style={{ width: '150px' }}>類型</th>
              <th style={{ minWidth: '400px' }}>公式內容</th>
              <th style={{ width: '350px' }}>用途與推導</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>和角公式 (Addition)</td>
              <td className="math-cell pt-4 pb-4">
                <BlockMath math="\sin(\alpha \pm \beta) = \sin \alpha \cos \beta \pm \cos \alpha \sin \beta" />
                <BlockMath math="\cos(\alpha \pm \beta) = \cos \alpha \cos \beta \mp \sin \alpha \sin \beta" />
                <BlockMath math="\tan(\alpha \pm \beta) = \frac{\tan \alpha \pm \tan \beta}{1 \mp \tan \alpha \tan \beta}" />
              </td>
              <td className="text-sm text-gray-600">
                <p className="font-bold">口訣：</p>
                <p>Sin: 山谷谷山</p>
                <p>Cos: 谷谷山山</p>
                {showDerivations && (
                  <ProofBox title="查看幾何推導">
                    <div style={{ minWidth: '300px' }}>
                      <p>利用單位圓座標旋轉或距離公式證明。</p>
                      <p className="mt-2">例如 <InlineMath math="\cos(\alpha-\beta)" /> 可視為圓上兩點：</p>
                      <BlockMath math="P(\cos\alpha, \sin\alpha), Q(\cos\beta, \sin\beta)" />
                      <p>利用兩點間距離公式展開即可得證。</p>
                    </div>
                  </ProofBox>
                )}
              </td>
            </tr>
            <tr>
              <td>倍角公式 (Double)</td>
              <td className="math-cell pt-4 pb-4">
                <BlockMath math="\sin 2\theta = 2\sin \theta \cos \theta" />
                <div className="mt-4">
                  <BlockMath math="\begin{aligned} \cos 2\theta &= \cos^2 \theta - \sin^2 \theta \\ &= 2\cos^2 \theta - 1 \\ &= 1 - 2\sin^2 \theta \end{aligned}" />
                </div>
              </td>
              <td className="text-sm text-gray-600">
                <p className="font-bold text-amber-700">用途：</p>
                <p>求積分時常用</p>
                {showDerivations && (
                  <ProofBox title="推導提示">
                    <div style={{ minWidth: '300px' }}>
                      <p>由和角公式令 <InlineMath math="\alpha = \beta = \theta" />：</p>
                      <BlockMath math="\sin(\theta+\theta) = \sin\theta\cos\theta + \cos\theta\sin\theta" />
                      <BlockMath math="\implies \sin 2\theta = 2\sin\theta\cos\theta" />
                    </div>
                  </ProofBox>
                )}
              </td>
            </tr>
            <tr>
              <td>半角降次 (Square)</td>
              <td className="math-cell pt-6 pb-6">
                <table style={{ width: '100%', border: 'none', background: 'transparent', tableLayout: 'auto' }}>
                  <tbody>
                    <tr>
                      <td style={{ border: 'none', padding: '12px 80px 12px 0', verticalAlign: 'middle', background: 'transparent', whiteSpace: 'nowrap' }}>
                        <InlineMath math="\displaystyle \sin^2 \theta = \frac{1 - \cos 2\theta}{2}" />
                      </td>
                      <td style={{ border: 'none', padding: '12px 0', verticalAlign: 'middle', background: 'transparent', whiteSpace: 'nowrap' }}>
                        <InlineMath math="\displaystyle \sin \frac{\theta}{2} = \pm \sqrt{\frac{1 - \cos \theta}{2}}" />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: 'none', padding: '12px 80px 12px 0', verticalAlign: 'middle', background: 'transparent', whiteSpace: 'nowrap' }}>
                        <InlineMath math="\displaystyle \cos^2 \theta = \frac{1 + \cos 2\theta}{2}" />
                      </td>
                      <td style={{ border: 'none', padding: '12px 0', verticalAlign: 'middle', background: 'transparent', whiteSpace: 'nowrap' }}>
                        <InlineMath math="\displaystyle \cos \frac{\theta}{2} = \pm \sqrt{\frac{1 + \cos \theta}{2}}" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="text-sm text-gray-600">
                <p className="font-bold text-amber-700">用途：</p>
                <p>求積分時常用</p>
                {showDerivations && (
                  <ProofBox title="推導提示">
                    <div style={{ minWidth: '300px' }}>
                      <p>由 Cos 倍角公式移項：</p>
                      <BlockMath math="\cos 2\theta = 1 - 2\sin^2\theta" />
                      <BlockMath math="\implies 2\sin^2\theta = 1 - \cos 2\theta" />
                      <p>令 <InlineMath math="\theta \to \theta/2" /> 即可得公式。</p>
                    </div>
                  </ProofBox>
                )}
              </td>
            </tr>
            <tr>
              <td>三倍角公式 (Triple)</td>
              <td className="math-cell pt-4 pb-4">
                <BlockMath math="\sin 3\theta = 3 \sin \theta - 4 \sin^3 \theta" />
                <BlockMath math="\cos 3\theta = 4 \cos^3 \theta - 3 \cos \theta" />
              </td>
              <td className="text-sm text-gray-600">
                <p className="font-bold text-amber-700">用途：</p>
                <p>求積分時常用</p>
                <p className="font-bold mt-2">口訣：</p>
                <p>Sin: 山 - 富士山</p>
                <p>Cos: 4元3 - 3元</p>
                {showDerivations && (
                  <ProofBox title="推導提示">
                    <div style={{ minWidth: '350px' }}>
                      <p>利用 <InlineMath math="\sin(2\theta + \theta)" /> 拆解：</p>
                      <BlockMath math="\sin(2\theta+\theta) = \sin 2\theta \cos\theta + \cos 2\theta \sin\theta" />
                      <p>再代入倍角公式換算為純正弦項。</p>
                    </div>
                  </ProofBox>
                )}
              </td>
            </tr>
            <tr>
              <td>積化和差 (P2S)</td>
              <td className="math-cell pt-4 pb-4">
                <BlockMath math="\sin \alpha \cos \beta = \frac{1}{2}[\sin(\alpha+\beta) + \sin(\alpha-\beta)]" />
                <BlockMath math="\cos \alpha \cos \beta = \frac{1}{2}[\cos(\alpha+\beta) + \cos(\alpha-\beta)]" />
                <BlockMath math="\sin \alpha \sin \beta = -\frac{1}{2}[\cos(\alpha+\beta) - \cos(\alpha-\beta)]" />
              </td>
              <td className="text-sm text-gray-600">
                <p className="font-bold text-amber-700">用途：</p>
                <p>求積分時常用</p>
                <p className="font-bold mt-2">口訣：</p>
                <p>山谷 = 1/2 (山 + 山)</p>
                <p>谷谷 = 1/2 (谷 + 谷)</p>
                <p>山山 = -1/2 (谷 - 谷)</p>
                {showDerivations && (
                  <ProofBox title="具體推導">
                    <div className="space-y-4" style={{ minWidth: '400px' }}>
                      <div>
                        <p className="font-bold border-b border-blue-200 mb-2">1. <InlineMath math="\sin\alpha\cos\beta" /></p>
                        <BlockMath math="\sin(A+B) + \sin(A-B) = 2\sin A \cos B" />
                      </div>
                      <div>
                        <p className="font-bold border-b border-blue-200 mb-2">2. <InlineMath math="\cos\alpha\cos\beta" /></p>
                        <BlockMath math="\cos(A+B) + \cos(A-B) = 2\cos A \cos B" />
                      </div>
                      <div>
                        <p className="font-bold border-b border-blue-200 mb-2">3. <InlineMath math="\sin\alpha\sin\beta" /></p>
                        <BlockMath math="\cos(A+B) - \cos(A-B) = -2\sin A \sin B" />
                        <p className="text-gray-500 italic mt-1">註：移項後係數為 <InlineMath math="-1/2" />。</p>
                      </div>
                    </div>
                  </ProofBox>
                )}
              </td>
            </tr>
            <tr>
              <td>和差化積 (S2P)</td>
              <td className="math-cell pt-4 pb-4">
                <p className="text-xs text-gray-500 mb-2">令 <InlineMath math="\alpha = \frac{x+y}{2}, \beta = \frac{x-y}{2}" /></p>
                <BlockMath math="\sin x + \sin y = 2 \sin\frac{x+y}{2} \cos\frac{x-y}{2}" />
                <BlockMath math="\sin x - \sin y = 2 \cos\frac{x+y}{2} \sin\frac{x-y}{2}" />
                <BlockMath math="\cos x + \cos y = 2 \cos\frac{x+y}{2} \cos\frac{x-y}{2}" />
                <BlockMath math="\cos x - \cos y = -2 \sin\frac{x+y}{2} \sin\frac{x-y}{2}" />
              </td>
              <td className="text-sm text-gray-600">
                <p className="font-bold text-amber-700">用途：</p>
                <p>求極限時常用</p>
                {showDerivations && (
                  <ProofBox title="具體推導">
                    <div className="space-y-4" style={{ minWidth: '450px' }}>
                      <p className="italic underline underline-offset-4">原理：變數代換 <InlineMath math="x=A+B, y=A-B" /> 回代積化和差</p>
                      <div className="space-y-2">
                        <BlockMath math="1.\ \sin x + \sin y = 2\sin\frac{x+y}{2}\cos\frac{x-y}{2}" />
                        <BlockMath math="2.\ \sin x - \sin y = 2\cos\frac{x+y}{2}\sin\frac{x-y}{2}" />
                        <BlockMath math="3.\ \cos x + \cos y = 2\cos\frac{x+y}{2}\cos\frac{x-y}{2}" />
                        <BlockMath math="4.\ \cos x - \cos y = -2\sin\frac{x+y}{2}\sin\frac{x-y}{2}" />
                      </div>
                    </div>
                  </ProofBox>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
