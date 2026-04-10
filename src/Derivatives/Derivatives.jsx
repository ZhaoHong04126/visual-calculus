// src/Derivatives/Derivatives.jsx
import React from 'react';
import DerivativeDefinition from './DerivativeDefinition';
import DifferentiationRules from './DifferentiationRules';
import ChainRule from './ChainRule';
import HigherOrderDerivatives from './HigherOrderDerivatives';
import '../Limits/Limits.css'; 

export default function Derivatives() {
  return (
    <div className="topic-content">
      <header className="topic-header">
        <h1 className="topic-title">第三章：導數與微分</h1>
        <p className="text-lg mt-2 text-gray-600">
          從割線到切線，從平均變化到瞬間變化，見證微積分最迷人的魔法。
        </p>
      </header>

      <DerivativeDefinition />
      <DifferentiationRules />
      <ChainRule />
      <HigherOrderDerivatives />
      
    </div>
  );
}