// src/Derivatives/Derivatives.jsx
import React from 'react';
import DerivativeDefinition from './DerivativeDefinition';
// 這裡可以沿用第二章的 CSS 或是為第三章建立專屬的 Derivatives.css
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
      
      {/* 未來我們將在這裡加入更多小節，例如：微分法則、鏈鎖律、高階導數等 */}
    </div>
  );
}