import React from 'react';
import './moviesList.scss';
import Movie from '../movie-card/Movie';
import { MoviesListProps } from './moviesList.types';
import { Movie as _Movie } from '../movie-card/movie.types';
import Text from '../text/Text';

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  if (!movies || movies?.length === 0) {
    <Text size='4xl'>Hiç film yok...</Text>;
  }
  return (
    <div className='movies-list'>
      {movies.map((movie: _Movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
