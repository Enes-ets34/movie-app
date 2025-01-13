import React from 'react';
import Badge from '../badge/Badge';
import Icon from '../icon/Icon';
import { Icons } from '@/theme/icons';
import { FavoriteButtonProps } from './favoriteButton.types';

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  movieId,
  isFavorite,
  favoriteButtonColor,
  addToFavorites,
  removeFromFavorites,
  position,
}) => {
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(movieId);
    } else {
      addToFavorites(movieId);
    }
  };

  return (
    <Badge
      onClick={handleFavoriteToggle}
      position={position}
      color='#F3F4F680'
      borderRadius='50%'
    >
      <Icon
        source={Icons.hearth_fill}
        size={{ width: 18, height: 18 }}
        color={favoriteButtonColor}
        stroke={favoriteButtonColor}
      />
    </Badge>
  );
};

export default FavoriteButton;
