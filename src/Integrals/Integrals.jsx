// src/Integrals/Integrals.jsx
import Antiderivatives from './Antiderivatives';
import DefiniteIntegrals from './DefiniteIntegrals';
import FundamentalTheorem from './FundamentalTheorem';
import SectionNav from '../components/SectionNav';
import ComingSoon from '../components/ComingSoon';
import './Integrals.css';

export default function Integrals() {
  const sections = [
    { id: 'definite', title: '黎曼和與定積分' },
    { id: 'antiderivatives', title: '反導數與不定積分' },
    { id: 'ftc', title: '微積分基本定理' },
    { id: 'substitution', title: '代換積分法' },
    { id: 'parts', title: '分部積分法' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第七章：反導數與積分</h1>
        <p className="text-lg mt-2 text-gray-600">
          從面積的逼近到變化的還原，探索積分學的奧秘。
        </p>
      </header>

      <SectionNav sections={sections} />

      <div id="definite"><DefiniteIntegrals /></div>

      <div id="antiderivatives"><Antiderivatives /></div>

      <div id="ftc"><FundamentalTheorem /></div>

      <div id="substitution" className="mt-12 pt-8 border-t border-gray-100">
        <h2 className="section-title text-2xl font-bold mb-4 opacity-50">4. 代換積分法 (Coming Soon)</h2>
      </div>

      <div id="parts" className="mt-12 pt-8 border-t border-gray-100">
        <h2 className="section-title text-2xl font-bold mb-4 opacity-50">5. 分部積分法 (Coming Soon)</h2>
      </div>
    </div>
  );
}
