// src/Review/TrigHexagon.jsx
import React from 'react';
import './TrigHexagon.css';

export default function TrigHexagon() {
  return (
    <div className="hexagon-wrapper">
      <svg className="hexagon-svg" viewBox="0 0 500 500">
        {/* Pythagorean Identities */}
        <polygon className="hex-triangle" points="150,80 350,80 250,250" />
        <polygon className="hex-triangle" points="50,250 250,250 150,420" />
        <polygon className="hex-triangle" points="250,250 450,250 350,420" />

        {/* Outline */}
        <polygon className="hex-line" points="150,80 350,80 450,250 350,420 150,420 50,250" />
        
        {/* Reciprocals */}
        <line className="hex-line" x1="150" y1="80" x2="350" y2="420" />
        <line className="hex-line" x1="350" y1="80" x2="150" y2="420" />
        <line className="hex-line" x1="50" y1="250" x2="450" y2="250" />

        {/* Center */}
        <circle className="hex-center-circle" cx="250" cy="250" r="45" />
        <text className="hex-center-text" x="250" y="260" textAnchor="middle">1</text>

        {/* Labels */}
        <text className="hex-label" x="150" y="70" textAnchor="middle">Sin</text>
        <text className="hex-label" x="350" y="70" textAnchor="middle">Cos</text>
        <text className="hex-label" x="460" y="255" textAnchor="start">Cot</text>
        <text className="hex-label" x="350" y="450" textAnchor="middle">Csc</text>
        <text className="hex-label" x="150" y="450" textAnchor="middle">Sec</text>
        <text className="hex-label" x="40" y="255" textAnchor="end">Tan</text>

        {/* Symbols */}
        <text className="hex-identity-text" x="250" y="160">+</text>
        <text className="hex-identity-text" x="150" y="320">+</text>
        <text className="hex-identity-text" x="350" y="320">+</text>
      </svg>
    </div>
  );
}
