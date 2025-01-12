import './movie.scss';
import React from 'react';
import Image from '../image/Image';
import Text from '../text/Text';
import { Colors } from '@/theme/colors';
import Icon from '../icon/Icon';
import { Icons } from '@/theme/icons';
import Badge from '../badge/Badge';
import { useNavigate } from 'react-router-dom';
import { MovieProps } from './movie.types';

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const navigate = useNavigate();
  if (!movie) return null;
  return (
    <div
      key={movie.id}
      className='movies-list__item'
      onClick={() => {
        navigate(`/movie-detail/${movie.id}`);
      }}
    >
      {!movie.isTvSeries && (
        <Badge position={{ top: '1.75rem', left: '2.5rem' }} color='#F3F4F680'>
          <Text color={Colors.gray900} size='xs' bold>
            TV SERIES
          </Text>
        </Badge>
      )}

      <Badge
        onClick={e => {
          e?.stopPropagation();
          console.log('Badge clicked');
        }}
        position={{ top: '1.75rem', right: '2.5rem' }}
        color='#F3F4F680'
        borderRadius='50%'
      >
        <Icon
          source={Icons.hearth_fill}
          size={{ width: 18, height: 18 }}
          color={Colors.red400}
          stroke={Colors.red400}
        />
      </Badge>
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