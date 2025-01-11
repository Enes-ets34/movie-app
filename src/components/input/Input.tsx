import React, { useState } from 'react';
import './input.scss';
import Icon from '../icon/Icon';
import { InputProps } from './input.types';
import { Colors } from '@/theme/colors';

const Input: React.FC<InputProps> = ({
  type = 'text',
  label = '',
  placeholder = '',
  icon,
  value = '',
  onChange,
  size = 'md',
  style,
  isError = false,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const iconSizes = {
    sm: { width: 20, height: 20 },
    md: { width: 24, height: 24 },
    lg: { width: 32, height: 32 },
  };

  const iconSize = iconSizes[size] || iconSizes.md;
  return (
    <div className={`input-wrapper input-wrapper--${size}`}>
      <div
        className={`input-container ${isFocused || value ? 'focused' : ''} ${
          value ? 'filled' : ''
        } ${isError ? 'error' : ''}`}
      >
        <input
          disabled={disabled}
          type={type}
          className={isError ? 'input-element input-error' : 'input-element'}
          placeholder={placeholder}
          value={value}
          style={{ ...style }}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <label
          style={{
            top: (value?.length && value?.length > 0) || isFocused ? 0 : '50%',
          }}
          className={isError ? 'input-label label-error' : 'input-label'}
        >
          {label}
        </label>
        {icon && (
          <div
            onClick={() => setIsFocused(true)}
            className='input-icon'
            style={size === 'sm' ? { top: '55%' } : {}}
          >
            <Icon
              source={icon}
              stroke={isFocused && !isError ? Colors.blue500 : ''}
              size={iconSize}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
