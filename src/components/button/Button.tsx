import React from 'react';
import classNames from '@/utils/classNames';
import { ButtonProps } from './button.types';
import './button.scss';
import { Colors } from '@/theme/colors';
import Text from '../text/Text';
import Icon from '../icon/Icon';

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'contained',
  color = 'gray100',
  onClick,
  className = '',
  style,
  disabled = false,
  icon,
}) => {
  const buttonColor = Colors[color] || Colors.gray100;

  const isOutlined = variant === 'outlined';
  const isContained = variant === 'contained';

  const disabledColor = Colors.gray300;

  const buttonStyle = {
    ...style,
    backgroundColor: isContained
      ? disabled
        ? disabledColor
        : buttonColor
      : undefined,
    borderColor: isOutlined && !disabled ? buttonColor : Colors.gray300,
    color:
      isOutlined && !disabled
        ? buttonColor
        : isContained && disabled
        ? Colors.gray500
        : undefined,
  };

  return (
    <button
      className={classNames(
        'button',
        `button--${variant}`,
        { 'button--color': isOutlined },
        { 'button--disabled': disabled },
        className
      )}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      <Text size='lg' color={isOutlined ? color : ''}>
        {text}
      </Text>
      {icon && (
        <Icon
          source={icon}
          stroke={isContained ? buttonColor : 'white'}
          size={{ width: 16 }}
        />
      )}
    </button>
  );
};

export default Button;
