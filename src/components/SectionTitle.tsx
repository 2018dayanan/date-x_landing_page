import React from 'react';
import colors from '../styles/colors';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light = false }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
      <span
        style={{
          display: 'inline-block',
          padding: '6px 20px',
          background: light ? 'rgba(255,255,255,0.1)' : 'rgba(244, 140, 37, 0.1)',
          borderRadius: '50px',
          color: light ? colors.secondary : colors.primary,
          fontSize: '14px',
          fontWeight: 600,
          marginBottom: '16px',
        }}
      >
        ✨ Discover More
      </span>
      <h2
        style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          color: light ? colors.white : colors.textDark,
          marginBottom: '16px',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: '18px',
            color: light ? 'rgba(255,255,255,0.7)' : colors.textSecondary,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;