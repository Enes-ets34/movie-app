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
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='input-wrapper'>
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
          <div className='input-icon'>
            <Icon source={icon} size={{ width: 24, height: 24 }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
