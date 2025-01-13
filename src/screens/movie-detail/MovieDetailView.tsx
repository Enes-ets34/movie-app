import React from 'react';
import Image from '@/components/image/Image';
import './movieDetail.scss';
import { MovieDetailProps } from './movieDetail.types';
import Text from '@/components/text/Text';
import Icon from '@/components/icon/Icon';
import { Icons } from '@/theme/icons';
import { Colors } from '@/theme/colors';
import FavoriteButton from '@/components/favorite-button/FavoriteButton';

const MovieDetailView = ({
  movie,
  isFavorite,
  removeFromFavorites,
  addToFavorites,
  isExpanded,
  setIsExpanded,
  favoriteButtonColor,
  isMobile,
  isLongSummary,
  displayedSummary,
}: MovieDetailProps & {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  favoriteButtonColor: string;
}): JSX.Element => {
  return (
    <div className='movie-detail'>
      <div className='movie-body'>
        <FavoriteButton
          movieId={movie.id}
          isFavorite={isFavorite}
          favoriteButtonColor={favoriteButtonColor}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          position={{ top: '0', right: '0' }}
        />
        <Image
          src={movie?.poster}
          alt={movie?.name}
          height={!isMobile ? 700 : ''}
        />
        <div className='movie-summary'>
          <Text size='2xl'>{displayedSummary}</Text>
          {isLongSummary && (
            <button
              className='toggle-button'
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Gizle' : 'Devamını Gör'}
            </button>
          )}
        </div>
      </div>
      <hr className='movie-detail__divider' />

      <div className='movie-detail__info'>
        <div className='imdb-box'>
          <Icon
            size={{ width: 34, height: 17 }}
            source={Icons?.imdb}
            stroke={'transparent'}
          />
          <Text color={Colors.gray900} size='xs'>
            {movie?.imdb} / 100
          </Text>
        </div>
        <Text bold color={Colors?.gray400} size='xs'>
          {movie?.year} , {movie?.country}
        </Text>
        <Text bold size='xs' color={Colors.gray400}>
          {movie?.category}
        </Text>
      </div>
    </div>
  );
};

export default MovieDetailView;
