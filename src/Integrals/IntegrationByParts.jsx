// src/Integrals/IntegrationByParts.jsx
import React from 'react';
import { InlineMath, BlockMath } from '../components/Math';
import './ProofBox.css';

// 可摺疊解題過程元件
const SolutionBox = ({ children }) => (
  <details className="proof-box">
    <summary>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px', fontSize: '18px' }}>✏️</span>
        查看解題過程
      </div>
      <div>
        <span className="proof-toggle-btn expand-text">展開 ▼</span>
        <span className="proof-toggle-btn collapse-text">收起 ▲</span>
      </div>
    </summary>
    <div className="proof-content">{children}</div>
  </details>
);

// 可摺疊證明元件
const ProofBox = ({ title = '查看推導', children }) => (
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
    <div className="proof-content">{children}</div>
  </details>
);

export default function IntegrationByParts() {
  return (
    <section className="subsection mt-12 pt-8 border-t border-gray-100">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-rose-500 pb-2">
        2. 分部積分 (Integration by Parts, IBP)
      </h2>

      <p className="mb-6 text-gray-700 leading-relaxed">
        當被積函數是兩個函數的<strong>乘積</strong>，且無法直接換元時，我們使用
        <strong>分部積分法（IBP）</strong>。它是<strong>乘積法則 (Product Rule) 的逆運算</strong>，
        能將一個困難的積分轉化為一個更簡單的積分。
      </p>

      {/* 4.2.1 公式推導與定理 */}
      <div className="math-box mb-6 p-6 bg-rose-50 rounded-lg shadow-sm border border-rose-100">
        <h3 className="text-xl font-bold mb-3 text-rose-800">
          2.1 公式推導
        </h3>

        <div className="mb-4 p-4 bg-white/80 rounded-lg border-l-4 border-rose-500 shadow-sm">
          <h4 className="font-bold text-rose-900 mb-2">💡 核心思維：乘積法則的逆運算</h4>
          <p className="text-sm text-gray-700 leading-relaxed">
            回想乘積法則（Product Rule）：
          </p>
          <BlockMath math="(f \cdot g)' = f'g + fg'" />
          <p className="text-sm text-gray-700 mt-1">
            同時對 <InlineMath math="x" /> 積分，即可推出分部積分公式。
          </p>
        </div>

        <ProofBox title="查看完整推導">
          <div className="text-sm text-gray-700 space-y-3">
            <p>1. 對乘積法則兩邊積分：</p>
            <BlockMath math="\int (f(x)\,g(x))' \, dx = \int f'(x)\,g(x) \, dx + \int f(x)\,g'(x) \, dx" />
            <p>2. 左邊積分後還原：</p>
            <BlockMath math="f(x)\,g(x) = \int f'(x)\,g(x) \, dx + \int f(x)\,g'(x) \, dx" />
            <p>3. 移項，即得分部積分公式：</p>
            <BlockMath math="\int f(x)\,g'(x) \, dx = f(x)\,g(x) - \int f'(x)\,g(x) \, dx" />
            <p className="text-xs text-gray-500 italic">
              寫成微分形式：<InlineMath math="\displaystyle\int f\, dg = f\,g - \int g\, df" />，
              其中 <InlineMath math="dg = g'(x)\,dx" />、<InlineMath math="df = f'(x)\,dx" />。
            </p>
          </div>
        </ProofBox>

        <div className="theorem-box bg-rose-100/50 border-rose-200 text-rose-900 mt-4 mb-4">
          <strong>定理（不定積分）：</strong>
          <BlockMath math="\int f(x)\,g'(x) \, dx = f(x)\,g(x) - \int f'(x)\,g(x) \, dx" />
          <p className="text-sm mt-1 opacity-80">即：被積分的是 <InlineMath math="g'(x)" />（積分到 <InlineMath math="g" />），而 <InlineMath math="f(x)" /> 將被微分。</p>
        </div>

        <div className="theorem-box bg-rose-100/50 border-rose-200 text-rose-900">
          <strong>定理（定積分）：</strong>
          <BlockMath math="\int_a^b f(x)\,g'(x) \, dx = \Big[f(x)\,g(x)\Big]_a^b - \int_a^b f'(x)\,g(x) \, dx" />
        </div>
      </div>

      {/* 4.2.2 函數分類與選取原則 */}
      <div className="math-box mb-6 p-6 bg-slate-50 rounded-lg shadow-sm border border-slate-200 mt-8">
        <h3 className="text-xl font-bold mb-2 text-slate-800">
          2.2 如何選取 <InlineMath math="f" /> 與 <InlineMath math="g'" />：三類函數原則
        </h3>
        <p className="text-sm text-gray-600 mb-5">
          分部積分的關鍵在於：<strong>哪個函數留著當 <InlineMath math="f" />（被微分），哪個移到後面當 <InlineMath math="g'" />（被積分）</strong>。
          依函數性質可分三類，選取時讓 class 數字小的當 <InlineMath math="f" />。
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
          {/* Class 1 */}
          <div className="rounded-xl border-2 border-rose-300 bg-rose-50 overflow-hidden">
            <div className="bg-rose-500 text-white px-4 py-2 font-bold text-sm flex items-center gap-2">
              <span className="text-lg">①</span> Class 1 — <InlineMath math="f" /> 留在這
            </div>
            <div className="p-4 space-y-1 text-sm text-gray-700">
              <p className="font-semibold text-rose-800">對數函數</p>
              <p className="font-mono text-xs text-gray-500 mb-2">ln x, log x, …</p>
              <p className="font-semibold text-rose-800">反三角函數</p>
              <p className="font-mono text-xs text-gray-500">sin⁻¹x, tan⁻¹x, …</p>
            </div>
          </div>

          {/* Class 2 */}
          <div className="rounded-xl border-2 border-amber-300 bg-amber-50 overflow-hidden">
            <div className="bg-amber-500 text-white px-4 py-2 font-bold text-sm flex items-center gap-2">
              <span className="text-lg">②</span> Class 2 — 視情況
            </div>
            <div className="p-4 space-y-1 text-sm text-gray-700">
              <p className="font-semibold text-amber-800">冪函數 / 多項式</p>
              <p className="font-mono text-xs text-gray-500">x², √x, xⁿ, …</p>
            </div>
          </div>

          {/* Class 3 */}
          <div className="rounded-xl border-2 border-blue-300 bg-blue-50 overflow-hidden">
            <div className="bg-blue-500 text-white px-4 py-2 font-bold text-sm flex items-center gap-2">
              <span className="text-lg">③</span> Class 3 — 搬到後面
            </div>
            <div className="p-4 space-y-1 text-sm text-gray-700">
              <p className="font-semibold text-blue-800">指數函數</p>
              <p className="font-mono text-xs text-gray-500 mb-2">eˣ, 2ˣ, …</p>
              <p className="font-semibold text-blue-800">三角函數</p>
              <p className="font-mono text-xs text-gray-500">sin x, cos x, …</p>
            </div>
          </div>
        </div>

        {/* 流程示意 */}
        <div className="p-4 bg-white rounded-lg border border-slate-200 text-sm text-gray-700">
          <p className="font-semibold text-slate-800 mb-2">📌 選取流程</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <div className="px-4 py-2 bg-rose-100 border border-rose-300 rounded-lg text-rose-800 font-semibold">
              Class 1 / 2<br /><span className="text-xs font-normal">選作 <InlineMath math="f(x)" />（被微分）</span>
            </div>
            <div className="text-2xl text-gray-400">×</div>
            <div className="px-4 py-2 bg-blue-100 border border-blue-300 rounded-lg text-blue-800 font-semibold">
              Class 2 / 3<br /><span className="text-xs font-normal">選作 <InlineMath math="g'(x)" />（被積分）</span>
            </div>
            <div className="text-gray-500 text-lg">→</div>
            <div className="px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg text-slate-800 font-semibold">
              套入公式<br /><span className="text-xs font-normal"><InlineMath math="fg - \int f'g\,dx" /></span>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500 italic">
            ＊ 當兩函數同為 Class 3（如 <InlineMath math="e^x \cos x" />）時，可任選一個當 <InlineMath math="f" />，做兩次 IBP 後移項求解（循環型）。
          </p>
        </div>
      </div>

      {/* 4.2.3 範例 */}
      <div className="example-box mt-8 border-t-4 border-rose-500 shadow-md">
        <h3 className="example-title text-xl font-bold text-rose-900 mb-6 flex items-center">
          <span className="mr-2">📝</span> 2.3 範例練習
        </h3>

        <div className="space-y-8">

          {/* 範例 1：x e^x */}
          <div className="p-5 bg-rose-50 rounded-lg border border-rose-100">
            <p className="font-bold text-rose-900 mb-2">
              範例 1（Class 2 × Class 3）：計算 <InlineMath math="\displaystyle\int x e^x \, dx" />
            </p>
            <SolutionBox>
              <div className="text-sm text-gray-700 space-y-3">
                <p>
                  <strong>選取：</strong> <InlineMath math="x" />（Class 2）當 <InlineMath math="f" />，<InlineMath math="e^x" />（Class 3）當 <InlineMath math="g'" /><br />
                  令 <InlineMath math="f(x) = x" />，<InlineMath math="g'(x) = e^x" />
                </p>
                <p>
                  <strong>微分與積分：</strong><br />
                  <InlineMath math="f'(x) = 1" />，<InlineMath math="g(x) = e^x" />
                </p>
                <p><strong>套入公式：</strong></p>
                <BlockMath math="\int x e^x \, dx = x e^x - \int 1 \cdot e^x \, dx" />
                <BlockMath math="= x e^x - e^x + C = e^x(x - 1) + C" />
              </div>
            </SolutionBox>
          </div>

          {/* 範例 2：x ln x */}
          <div className="p-5 bg-rose-50 rounded-lg border border-rose-100">
            <p className="font-bold text-rose-900 mb-2">
              範例 2（Class 1 × Class 2）：計算 <InlineMath math="\displaystyle\int x \ln x \, dx" />
            </p>
            <SolutionBox>
              <div className="text-sm text-gray-700 space-y-3">
                <p>
                  <strong>選取：</strong> <InlineMath math="\ln x" />（Class 1）當 <InlineMath math="f" />，<InlineMath math="x" />（Class 2）當 <InlineMath math="g'" /><br />
                  令 <InlineMath math="f(x) = \ln x" />，<InlineMath math="g'(x) = x" />
                </p>
                <p>
                  <strong>微分與積分：</strong><br />
                  <InlineMath math="f'(x) = \dfrac{1}{x}" />，<InlineMath math="g(x) = \dfrac{x^2}{2}" />
                </p>
                <p><strong>套入公式：</strong></p>
                <BlockMath math="\int x \ln x \, dx = \frac{x^2}{2} \ln x - \int \frac{x^2}{2} \cdot \frac{1}{x} \, dx" />
                <BlockMath math="= \frac{x^2}{2} \ln x - \frac{x^2}{4} + C" />
              </div>
            </SolutionBox>
          </div>

          {/* 範例 3：x^2 sin x（兩次 IBP） */}
          <div className="p-5 bg-rose-50 rounded-lg border border-rose-100">
            <p className="font-bold text-rose-900 mb-2">
              範例 3（需做兩次 IBP）：計算 <InlineMath math="\displaystyle\int x^2 \sin x \, dx" />
            </p>
            <SolutionBox>
              <div className="text-sm text-gray-700 space-y-3">
                <p className="font-semibold text-rose-700">第一次：令 <InlineMath math="f = x^2" />（Class 2），<InlineMath math="g' = \sin x" />（Class 3）</p>
                <p>
                  <InlineMath math="f' = 2x" />，<InlineMath math="g = -\cos x" />
                </p>
                <BlockMath math="\int x^2 \sin x \, dx = -x^2 \cos x + \int 2x \cos x \, dx" />

                <p className="font-semibold text-rose-700 mt-2">第二次：處理 <InlineMath math="\int 2x \cos x \, dx" />，令 <InlineMath math="f = 2x" />，<InlineMath math="g' = \cos x" /></p>
                <p>
                  <InlineMath math="f' = 2" />，<InlineMath math="g = \sin x" />
                </p>
                <BlockMath math="\int 2x \cos x \, dx = 2x \sin x - \int 2 \sin x \, dx = 2x \sin x + 2\cos x" />

                <p className="font-semibold text-rose-700 mt-2">合併結果：</p>
                <BlockMath math="\int x^2 \sin x \, dx = -x^2 \cos x + 2x \sin x + 2\cos x + C" />
              </div>
            </SolutionBox>
          </div>

          {/* 範例 4：e^x cos x（循環 IBP） */}
          <div className="p-5 bg-rose-50 rounded-lg border border-rose-100">
            <p className="font-bold text-rose-900 mb-2">
              範例 4（循環型 IBP）：計算 <InlineMath math="\displaystyle\int e^x \cos x \, dx" />
            </p>
            <div className="mb-2 p-3 bg-amber-50 border-l-4 border-amber-400 rounded text-xs text-amber-800">
              ⚠️ 兩函數同為 Class 3，做兩次 IBP 後積分式循環出現，移項解方程式即可。
            </div>
            <SolutionBox>
              <div className="text-sm text-gray-700 space-y-3">
                <p>令 <InlineMath math="I = \displaystyle\int e^x \cos x \, dx" /></p>

                <p className="font-semibold text-rose-700">第一次：令 <InlineMath math="f = \cos x" />，<InlineMath math="g' = e^x" /></p>
                <p>
                  <InlineMath math="f' = -\sin x" />，<InlineMath math="g = e^x" />
                </p>
                <BlockMath math="I = e^x \cos x + \int e^x \sin x \, dx" />

                <p className="font-semibold text-rose-700 mt-2">第二次：處理 <InlineMath math="\int e^x \sin x \, dx" />，令 <InlineMath math="f = \sin x" />，<InlineMath math="g' = e^x" /></p>
                <p>
                  <InlineMath math="f' = \cos x" />，<InlineMath math="g = e^x" />
                </p>
                <BlockMath math="\int e^x \sin x \, dx = e^x \sin x - \int e^x \cos x \, dx = e^x \sin x - I" />

                <p className="font-semibold text-rose-700 mt-2">代回並移項：</p>
                <BlockMath math="I = e^x \cos x + e^x \sin x - I" />
                <BlockMath math="2I = e^x(\cos x + \sin x)" />
                <BlockMath math="\therefore \int e^x \cos x \, dx = \frac{e^x(\cos x + \sin x)}{2} + C" />
              </div>
            </SolutionBox>
          </div>

          {/* 範例 5：定積分 */}
          <div className="p-5 bg-rose-50 rounded-lg border border-rose-100">
            <p className="font-bold text-rose-900 mb-2">
              範例 5（定積分）：計算 <InlineMath math="\displaystyle\int_0^1 x e^x \, dx" />
            </p>
            <SolutionBox>
              <div className="text-sm text-gray-700 space-y-3">
                <p>
                  令 <InlineMath math="f(x) = x" />，<InlineMath math="g'(x) = e^x" /><br />
                  <InlineMath math="f'(x) = 1" />，<InlineMath math="g(x) = e^x" />
                </p>
                <BlockMath math="\int_0^1 x e^x \, dx = \Big[x e^x\Big]_0^1 - \int_0^1 e^x \, dx" />
                <BlockMath math="= (1 \cdot e - 0) - \Big[e^x\Big]_0^1" />
                <BlockMath math="= e - (e - 1) = 1" />
              </div>
            </SolutionBox>
          </div>

        </div>
      </div>

      {/* 4.2.4 表格法（Tabular Method） */}
      <div className="math-box mt-8 p-6 bg-amber-50 rounded-lg shadow-sm border border-amber-100">
        <h3 className="text-xl font-bold mb-3 text-amber-800">
          2.4 表格法 (Tabular Method)
        </h3>
        <p className="text-sm text-gray-700 mb-1">
          當 <InlineMath math="f(x)" /> 為<strong>多項式</strong>，需要多次重複分部積分時，
          可以使用<strong>表格法</strong>快速展開，避免逐步計算的繁瑣。
        </p>
        <p className="text-sm text-gray-700 mb-4">
          核心概念：<InlineMath math="f(x)" /> 放在<strong>不動（留在原地）</strong>欄，持續微分；
          <InlineMath math="g(x)" /> 放在<strong>動（搬到後面）</strong>欄，持續積分。再沿斜線交叉相乘，正負號交替。
        </p>

        {/* 一般公式 */}
        <div className="mb-5 p-4 bg-white/80 rounded-lg border border-amber-200 text-sm text-gray-700">
          <p className="font-semibold text-amber-800 mb-2">一般公式</p>
          <p className="mb-2 text-xs text-gray-500">
            令 <InlineMath math="G_1(x) = \int g(x)\,dx" />，<InlineMath math="G_2(x) = \int G_1(x)\,dx" />，……，<InlineMath math="G_n(x) = \int G_{n-1}(x)\,dx" />
          </p>

          {/* 表格示意圖 */}
          <div className="overflow-x-auto mb-3">
            <table className="integral-table text-center text-sm" style={{ minWidth: '360px' }}>
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>微分 ↓</th>
                  <th>不動 <InlineMath math="f(x)" /></th>
                  <th>動 <InlineMath math="g(x)" /></th>
                  <th style={{ width: '60px' }}>積分 ↓</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td></td>
                  <td><InlineMath math="f(x)" /></td>
                  <td><InlineMath math="g(x)" /></td>
                  <td></td>
                </tr>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td></td>
                  <td><InlineMath math="f'(x)" /></td>
                  <td><InlineMath math="G_1(x)" /></td>
                  <td></td>
                </tr>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td></td>
                  <td><InlineMath math="f''(x)" /></td>
                  <td><InlineMath math="G_2(x)" /></td>
                  <td></td>
                </tr>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="text-gray-400 text-lg">⋮</td>
                  <td className="text-gray-400">⋮</td>
                  <td className="text-gray-400">⋮</td>
                  <td></td>
                </tr>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td></td>
                  <td><InlineMath math="f^{(n)}(x)" /></td>
                  <td><InlineMath math="G_n(x)" /></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-1">沿斜線交叉相乘，正負號依序交替（＋－＋－…）：</p>
          <BlockMath math="\int f(x)\,g(x)\,dx = f(x)G_1(x) - f'(x)G_2(x) + f''(x)G_3(x) - \cdots + (-1)^n \int f^{(n)}(x)\,G_n(x)\,dx" />
          <p className="text-xs text-gray-500 italic">當 <InlineMath math="f(x)" /> 為多項式時，微分至 0 即可停止，最後一行的積分項消失。</p>
        </div>

        {/* 範例：∫t²eᵗ dt */}
        <div className="p-4 bg-white/80 rounded-lg border border-amber-200 text-sm text-gray-700">
          <p className="font-semibold text-amber-800 mb-3">範例：計算 <InlineMath math="\displaystyle\int t^2 e^t \, dt" /></p>
          <p className="mb-2 text-xs text-gray-500">
            令 <InlineMath math="f(t) = t^2" />（不動，持續微分），<InlineMath math="g(t) = e^t" />（動，持續積分）：
          </p>

          <div className="overflow-x-auto mb-3">
            <table className="integral-table text-center text-sm" style={{ minWidth: '320px' }}>
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>符號</th>
                  <th>不動（微分）</th>
                  <th>動（積分）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="font-bold text-green-700">＋</td>
                  <td><InlineMath math="t^2" /></td>
                  <td><InlineMath math="e^t" /></td>
                </tr>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="font-bold text-red-600">－</td>
                  <td><InlineMath math="2t" /></td>
                  <td><InlineMath math="e^t" /></td>
                </tr>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="font-bold text-green-700">＋</td>
                  <td><InlineMath math="2" /></td>
                  <td><InlineMath math="e^t" /></td>
                </tr>
                <tr className="hover:bg-amber-50 transition-colors">
                  <td className="font-bold text-red-600">－</td>
                  <td><InlineMath math="0" /></td>
                  <td><InlineMath math="e^t" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-semibold text-amber-800 mb-1">斜線交叉相乘後加總：</p>
          <BlockMath math="\int t^2 e^t \, dt = t^2 e^t - 2t e^t + 2 e^t + C = e^t(t^2 - 2t + 2) + C" />
        </div>
      </div>


      {/* 4.2.5 常見錯誤 */}
      <div className="mt-8 p-5 bg-red-50 rounded-lg border border-red-200">
        <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
          <span className="mr-2">⚠️</span> 2.5 常見錯誤
        </h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-3">
            <span className="text-red-500 font-bold flex-shrink-0">✗</span>
            <div>
              <p className="font-semibold">選錯 <InlineMath math="f" /> 與 <InlineMath math="g'" />：</p>
              <p>若將難以積分的函數（如 <InlineMath math="\ln x" />）放到 <InlineMath math="g'" /> 側，積分會更困難。請依三類原則選取。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold flex-shrink-0">✗</span>
            <div>
              <p className="font-semibold">循環型忘記移項：</p>
              <p>當積分 <InlineMath math="I" /> 循環出現時，要移項解方程式，切勿無限迭代。</p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-red-500 font-bold flex-shrink-0">✗</span>
            <div>
              <p className="font-semibold">定積分忘記代入上下限至邊界項：</p>
              <p><InlineMath math="\Big[f(x)g(x)\Big]_a^b" /> 項也需要代入 <InlineMath math="a" /> 與 <InlineMath math="b"  /> 求值，不能只計算積分部分。</p>
            </div>
          </li>
        </ul>
      </div>

    </section>
  );
}
