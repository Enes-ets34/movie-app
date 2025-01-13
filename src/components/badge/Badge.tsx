import React from 'react';
import './badge.scss';
import { BadgeProps } from './badge.types';

const Badge: React.FC<BadgeProps> = ({
  children,
  position,
  color,
  borderRadius = '2rem',
  zIndex = 90,
  onClick,
}) => {
  return (
    <span
      onClick={onClick}
      className='badge'
      style={{
        position: 'absolute',
        zIndex,
        background: color || '#F3F4F680',
        borderRadius,
        padding: '0.3rem',
        ...position,
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
