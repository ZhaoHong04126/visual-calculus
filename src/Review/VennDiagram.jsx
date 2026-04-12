// src/Review/VennDiagram.jsx
import React from 'react';
import './VennDiagram.css';

export default function VennDiagram({ type, label, size }) {
  // SVG coordinates
  const cxA = 90, cyA = 80, rA = 50;
  const cxB = 150, cyB = 80, rB = 50;
  const width = 240, height = 160;

  const renderHighlight = () => {
    switch (type) {
      case 'union':
        return (
          <>
            <circle cx={cxA} cy={cyA} r={rA} className="venn-highlight" />
            <circle cx={cxB} cy={cyB} r={rB} className="venn-highlight" />
          </>
        );
      case 'intersection':
        return (
          <g clipPath="url(#clipA)">
            <circle cx={cxB} cy={cyB} r={rB} className="venn-highlight" />
          </g>
        );
      case 'difference':
        return (
          <g clipPath="url(#clipNotB)">
            <circle cx={cxA} cy={cyA} r={rA} className="venn-highlight" />
          </g>
        );
      case 'complement':
        return (
          <g clipPath="url(#clipNotA)">
             <rect x="10" y="10" width={width - 20} height={height - 20} className="venn-highlight" />
          </g>
        );
      case 'complementUnion':
        return (
          <g clipPath="url(#clipNotUnion)">
             <rect x="10" y="10" width={width - 20} height={height - 20} className="venn-highlight" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`venn-wrapper ${size === 'small' ? 'small' : ''}`}>
      <div className="venn-svg-container">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <defs>
            <clipPath id="clipA">
              <circle cx={cxA} cy={cyA} r={rA} />
            </clipPath>
            <clipPath id="clipB">
              <circle cx={cxB} cy={cyB} r={rB} />
            </clipPath>
            <mask id="maskNotB">
              <rect x="0" y="0" width={width} height={height} fill="white" />
              <circle cx={cxB} cy={cyB} r={rB} fill="black" />
            </mask>
            <clipPath id="clipNotB">
               <path d={`M 0 0 H ${width} V ${height} H 0 Z M ${cxB} ${cyB} m -${rB}, 0 a ${rB},${rB} 0 1,0 ${rB*2},0 a ${rB},${rB} 0 1,0 -${rB*2},0`} fillRule="evenodd" />
            </clipPath>
            <clipPath id="clipNotA">
               <path d={`M 0 0 H ${width} V ${height} H 0 Z M ${cxA} ${cyA} m -${rA}, 0 a ${rA},${rA} 0 1,0 ${rA*2},0 a ${rA},${rA} 0 1,0 -${rA*2},0`} fillRule="evenodd" />
            </clipPath>
            <clipPath id="clipNotUnion">
               <path d={`M 0 0 H ${width} V ${height} H 0 Z 
                         M ${cxA} ${cyA} m -${rA}, 0 a ${rA},${rA} 0 1,0 ${rA*2},0 a ${rA},${rA} 0 1,0 -${rA*2},0
                         M ${cxB} ${cyB} m -${rB}, 0 a ${rB},${rB} 0 1,0 ${rB*2},0 a ${rB},${rB} 0 1,0 -${rB*2},0`} fillRule="evenodd" />
            </clipPath>
          </defs>

          {/* Universal Set if complement */}
          {(type === 'complement' || type === 'complementUnion') && (
            <rect x="10" y="10" width={width - 20} height={height - 20} fill="none" stroke="#94a3b8" strokeWidth="2" />
          )}

          {/* Highlighted Area */}
          {renderHighlight()}

          {/* Outlines */}
          <circle cx={cxA} cy={cyA} r={rA} className="venn-circle-outline venn-circle-a" />
          <circle cx={cxB} cy={cyB} r={rB} className="venn-circle-outline venn-circle-b" />

          {/* Labels A and B */}
          <text x={cxA - 10} y={cyA + 5} className="venn-text">A</text>
          <text x={cxB + 5} y={cyB + 5} className="venn-text">B</text>
          {type === 'complement' && <text x="20" y="30" className="venn-text">U</text>}
        </svg>
      </div>
      {label && <span className="venn-label">{label}</span>}
    </div>
  );
}
