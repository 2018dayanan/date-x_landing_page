import React from 'react';
import './Button.css';

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
  style = {},
}) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`premium-button btn-${variant} btn-${size} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;