import React from 'react';

interface AuroraBackgroundProps {
  className?: string;
}

export function AuroraBackground({ className = '' }: AuroraBackgroundProps) {
  return (
    <div className={`aurora-background ${className}`}>
      {/* 静态点阵层 - 单一层级 */}
      <div className="flowing-dots-layer flowing-dots-1"></div>
      
      {/* 轻微的极光层作为背景 */}
      <div className="aurora-layer aurora-layer-subtle"></div>
    </div>
  );
}
