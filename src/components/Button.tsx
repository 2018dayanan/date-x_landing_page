import React from 'react';
import colors from '../styles/colors';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  style: extraStyle = {},
}) => {
  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      borderRadius: '50px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      letterSpacing: '0.5px',
      position: 'relative',
      overflow: 'hidden',
    };

    const sizes = {
      sm: { padding: '10px 24px', fontSize: '14px' },
      md: { padding: '14px 32px', fontSize: '16px' },
      lg: { padding: '18px 40px', fontSize: '18px' },
    };

    const variants = {
      primary: {
        background: colors.primaryGradient,
        color: colors.white,
        boxShadow: '0 8px 30px rgba(244, 140, 37, 0.3)',
      },
      outline: {
        background: 'transparent',
        color: colors.white,
        border: `1.5px solid rgba(255, 255, 255, 0.2)`,
      },
      secondary: {
        background: colors.accentGradient,
        color: colors.white,
        boxShadow: '0 8px 30px rgba(112, 0, 255, 0.3)',
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.1)',
        color: colors.white,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      },
    };

    return { ...base, ...sizes[size], ...variants[variant], ...extraStyle };
  };

  return (
    <button
      style={getStyles()}
      onClick={onClick}
      className={`${className} premium-button`}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-4px) scale(1.02)';
        if (variant === 'primary') el.style.boxShadow = '0 15px 40px rgba(244, 140, 37, 0.4)';
        if (variant === 'secondary') el.style.boxShadow = '0 15px 40px rgba(112, 0, 255, 0.4)';
        if (variant === 'outline') {
          el.style.borderColor = colors.primary;
          el.style.background = 'rgba(244, 140, 37, 0.05)';
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(0) scale(1)';
        const defaultStyles = getStyles();
        el.style.boxShadow = defaultStyles.boxShadow || 'none';
        el.style.borderColor = (defaultStyles.border as string)?.split(' ')[2] || 'transparent';
        el.style.background = defaultStyles.background as string;
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px) scale(0.98)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
      }}
    >
      {children}
    </button>
  );
};

export default Button;