// src/Limits/DiscontinuityVisualizer.jsx
import React, { useState } from 'react';
import { InlineMath } from '../components/Math';

export default function DiscontinuityVisualizer() {
  const [type, setType] = useState('removable');
  const [xVal, setXVal] = useState(0);

  // 座標轉換函數 (將數學座標轉為 SVG 畫布座標)
  const mapX = (x) => 200 + x * 40;
  const mapY = (y) => 200 - y * 40;

  // 根據選擇的類型設定圖表參數
  const config = {
    removable: {
      title: '可移除',
      funcDesc: 'f(x) = \\frac{x^2 - 4}{x - 2}',
      a: 2,
      min: -1,
      max: 5,
      getY: (x) => (x === 2 ? null : x + 2),
      description: '極限趨近 4，但在 x=2 無定義。',
    },
    jump: {
      title: '跳躍',
      funcDesc: 'f(x) = \\frac{x}{|x|}',
      a: 0,
      min: -3,
      max: 3,
      getY: (x) => (x === 0 ? null : Math.sign(x) * 2),
      description: '左右極限不相等，形成斷層。',
    },
    infinite: {
      title: '無窮',
      funcDesc: 'f(x) = \\frac{1}{x^2}',
      a: 0,
      min: -3,
      max: 3,
      getY: (x) => (x === 0 ? null : Math.min(1 / (x * x), 10)),
      description: '趨向無限大，形成垂直漸近線。',
    }
  };

  const current = config[type];
  const currentY = current.getY(xVal);

  return (
    <div style={{ 
      maxWidth: '650px', 
      margin: '1rem auto', 
      padding: '1rem', 
      backgroundColor: 'white', 
      borderRadius: '12px', 
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      fontSize: '14px'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'flex-start', 
        gap: '1.5rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {/* 左側：圖形 (1) */}
        <div style={{ 
          flex: '0 0 auto',
          width: '240px', 
          height: '240px', 
          border: '1px solid #e2e8f0', 
          borderRadius: '8px', 
          backgroundColor: '#f8fafc',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
            {/* 網格與座標軸 */}
            <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="200" y1="0" x2="200" y2="400" stroke="#cbd5e1" strokeWidth="2" />
            
            {/* 繪製函數圖形 */}
            {type === 'removable' && (
              <>
                <line x1={mapX(-2)} y1={mapY(0)} x2={mapX(1.9)} y2={mapY(3.9)} stroke="#3b82f6" strokeWidth="4" />
                <line x1={mapX(2.1)} y1={mapY(4.1)} x2={mapX(6)} y2={mapY(8)} stroke="#3b82f6" strokeWidth="4" />
                <circle cx={mapX(2)} cy={mapY(4)} r="6" fill="white" stroke="#3b82f6" strokeWidth="2" />
              </>
            )}

            {type === 'jump' && (
              <>
                <line x1={mapX(-4)} y1={mapY(-2)} x2={mapX(-0.1)} y2={mapY(-2)} stroke="#f59e0b" strokeWidth="4" />
                <line x1={mapX(0.1)} y1={mapY(2)} x2={mapX(4)} y2={mapY(2)} stroke="#f59e0b" strokeWidth="4" />
                <circle cx={mapX(0)} cy={mapY(-2)} r="6" fill="white" stroke="#f59e0b" strokeWidth="2" />
                <circle cx={mapX(0)} cy={mapY(2)} r="6" fill="white" stroke="#f59e0b" strokeWidth="2" />
              </>
            )}

            {type === 'infinite' && (
              <>
                {/* 左側曲線: 使用一串點來精確符合 1/x^2 */}
                <path 
                  d={`M ${mapX(-4)} ${mapY(1/16)} 
                      L ${mapX(-3)} ${mapY(1/9)} 
                      L ${mapX(-2)} ${mapY(1/4)} 
                      L ${mapX(-1.5)} ${mapY(1/2.25)} 
                      L ${mapX(-1.2)} ${mapY(1/1.44)} 
                      L ${mapX(-1)} ${mapY(1)} 
                      L ${mapX(-0.8)} ${mapY(1/0.64)} 
                      L ${mapX(-0.6)} ${mapY(1/0.36)} 
                      L ${mapX(-0.5)} ${mapY(4)} 
                      L ${mapX(-0.4)} ${mapY(6.25)} 
                      L ${mapX(-0.33)} ${mapY(9)}
                      L ${mapX(-0.316)} ${mapY(10)}`} 
                  fill="none" stroke="#ef4444" strokeWidth="4" strokeLinejoin="round" />
                {/* 右側曲線 */}
                <path 
                  d={`M ${mapX(4)} ${mapY(1/16)} 
                      L ${mapX(3)} ${mapY(1/9)} 
                      L ${mapX(2)} ${mapY(1/4)} 
                      L ${mapX(1.5)} ${mapY(1/2.25)} 
                      L ${mapX(1.2)} ${mapY(1/1.44)} 
                      L ${mapX(1)} ${mapY(1)} 
                      L ${mapX(0.8)} ${mapY(1/0.64)} 
                      L ${mapX(0.6)} ${mapY(1/0.36)} 
                      L ${mapX(0.5)} ${mapY(4)} 
                      L ${mapX(0.4)} ${mapY(6.25)} 
                      L ${mapX(0.33)} ${mapY(9)}
                      L ${mapX(0.316)} ${mapY(10)}`} 
                  fill="none" stroke="#ef4444" strokeWidth="4" strokeLinejoin="round" />
                <line x1={mapX(0)} y1="0" x2={mapX(0)} y2="400" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
              </>
            )}

            {/* 動態點 */}
            {xVal !== current.a && (
              <circle cx={mapX(xVal)} cy={mapY(currentY)} r="8" fill="#10b981" />
            )}
            
            {/* 座標文字 */}
            <text x="10" y="30" fontSize="22" fontWeight="bold" fill="#10b981">
              ({xVal.toFixed(1)}, {currentY ? currentY.toFixed(1) : '—'})
            </text>
            <text x="380" y="215" fontSize="14" fill="#64748b">x</text>
            <text x="210" y="25" fontSize="14" fill="#64748b">y</text>
          </svg>
        </div>

        {/* 右側：內容 (2) */}
        <div style={{ flex: '1 1 250px', minWidth: '250px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* 切換按鈕 */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '2px' }}>
            {Object.keys(config).map((key) => (
              <button
                key={key}
                onClick={() => { setType(key); setXVal(config[key].min); }}
                style={{
                  padding: '6px 12px',
                  fontSize: '13px',
                  border: '1px solid #d1d5db',
                  backgroundColor: type === key ? '#2563eb' : 'white',
                  color: type === key ? 'white' : '#374151',
                  cursor: 'pointer',
                  borderRadius: key === 'removable' ? '6px 0 0 6px' : key === 'infinite' ? '0 6px 6px 0' : '0',
                  transition: 'all 0.2s'
                }}
              >
                {config[key].title}
              </button>
            ))}
          </div>

          <div style={{ backgroundColor: '#f1f5f9', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '18px', color: '#1e40af', marginBottom: '4px' }}>
              <InlineMath math={current.funcDesc} />
            </div>
            <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
              {config[type].description}
            </p>
          </div>
          
          <div style={{ marginTop: 'auto' }}>
            <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '8px', color: '#4b5563', fontWeight: '500' }}>
              <span>逼近點至 a = {current.a}</span>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>x = {xVal.toFixed(1)}</span>
            </label>
            <input 
              type="range" 
              min={current.min} 
              max={current.max} 
              step="0.1" 
              value={xVal} 
              onChange={(e) => setXVal(parseFloat(e.target.value))}
              style={{ width: '100%', cursor: 'pointer', accentColor: '#10b981' }}
            />
            
            {xVal === current.a && (
              <div style={{ 
                fontSize: '12px', 
                color: '#ef4444', 
                fontWeight: 'bold', 
                marginTop: '8px', 
                textAlign: 'center',
                backgroundColor: '#fef2f2',
                padding: '4px',
                borderRadius: '4px'
              }}>
                ⚠️ 注意：此處函數不連續！
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}