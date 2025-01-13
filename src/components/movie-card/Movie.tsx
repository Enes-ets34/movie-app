import './movie.scss';
import React from 'react';
import { Colors } from '@/theme/colors';
import { Icons } from '@/theme/icons';
import { MovieProps } from './movie.types';
import { useMovieStore } from '@/store/movie/useMovieStore';
import { RoutesEnum } from '@/utils/handleNavigate';
import Image from '../image/Image';
import Text from '../text/Text';
import Icon from '../icon/Icon';
import FavoriteButton from '../favorite-button/FavoriteButton';
import Badge from '../badge/Badge';

const Movie: React.FC<MovieProps> = ({ movie, handleNavigate }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useMovieStore();
  const isFavorite = favorites.includes(movie?.id || '');
  const favoriteButtonColor = isFavorite ? Colors.red400 : Colors.gray300;

  if (!movie) return null;

  return (
    <div
      key={movie.id}
      className='movies-list__item'
      onClick={() => {
        if (handleNavigate) {
          handleNavigate(RoutesEnum.MOVIE_DETAIL, {
            params: { id: movie.id },
          });
        }
      }}
    >
      {movie.isTvSeries && (
        <Badge position={{ top: '1.75rem', left: '2.5rem' }} color='#F3F4F680'>
          <Text color={Colors.gray900} size='xs' bold>
            TV SERIES
          </Text>
        </Badge>
      )}

      <FavoriteButton
        movieId={movie.id}
        isFavorite={isFavorite}
        favoriteButtonColor={favoriteButtonColor}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        position={{ top: '1.75rem', right: '2.5rem' }}
      />
      <Image src={movie.poster || ''} alt={movie?.name || ''} />
      <Text bold color={Colors?.gray400} size='xs'>
        {movie?.year} , {movie?.country}
      </Text>
      <Text bold color={Colors?.gray900} size='lg'>
        {movie?.name}
      </Text>
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

      <Text bold size='xs' color={Colors.gray400}>
        {movie?.category}
      </Text>
    </div>
  );
};

export default Movie;
