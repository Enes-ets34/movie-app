import { Movie } from '@/components/movie-card/movie.types';
import HomeView from './HomeView';
export function Home(): JSX.Element {
  const movies: Movie[] = [];
  return (
    <>
      <HomeView movies={movies} />
    </>
  );
}
