import React from 'react';

const BackgroundOrbs: React.FC = () => {
  return (
    <div className="mesh-bg">
      {/* Reduced to 3 orbs for performance */}
      <div className="mesh-orb orb-1"></div>
      <div className="mesh-orb orb-2"></div>
      <div className="mesh-orb orb-3"></div>
    </div>
  );
};

export default BackgroundOrbs;