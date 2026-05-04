import React from 'react';

const BackgroundOrbs: React.FC = () => {
  return (
    <div className="mesh-bg">
      <div className="mesh-orb orb-1"></div>
      <div className="mesh-orb orb-2"></div>
      <div className="mesh-orb orb-3"></div>
      {/* Additional subtle orbs */}
      <div className="mesh-orb" style={{
        width: '400px',
        height: '400px',
        bottom: '20%',
        right: '15%',
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)',
        opacity: 0.1,
        animationDelay: '-15s'
      }}></div>
    </div>
  );
};

export default BackgroundOrbs;
