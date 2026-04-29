import React from 'react';
import { InlineMath } from '../components/Math';

export default function FormulaTable() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">9.3 三角公式表</h2>

      <div className="math-box p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-200 mb-8">

        <h3 className="text-xl font-bold mb-3 text-blue-800">一、基礎三角恆等式 (Fundamental Identities)</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-blue-200">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="py-2 px-4 border border-blue-200 font-bold w-1/4">類別</th>
                <th className="py-2 px-4 border border-blue-200 font-bold">公式內容</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="hover:bg-blue-50/50 transition-colors">
                <td className="py-3 px-4 border border-blue-200 font-semibold">商數關係</td>
                <td className="py-3 px-4 border border-blue-200">
                  <div className="space-y-2">
                    <div><InlineMath math="\tan x = \frac{\sin x}{\cos x}" /></div>
                    <div><InlineMath math="\cot x = \frac{\cos x}{\sin x}" /></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-blue-50/50 transition-colors">
                <td className="py-3 px-4 border border-blue-200 font-semibold">倒數關係</td>
                <td className="py-3 px-4 border border-blue-200">
                  <div className="space-y-2">
                    <div><InlineMath math="\csc x = \frac{1}{\sin x}" /></div>
                    <div><InlineMath math="\sec x = \frac{1}{\cos x}" /></div>
                    <div><InlineMath math="\cot x = \frac{1}{\tan x}" /></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-blue-50/50 transition-colors">
                <td className="py-3 px-4 border border-blue-200 font-semibold">平方關係</td>
                <td className="py-3 px-4 border border-blue-200">
                  <div className="space-y-2">
                    <div><InlineMath math="\sin^2 x + \cos^2 x = 1" /></div>
                    <div><InlineMath math="1 + \tan^2 x = \sec^2 x" /></div>
                    <div><InlineMath math="1 + \cot^2 x = \csc^2 x" /></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-3 text-blue-800">二、和差角公式 (Sum and Difference Formulas)</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-blue-200">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="py-2 px-4 border border-blue-200 font-bold w-1/4">函數</th>
                <th className="py-2 px-4 border border-blue-200 font-bold">公式內容</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="hover:bg-blue-50/50 transition-colors">
                <td className="py-3 px-4 border border-blue-200 font-semibold">正弦 (Sine)</td>
                <td className="py-3 px-4 border border-blue-200"><InlineMath math="\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B" /></td>
              </tr>
              <tr className="hover:bg-blue-50/50 transition-colors">
                <td className="py-3 px-4 border border-blue-200 font-semibold">餘弦 (Cosine)</td>
                <td className="py-3 px-4 border border-blue-200"><InlineMath math="\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B" /></td>
              </tr>
              <tr className="hover:bg-blue-50/50 transition-colors">
                <td className="py-3 px-4 border border-blue-200 font-semibold">正切 (Tangent)</td>
                <td className="py-3 px-4 border border-blue-200"><InlineMath math="\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-3 text-blue-800">三、倍角與半角公式 (Double and Half Angle)</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-blue-200">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="py-2 px-4 border border-blue-200 font-bold w-1/4">類別</th>
                <th className="py-2 px-4 border border-blue-200 font-bold">公式內容</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="hover:bg-blue-50/50 transition-colors">
                <td className="py-3 px-4 border border-blue-200 font-semibold">二倍角公式</td>
                <td className="py-3 px-4 border border-blue-200">
                  <div className="space-y-2">
                    <div><InlineMath math="\sin 2x = 2 \sin x \cos x" /></div>
                    <div className="text-blue-600 font-bold"><InlineMath math="\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x" /></div>
                    <div><InlineMath math="\tan 2x = \frac{2\tan x}{1 - \tan^2 x}" /></div>
                  </div>
                </td>
              </tr>
              <tr className="bg-yellow-50 hover:bg-yellow-100 transition-colors">
                <td className="py-3 px-4 border border-blue-200 font-semibold">
                  <div>降次公式 / 半角</div>
                  <div className="mt-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700 border border-red-200">
                      ⭐ 積分極重要
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 border border-blue-200">
                  <div className="space-y-2">
                    <div><InlineMath math="\sin^2 x = \frac{1 - \cos 2x}{2}" /></div>
                    <div><InlineMath math="\cos^2 x = \frac{1 + \cos 2x}{2}" /></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-3 text-blue-800">四、積化和差與和差化積</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-blue-200">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="py-2 px-4 border border-blue-200 font-bold w-1/4">類別</th>
                <th className="py-2 px-4 border border-blue-200 font-bold">公式內容</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="bg-yellow-50 hover:bg-yellow-100 transition-colors">
                <td className="py-3 px-4 border border-blue-200 font-semibold">
                  <div>積化和差</div>
                  <div className="mt-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                      ⭐ 積分重要
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 border border-blue-200">
                  <div className="space-y-2">
                    <div><InlineMath math="\sin A \cos B = \frac{1}{2} [\sin(A+B) + \sin(A-B)]" /></div>
                    <div><InlineMath math="\cos A \sin B = \frac{1}{2} [\sin(A+B) - \sin(A-B)]" /></div>
                    <div><InlineMath math="\cos A \cos B = \frac{1}{2} [\cos(A+B) + \cos(A-B)]" /></div>
                    <div><InlineMath math="\sin A \sin B = -\frac{1}{2} [\cos(A+B) - \cos(A-B)]" /></div>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-blue-50/50 transition-colors">
                <td className="py-3 px-4 border border-blue-200 font-semibold">和差化積</td>
                <td className="py-3 px-4 border border-blue-200">
                  <div className="space-y-2">
                    <div><InlineMath math="\sin x + \sin y = 2 \sin\frac{x+y}{2} \cos\frac{x-y}{2}" /></div>
                    <div><InlineMath math="\sin x - \sin y = 2 \cos\frac{x+y}{2} \sin\frac{x-y}{2}" /></div>
                    <div><InlineMath math="\cos x + \cos y = 2 \cos\frac{x+y}{2} \cos\frac{x-y}{2}" /></div>
                    <div><InlineMath math="\cos x - \cos y = -2 \sin\frac{x+y}{2} \sin\frac{x-y}{2}" /></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
