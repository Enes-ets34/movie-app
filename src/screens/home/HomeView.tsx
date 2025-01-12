import MoviesList from '@/components/movies-list/MoviesList';
import { HomeProps } from './home.types';

const HomeView = ({ movies }: HomeProps): JSX.Element => {
  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomeView;
