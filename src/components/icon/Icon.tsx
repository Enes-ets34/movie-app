import { Colors } from '@/theme/colors';
import React from 'react';
import { IconProps } from './icon.types';

const Icon: React.FC<IconProps> = ({ source, size, color, stroke, style }) => {
  const SelectedIcon = source ? source : null;

  if (!SelectedIcon) {
    return null;
  }

  return (
    <SelectedIcon
      width={size.width || 24}
      height={size.height || 24}
      fill={color || 'transparent'}
      stroke={stroke || Colors.gray900}
      style={{ ...style }}
    />
  );
};

export default Icon;
