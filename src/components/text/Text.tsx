import React from 'react';
import classNames from '@/utils/classNames';
import './text.scss';
import { TextProps } from './text.types';

const Text: React.FC<TextProps> = ({
  size = 'base',
  bold = false,
  color = '#000',
  children,
  className = '',
  style,
}) => {
  return (
    <span
      className={classNames(
        'text',
        `text-${size}`,
        { 'text-bold': bold },
        className
      )}
      style={{ ...style, color }}
    >
      {children}
    </span>
  );
};

export default Text;
