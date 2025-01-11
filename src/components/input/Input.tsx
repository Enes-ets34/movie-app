import React, { useState } from 'react';
import './input.scss';
import Icon from '../icon/Icon';
import { InputProps } from './input.types';

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  placeholder = '',
  icon,
  value,
  onChange,
  size = 'md',
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
      <div className={`input-container ${isFocused || value ? 'focused' : ''}`}>
        <input
          type={type}
          className='input-element'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <label className='input-label'>{label}</label>
        {icon && (
          <div
            onClick={() => setIsFocused(true)}
            className='input-icon'
            style={size === 'sm' ? { top: '55%' } : {}}
          >
            <Icon source={icon} size={iconSize} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
