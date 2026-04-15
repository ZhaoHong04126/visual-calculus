import React from 'react';

export default function FunctionGraph({
  f,               
  segments = [[-1, 1]], 
  range = [-Math.PI/2, Math.PI/2],
  steps = 60,
  width = 160,
  height = 100,
  color = "#ef4444", 
  xAxisTicks = [-1, 1],
  yAxisTicks = [-Math.PI/2, Math.PI/2],
  xAxisLabels = ["-1", "1"],
  yAxisLabels = ["-π/2", "π/2"],
  asymptotesY = [],
  asymptotesX = []
}) {
  const xMin = Math.min(...segments.map(s => s[0]));
  const xMax = Math.max(...segments.map(s => s[1]));
  const [yMin, yMax] = range;

  const xPad = (xMax - xMin) * 0.1 || 0.5;
  const yPad = (yMax - yMin) * 0.15 || 0.5;
  
  const viewXMin = xMin - xPad;
  const viewXMax = xMax + xPad;
  const viewYMin = yMin - yPad;
  const viewYMax = yMax + yPad;

  const mapX = (x) => ((x - viewXMin) / (viewXMax - viewXMin)) * width;
  const mapY = (y) => height - ((y - viewYMin) / (viewYMax - viewYMin)) * height;

  const originX = mapX(0);
  const originY = mapY(0);

  const paths = segments.map(seg => {
    let d = "";
    const dx = (seg[1] - seg[0]) / steps;
    for(let i=0; i<=steps; i++) {
       let x = seg[0] + i * dx;
       // minor hack to avoid floating logic near zero for 1/x
       if (Math.abs(x) < 0.0001) x += 0.001; 
       
       const y = f(x);
       if (!Number.isFinite(y)) continue;
       
       if (i===0) d += `M ${mapX(x)} ${mapY(y)} `;
       else d += `L ${mapX(x)} ${mapY(y)} `;
    }
    return d;
  });

  return (
    <div className="flex justify-center my-3 relative overflow-visible" style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} className="overflow-visible" style={{ maxWidth: '100%' }}>
        {/* Asymptotes */}
        {asymptotesY.map((y, i) => (
          <line key={`asymy-${i}`} x1={0} x2={width} y1={mapY(y)} y2={mapY(y)} stroke="#9ca3af" strokeDasharray="3 3" strokeWidth="1" />
        ))}
        {asymptotesX.map((x, i) => (
          <line key={`asymx-${i}`} x1={mapX(x)} x2={mapX(x)} y1={0} y2={height} stroke="#9ca3af" strokeDasharray="3 3" strokeWidth="1" />
        ))}
        
        {/* Axis lines */}
        <line x1={0} y1={originY} x2={width} y2={originY} stroke="#9ca3af" strokeWidth="1" />
        <line x1={originX} y1={0} x2={originX} y2={height} stroke="#9ca3af" strokeWidth="1" />

        {/* Ticks and Labels */}
        {xAxisTicks.map((x, i) => {
          if (x === 0) return null;
          return (
            <g key={`xt-${i}`}>
              <line x1={mapX(x)} y1={originY - 3} x2={mapX(x)} y2={originY + 3} stroke="#6b7280" strokeWidth="1" />
              <text x={mapX(x)} y={originY + 14} fontSize="10" fill="#6b7280" textAnchor="middle">{xAxisLabels[i]}</text>
            </g>
          );
        })}
        {yAxisTicks.map((y, i) => {
           if (Math.abs(mapY(y) - originY) < 5) return null; // Avoid overlapping 0
           return (
            <g key={`yt-${i}`}>
              <line x1={originX - 3} y1={mapY(y)} x2={originX + 3} y2={mapY(y)} stroke="#6b7280" strokeWidth="1" />
              <text x={originX - 6} y={mapY(y) + 3} fontSize="10" fill="#6b7280" textAnchor="end">{yAxisLabels[i]}</text>
            </g>
           );
        })}

        {/* The Graph Segments */}
        {paths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        ))}
        
      </svg>
    </div>
  );
}
