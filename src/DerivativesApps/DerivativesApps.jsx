import MeanValueTheorem from './MeanValueTheorem';
import Monotonicity from './Monotonicity';
import Extrema from './Extrema';
import ConcavityInflection from './ConcavityInflection';
import LHopital from './LHopital';
import Optimization from './Optimization';
import LinearApproximation from './LinearApproximation';
import NewtonsMethod from './NewtonsMethod';
import SectionNav from '../components/SectionNav';
import './DerivativesApps.css';

export default function DerivativesApps() {
  const sections = [
    { id: 'mvt', title: '均值定理' },
    { id: 'monotonicity', title: '單調性' },
    { id: 'extrema', title: '極值' },
    { id: 'concavity', title: '凹凸性' },
    { id: 'lhopital', title: '羅必達' },
    { id: 'optimization', title: '最佳化' },
    { id: 'linear', title: '線性逼近' },
    { id: 'newton', title: '牛頓法' },
  ];

  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第五章：微分的應用</h1>
        <p className="text-lg mt-2 text-gray-600">
          探索微分在分析函數性狀、解極值與求逼近值中的核心應用。
        </p>
      </header>

      <SectionNav sections={sections} />

      <div id="mvt"><MeanValueTheorem /></div>
      <div id="monotonicity"><Monotonicity /></div>
      <div id="extrema"><Extrema /></div>
      <div id="concavity"><ConcavityInflection /></div>
      <div id="lhopital"><LHopital /></div>
      <div id="optimization"><Optimization /></div>
      <div id="linear"><LinearApproximation /></div>
      <div id="newton"><NewtonsMethod /></div>
    </div>
  );
}
