// src/Techniques/Techniques.jsx
import USubstitution from '../Integrals/USubstitution';
import IntegrationByParts from '../Integrals/IntegrationByParts';
import SectionNav from '../components/SectionNav';
import '../Integrals/Integrals.css';

export default function Techniques() {
  const sections = [
    { id: 'substitution', title: '變數變換法 (u-Substitution)' },
    { id: 'parts', title: '分部積分法 (Integration by Parts)' },
    { id: 'trig-integrals', title: '三角函數的積分 (Coming Soon)' },
    { id: 'trig-sub', title: '三角變換法 (Coming Soon)' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第七章：積分技巧</h1>
        <p className="text-lg mt-2 text-gray-600">
          掌握變數變換、分部積分等核心技巧，化簡複雜積分求解。
        </p>
      </header>

      <SectionNav sections={sections} />

      <div id="substitution">
        <USubstitution />
      </div>

      <div id="parts">
        <IntegrationByParts />
      </div>

      <div id="trig-integrals" className="mt-8 pt-4 ml-6 border-t border-gray-50">
        <h3 className="section-subtitle text-xl font-bold mb-4 opacity-50">
          3. 三角函數的積分 (Coming Soon)
        </h3>
        <p className="text-sm text-gray-400 italic ml-1">
          ※ 這小節是為下一小節做準備。( 後續會更新內容，請耐心等候。原因是作者的學校期中考剛好考到分部積分!! )
        </p>
      </div>

      <div id="trig-sub" className="mt-8 pt-4 ml-6 border-t border-gray-50">
        <h3 className="section-subtitle text-xl font-bold mb-4 opacity-50">
          4. 三角變換法 (Coming Soon)
        </h3>
      </div>
    </div>
  );
}
