import React from 'react';
import { ImageProps } from './image.types';
import classNames from '../../utils/classNames';
import './image.scss';

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
}) => {
  const classes = classNames('image-wrapper', className);

  return (
    <div className={classes} style={{ width, height }}>
      <img
        src={src}
        alt={alt}
        style={{ width: width || 'auto', height: height || 'auto' }}
      />
    </div>
  );
};

export default Image;
