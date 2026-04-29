import React from 'react';
import { InlineMath } from '../components/Math';

export default function AdvancedFormulas() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-rose-500 pb-2">9.5 進階公式</h2>

      <div className="math-box p-6 bg-rose-50 rounded-lg shadow-sm border border-rose-200 mb-8">
        <h3 className="text-xl font-bold mb-3 text-rose-800">一、三角函數積分形式 (Trigonometric Integral Forms)</h3>
        <p className="text-sm text-gray-600 mb-4">適用於高次冪三角函數的積分，通常使用遞迴公式 (Reduction Formulas) 或代換法：</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-rose-200">
            <thead className="bg-rose-100 text-rose-900">
              <tr>
                <th className="py-2 px-4 border border-rose-200 font-bold w-1/3">積分類型</th>
                <th className="py-2 px-4 border border-rose-200 font-bold">遞迴公式 / 策略</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {/* 正弦函數次幂積分 */}
              <tr className="hover:bg-rose-50/50 transition-colors">
                <td className="py-3 px-4 border border-rose-200 font-semibold align-top">
                  <InlineMath math="\int \sin^n x \,dx" /><br />
                </td>
                <td className="py-3 px-4 border border-rose-200">
                  <div className="space-y-4">
                    <div className="bg-white p-3 rounded border border-rose-100 shadow-sm">
                      <div className="font-bold text-rose-700 mb-2">以 <InlineMath math="\int \sin^n x \,dx" /> 為例 (n=1~4)：</div>
                      <div className="text-sm space-y-2">
                        <div>(1) <InlineMath math="\int \sin x \,dx = - \cos x + C" /></div>
                        <div>(2) <InlineMath math="\int \sin^2 x \,dx =  \frac{1}{2}x - \frac{1}{4}\sin 2x + C" /></div>
                        <div>(3) <InlineMath math="\int \sin^3 x \,dx = \frac{1}{3} \cos ^3 x \, -\cos x + C" /></div>
                        <div>(4) <InlineMath math="\int \sin^4 x \,dx = \frac{3}{8} x \, - \frac{1}{4} \sin 2x \, + \frac{1}{32} \sin 4x + C" /></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              {/* 餘弦函數次幂積分 */}
              <tr className="hover:bg-rose-50/50 transition-colors">
                <td className="py-3 px-4 border border-rose-200 font-semibold align-top">
                  <InlineMath math="\int \cos^n x \,dx" />
                </td>
                <td className="py-3 px-4 border border-rose-200">
                  <div className="space-y-4">
                    <div className="bg-white p-3 rounded border border-rose-100 shadow-sm">
                      <div className="font-bold text-rose-700 mb-2">以 <InlineMath math="\int \cos^n x \,dx" /> 為例 (n=1~4)：</div>
                      <div className="text-sm space-y-2">
                        <div>(1) <InlineMath math="\int \cos x \,dx = \sin x + C" /></div>
                        <div>(2) <InlineMath math="\int \cos^2 x \,dx = \frac{1}{2}x + \frac{1}{4}\sin 2x + C" /></div>
                        <div>(3) <InlineMath math="\int \cos^3 x \,dx = \sin x - \frac{1}{3}\sin^3 x + C" /></div>
                        <div>(4) <InlineMath math="\int \cos^4 x \,dx = \frac{1}{8}(3x + 2\sin 2x + \frac{1}{4}\sin 4x) + C" /></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              {/* 正餘弦函數乘積次幂積分 */}
              <tr className="hover:bg-rose-50/50 transition-colors">
                <td className="py-3 px-4 border border-rose-200 font-semibold">
                  <InlineMath math="\int \sin^m x \cos^n x \,dx" />
                </td>
                <td className="py-3 px-4 border border-rose-200"></td>
              </tr>
              {/* 正切函數次幂積分 */}
              <tr className="hover:bg-rose-50/50 transition-colors">
                <td className="py-3 px-4 border border-rose-200 font-semibold">
                  <InlineMath math="\int \tan^n x \,dx" />
                </td>
                <td className="py-3 px-4 border border-rose-200"></td>
              </tr>
              {/* 正割函數次幂積分 */}
              <tr className="hover:bg-rose-50/50 transition-colors">
                <td className="py-3 px-4 border border-rose-200 font-semibold">
                  <InlineMath math="\int \sec^n x \,dx" />
                </td>
                <td className="py-3 px-4 border border-rose-200"></td>
              </tr>
              {/* 正切函數與正割函數乘積次幂積分 */}
              <tr className="hover:bg-rose-50/50 transition-colors">
                <td className="py-3 px-4 border border-rose-200 font-semibold">
                  <InlineMath math="\int \tan^m x \sec^n x \,dx" />
                </td>
                <td className="py-3 px-4 border border-rose-200"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
