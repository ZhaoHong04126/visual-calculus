// src/Integrals/Integrals.jsx
import Antiderivatives from './Antiderivatives';
import DefiniteIntegrals from './DefiniteIntegrals';
import FundamentalTheorem from './FundamentalTheorem';
import SectionNav from '../components/SectionNav';
import './Integrals.css';

export default function Integrals() {
  const sections = [
    { id: 'definite', title: '黎曼和與定積分' },
    { id: 'antiderivatives', title: '反導數與不定積分' },
    { id: 'ftc', title: '微積分基本定理' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第六章：反導數與積分</h1>
        <p className="text-lg mt-2 text-gray-600">
          從面積的逼近到變化的還原，探索積分學的奧秘。
        </p>
      </header>

      <SectionNav sections={sections} />

      <div id="definite"><DefiniteIntegrals /></div>

      <div id="antiderivatives"><Antiderivatives /></div>

      <div id="ftc"><FundamentalTheorem /></div>
    </div>
  );
}
