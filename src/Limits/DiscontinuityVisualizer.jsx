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
      title: '可移除不連續 (Removable)',
      funcDesc: 'f(x) = \\frac{x^2 - 4}{x - 2}',
      a: 2,
      min: -1,
      max: 5,
      getY: (x) => (x === 2 ? null : x + 2),
      description: '當 x 逼近 2 時，函數值逼近 4，但在 x=2 處函數無定義（圖上有個洞）。',
    },
    jump: {
      title: '跳躍不連續 (Jump)',
      funcDesc: 'f(x) = \\frac{x}{|x|}',
      a: 0,
      min: -3,
      max: 3,
      getY: (x) => (x === 0 ? null : Math.sign(x) * 2), // 放大 y 值方便觀察
      description: '當 x 從左邊逼近 0 時極限為 -2，從右邊逼近為 2。左右極限不相等，形成斷層。',
    },
    infinite: {
      title: '無窮不連續 (Infinite)',
      funcDesc: 'f(x) = \\frac{1}{x^2}',
      a: 0,
      min: -3,
      max: 3,
      getY: (x) => (x === 0 ? null : Math.min(1 / (x * x), 10)), // 限制最大 y 值
      description: '當 x 逼近 0 時，函數值趨向無限大，形成垂直漸近線 x=0。',
    }
  };

  const current = config[type];
  const currentY = current.getY(xVal);

  return (
    <div className="my-8 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h4 className="text-lg font-bold mb-4 text-center text-gray-800">互動探索：不連續的種類</h4>
      
      {/* 控制面板 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        <div className="flex rounded-md shadow-sm" role="group">
          {Object.keys(config).map((key) => (
            <button
              key={key}
              onClick={() => { setType(key); setXVal(config[key].min); }}
              className={`px-4 py-2 text-sm font-medium border ${
                type === key
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              } ${key === 'removable' ? 'rounded-l-lg' : ''} ${key === 'infinite' ? 'rounded-r-lg' : ''}`}
            >
              {config[key].title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* SVG 繪圖區 */}
        <div className="relative w-full max-w-[400px] aspect-square border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {/* 網格與座標軸 */}
            <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="200" y1="0" x2="200" y2="400" stroke="#cbd5e1" strokeWidth="2" />
            <text x="380" y="215" fontSize="12" fill="#64748b">x</text>
            <text x="210" y="20" fontSize="12" fill="#64748b">y</text>

            {/* 繪製函數圖形 */}
            {type === 'removable' && (
              <>
                <line x1={mapX(-2)} y1={mapY(0)} x2={mapX(1.9)} y2={mapY(3.9)} stroke="#3b82f6" strokeWidth="3" />
                <line x1={mapX(2.1)} y1={mapY(4.1)} x2={mapX(6)} y2={mapY(8)} stroke="#3b82f6" strokeWidth="3" />
                {/* 破洞 */}
                <circle cx={mapX(2)} cy={mapY(4)} r="5" fill="white" stroke="#3b82f6" strokeWidth="2" />
                <text x={mapX(2) + 10} y={mapY(4) + 5} fontSize="12" fill="#ef4444">a=2</text>
              </>
            )}

            {type === 'jump' && (
              <>
                <line x1={mapX(-4)} y1={mapY(-2)} x2={mapX(-0.1)} y2={mapY(-2)} stroke="#f59e0b" strokeWidth="3" />
                <line x1={mapX(0.1)} y1={mapY(2)} x2={mapX(4)} y2={mapY(2)} stroke="#f59e0b" strokeWidth="3" />
                <circle cx={mapX(0)} cy={mapY(-2)} r="5" fill="white" stroke="#f59e0b" strokeWidth="2" />
                <circle cx={mapX(0)} cy={mapY(2)} r="5" fill="white" stroke="#f59e0b" strokeWidth="2" />
              </>
            )}

            {type === 'infinite' && (
              <>
                <path d={`M ${mapX(-4)} ${mapY(1/16)} Q ${mapX(-1)} ${mapY(1)} ${mapX(-0.1)} ${mapY(10)}`} fill="none" stroke="#ef4444" strokeWidth="3" />
                <path d={`M ${mapX(4)} ${mapY(1/16)} Q ${mapX(1)} ${mapY(1)} ${mapX(0.1)} ${mapY(10)}`} fill="none" stroke="#ef4444" strokeWidth="3" />
                {/* 漸近線 */}
                <line x1={mapX(0)} y1="0" x2={mapX(0)} y2="400" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
              </>
            )}

            {/* 動態移動的點 */}
            {xVal !== current.a && (
              <circle cx={mapX(xVal)} cy={mapY(currentY)} r="6" fill="#10b981" />
            )}
            
            {/* 動態座標文字 */}
            {xVal !== current.a && (
              <text 
                x={mapX(xVal) + 10} 
                y={mapY(currentY) - 10} 
                fontSize="14" 
                fontWeight="bold"
                fill="#10b981"
                className="transition-all duration-200"
              >
                ({xVal.toFixed(1)}, {currentY.toFixed(1)})
              </text>
            )}
          </svg>
        </div>

        {/* 資訊與滑桿區 */}
        <div className="flex-1 w-full space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h5 className="font-bold text-gray-700 mb-2">當前函數：</h5>
            <div className="text-xl text-blue-700 mb-2">
              <InlineMath math={current.funcDesc} />
            </div>
            <p className="text-sm text-gray-600">{current.description}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              拖曳滑桿，讓 x 逼近 <InlineMath math={`a=${current.a}`} />：
              <span className="ml-2 text-emerald-600 font-bold">x = {xVal.toFixed(1)}</span>
            </label>
            <input 
              type="range" 
              min={current.min} 
              max={current.max} 
              step="0.1" 
              value={xVal} 
              onChange={(e) => setXVal(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            {xVal === current.a && (
              <p className="mt-2 text-sm text-red-500 font-bold animate-pulse">
                ⚠️ 注意：此時函數未定義或發生不連續！
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}