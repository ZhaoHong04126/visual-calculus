import React from 'react';
import { InlineMath } from '../components/Math';

export default function BasicCalculusFormulas() {
  return (
    <section className="subsection mt-8">
      <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-orange-500 pb-2">9.4 基礎函數微積分公式</h2>

      <div className="math-box p-6 bg-orange-50 rounded-lg shadow-sm border border-orange-200 mb-8">

        <h3 className="text-xl font-bold mb-3 text-orange-800">一、代數與冪函數 (Algebraic and Power Functions)</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-orange-200">
            <thead className="bg-orange-100 text-orange-900">
              <tr>
                <th className="py-2 px-4 border border-orange-200 font-bold w-1/4">函數類型</th>
                <th className="py-2 px-4 border border-orange-200 font-bold w-1/3">微分公式 (Derivative)</th>
                <th className="py-2 px-4 border border-orange-200 font-bold">不定積分 (Integral)</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">常數函數</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(c) = 0" /></td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\int c \,dx = cx + C" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">冪函數 (Power Rule)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(x^n) = nx^{n-1}" /></td>
                <td className="py-3 px-4 border border-orange-200">
                  <InlineMath math="\int x^n \,dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)" />
                </td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">倒數函數</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\frac{1}{x}) = -\frac{1}{x^2}" /></td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\int \frac{1}{x} \,dx = \ln|x| + C" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-3 text-orange-800">二、指數與對數函數 (Exponential and Logarithmic)</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-orange-200">
            <thead className="bg-orange-100 text-orange-900">
              <tr>
                <th className="py-2 px-4 border border-orange-200 font-bold w-1/4">函數類型</th>
                <th className="py-2 px-4 border border-orange-200 font-bold w-1/3">微分公式 (Derivative)</th>
                <th className="py-2 px-4 border border-orange-200 font-bold">不定積分 (Integral)</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">自然指數函數</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(e^x) = e^x" /></td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\int e^x \,dx = e^x + C" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">一般指數函數</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(a^x) = a^x \ln a" /></td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\int a^x \,dx = \frac{a^x}{\ln a} + C" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-3 text-orange-800">三、三角函數 (Trigonometric Functions)</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-orange-200">
            <thead className="bg-orange-100 text-orange-900">
              <tr>
                <th className="py-2 px-4 border border-orange-200 font-bold w-1/4">函數</th>
                <th className="py-2 px-4 border border-orange-200 font-bold w-1/3">微分公式 (Derivative)</th>
                <th className="py-2 px-4 border border-orange-200 font-bold">不定積分 (Integral)</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">正弦 (sin)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\sin x) = \cos x" /></td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\int \cos x \,dx = \sin x + C" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">餘弦 (cos)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\cos x) = -\sin x" /></td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\int \sin x \,dx = -\cos x + C" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">正切 (tan)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\tan x) = \sec^2 x" /></td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\int \sec^2 x \,dx = \tan x + C" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">餘切 (cot)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\cot x) = -\csc^2 x" /></td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\int \csc^2 x \,dx = -\cot x + C" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">正割 (sec)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\sec x) = \sec x \tan x" /></td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\int \sec x \tan x \,dx = \sec x + C" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">餘割 (csc)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\csc x) = -\csc x \cot x" /></td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\int \csc x \cot x \,dx = -\csc x + C" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-3 text-orange-800">四、反三角函數 (Inverse Trigonometric Functions)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded shadow-sm border border-orange-200">
            <thead className="bg-orange-100 text-orange-900">
              <tr>
                <th className="py-2 px-4 border border-orange-200 font-bold w-1/4">函數</th>
                <th className="py-2 px-4 border border-orange-200 font-bold">微分公式 (Derivative)</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">反正弦 (arcsin)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\arcsin x) = \frac{1}{\sqrt{1-x^2}}" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">反餘弦 (arccos)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\arccos x) = -\frac{1}{\sqrt{1-x^2}}" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">反正切 (arctan)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\arctan x) = \frac{1}{1+x^2}" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">反餘切 (arccot)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\text{arccot } x) = -\frac{1}{1+x^2}" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">反正割 (arcsec)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\text{arcsec } x) = \frac{1}{|x|\sqrt{x^2-1}}" /></td>
              </tr>
              <tr className="hover:bg-orange-50/50 transition-colors">
                <td className="py-3 px-4 border border-orange-200 font-semibold">反餘割 (arccsc)</td>
                <td className="py-3 px-4 border border-orange-200"><InlineMath math="\frac{d}{dx}(\text{arccsc } x) = -\frac{1}{|x|\sqrt{x^2-1}}" /></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
