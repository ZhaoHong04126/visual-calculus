import React from 'react';
import { InlineMath } from '../components/Math';

export default function Theorems() {
  return (
    <section className="subsection mt-8">
        <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">9.2 相關定理</h2>

        <div className="math-box p-6 bg-red-50 rounded-lg shadow-sm border border-red-200 mb-8">
          <h3 className="text-xl font-bold mb-3 text-red-800">一、極限與連續</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-red-200">
              <thead className="bg-red-100 text-red-900">
                <tr>
                  <th className="py-2 px-4 border border-red-200 font-bold w-1/4">定理名稱</th>
                  <th className="py-2 px-4 border border-red-200 font-bold">定理內容</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="py-3 px-4 border border-red-200 font-semibold">夾擠定理<br /><span className="text-sm font-normal text-gray-500">Squeeze Theorem</span></td>
                  <td className="py-3 px-4 border border-red-200">
                    若在 <InlineMath math="c" /> 附近皆有 <InlineMath math="f(x) \le g(x) \le h(x)" />，<br />
                    且 <InlineMath math="\lim_{x \to c} f(x) = \lim_{x \to c} h(x) = L" />，則 <InlineMath math="\lim_{x \to c} g(x) = L" />。
                  </td>
                </tr>
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="py-3 px-4 border border-red-200 font-semibold">勘根定理 (IVT)<br /><span className="text-sm font-normal text-gray-500">Intermediate Value Theorem</span></td>
                  <td className="py-3 px-4 border border-red-200">
                    若 <InlineMath math="f" /> 在閉區間 <InlineMath math="[a, b]" /> 上連續，且 <InlineMath math="N" /> 介於 <InlineMath math="f(a)" /> 與 <InlineMath math="f(b)" /> 之間，<br />
                    則存在至少一點 <InlineMath math="c \in (a, b)" /> 使得 <InlineMath math="f(c) = N" />。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-3 text-red-800">二、微分與積分</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-red-200">
              <thead className="bg-red-100 text-red-900">
                <tr>
                  <th className="py-2 px-4 border border-red-200 font-bold w-1/4">定理名稱</th>
                  <th className="py-2 px-4 border border-red-200 font-bold">定理內容</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="py-3 px-4 border border-red-200 font-semibold">羅必達法則<br /><span className="text-sm font-normal text-gray-500">L'Hôpital's Rule</span></td>
                  <td className="py-3 px-4 border border-red-200">
                    若 <InlineMath math="\lim_{x \to c} \frac{f(x)}{g(x)}" /> 產生 <InlineMath math="\frac{0}{0}" /> 或 <InlineMath math="\frac{\infty}{\infty}" /> 的不定型，<br />
                    且 <InlineMath math="\lim_{x \to c} \frac{f'(x)}{g'(x)}" /> 存在，則 <InlineMath math="\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}" />。
                  </td>
                </tr>
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="py-3 px-4 border border-red-200 font-semibold">羅爾定理<br /><span className="text-sm font-normal text-gray-500">Rolle's Theorem</span></td>
                  <td className="py-3 px-4 border border-red-200">
                    若 <InlineMath math="f" /> 在 <InlineMath math="[a, b]" /> 連續、在 <InlineMath math="(a, b)" /> 可微，且 <InlineMath math="f(a) = f(b)" />，<br />
                    則存在 <InlineMath math="c \in (a, b)" /> 使得 <InlineMath math="f'(c) = 0" />。
                  </td>
                </tr>
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="py-3 px-4 border border-red-200 font-semibold">均值定理 (MVT)<br /><span className="text-sm font-normal text-gray-500">Mean Value Theorem</span></td>
                  <td className="py-3 px-4 border border-red-200">
                    若 <InlineMath math="f" /> 在 <InlineMath math="[a, b]" /> 連續、在 <InlineMath math="(a, b)" /> 可微，<br />
                    則存在 <InlineMath math="c \in (a, b)" /> 使得 <InlineMath math="f'(c) = \frac{f(b) - f(a)}{b - a}" />。
                  </td>
                </tr>
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="py-3 px-4 border border-red-200 font-semibold">微積分基本定理 I<br /><span className="text-sm font-normal text-gray-500">FTC Part 1</span></td>
                  <td className="py-3 px-4 border border-red-200">
                    若 <InlineMath math="f" /> 在 <InlineMath math="[a, b]" /> 連續，則 <InlineMath math="g(x) = \int_a^x f(t) \,dt" /> 在 <InlineMath math="(a, b)" /> 可微，<br />
                    且 <InlineMath math="g'(x) = f(x)" />。
                  </td>
                </tr>
                <tr className="hover:bg-red-50/50 transition-colors">
                  <td className="py-3 px-4 border border-red-200 font-semibold">微積分基本定理 II<br /><span className="text-sm font-normal text-gray-500">FTC Part 2</span></td>
                  <td className="py-3 px-4 border border-red-200">
                    若 <InlineMath math="f" /> 在 <InlineMath math="[a, b]" /> 連續，且 <InlineMath math="F" /> 為 <InlineMath math="f" /> 的反導數，<br />
                    則 <InlineMath math="\int_a^b f(x) \,dx = F(b) - F(a)" />。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
  );
}
