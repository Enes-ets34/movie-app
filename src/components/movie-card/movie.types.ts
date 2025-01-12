export interface Movie {
  id: string;
  name: string;
  year: number;
  country: string;
  imdb: string;
  category: string;
  isTvSeries: boolean;
  summary: string;
  poster: string;
}
export interface MovieProps {
  movie: Movie;
  handleOnClick?: () => void;
}
