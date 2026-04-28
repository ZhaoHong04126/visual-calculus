import React from 'react';
import { InlineMath } from '../components/Math';

export default function QuestionBank() {
  return (
    <section className="subsection mt-8">
        <h2 className="section-title text-2xl font-bold mb-4 border-b-2 border-green-500 pb-2">9.4 精選題庫</h2>
        <div className="math-box p-6 bg-green-50 rounded-lg shadow-sm border border-green-200">
          <p className="text-gray-800 mb-4">
            我們正在準備各章節的練習題，以幫助您測試對微積分概念的理解。題庫功能將於後續更新中推出！
          </p>
          <div className="flex justify-center mt-6">
            <div className="bg-white px-6 py-3 rounded-full border-2 border-green-300 text-green-700 font-bold shadow-sm">
              🚀 敬請期待 Coming Soon
            </div>
          </div>
        </div>
      </section>
  );
}
