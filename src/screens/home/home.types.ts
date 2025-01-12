import { Movie } from '@/components/movie-card/movie.types';

export interface HomeProps {
  movies: Movie[];
  onSortChange: (selectedOption: string) => void;
  onFilterChange: (selectedOption: string) => void;
}
