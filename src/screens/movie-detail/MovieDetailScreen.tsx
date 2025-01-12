import { Movie } from '@/components/movie-card/movie.types';
import MovieDetailView from './MovieDetailView';

export function MovieDetail(): JSX.Element {
  const movie: Movie = {
    id: '12',
    name: 'The Prestige',
    year: 2006,
    country: 'USA, United Kingdom',
    imdb: '86.0',
    category: 'Action, Drama, Fantasy',
    isTvSeries: false,
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula arcu eu facilisis blandit. Praesent ultrices, tellus at ultricies dapibus, quam justo consequat arcu, ut mattis augue libero eu ex. Sed vel efficitur lectus, eu posuere orci. Curabitur arcu libero, placerat vel dui non, malesuada ultrices velit. Vestibulum posuere, erat quis dignissim viverra, magna ex tincidunt dui, non facilisis turpis nisi quis nisi. Nunc nec diam tincidunt, porta tellus eget, egestas elit. Aliquam tortor nulla, tincidunt eget lectus vitae, tincidunt feugiat justo. Nam luctus aliquet diam, tincidunt laoreet quam posuere at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis purus nec convallis rhoncus.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_.jpg',
  };
  return (
    <div>
      <MovieDetailView movie={movie} />
    </div>
  );
}
