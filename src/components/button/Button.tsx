import React from 'react';
import classNames from '@/utils/classNames';
import { ButtonProps } from './button.types';
import './button.scss';
import { Colors } from '@/theme/colors';

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'contained',
  color = 'gray100',
  onClick,
  className = '',
  style,
  disabled = false,
}) => {
  const buttonColor = Colors[color] || Colors.gray100;

  return (
    <button
      className={classNames(
        'button',
        `button--${variant}`,
        { 'button--color': variant === 'outlined' },
        { 'button--disabled': disabled },
        className
      )}
      style={{
        ...style,
        backgroundColor: variant === 'contained' ? buttonColor : undefined,
        borderColor:
          variant === 'outlined'
            ? disabled
              ? Colors.gray300
              : buttonColor
            : undefined,
        color:
          variant === 'outlined'
            ? disabled
              ? Colors.gray300
              : buttonColor
            : undefined,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
