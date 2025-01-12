import Image from '@/components/image/Image';
import './movieDetail.scss';
import { MovieDetailProps } from './movieDetail.types';
import Text from '@/components/text/Text';
import Icon from '@/components/icon/Icon';
import { Icons } from '@/theme/icons';
import { Colors } from '@/theme/colors';
import Badge from '@/components/badge/Badge';
import { useIsMobile } from '@/hooks/useIsMobile';

const MovieDetailView = ({
  movie,
  isFavorite,
  onFavoriteToggle,
}: MovieDetailProps): JSX.Element => {
  const isMobile = useIsMobile();
  const favoriteButtonColor = isFavorite ? Colors.red400 : Colors.gray300;

  if (!movie) return <Text size='4xl'>Film bulunamadı...</Text>;

  return (
    <div className='movie-detail'>
      <div className='movie-body'>
        <Badge
          onClick={e => {
            e.stopPropagation();
            onFavoriteToggle();
          }}
          position={{ top: '0', right: '0' }}
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
        <Image
          src={movie?.poster}
          alt={movie?.name}
          height={!isMobile ? 700 : ''}
        />
        <Text size='2xl'>{movie.summary}</Text>
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
