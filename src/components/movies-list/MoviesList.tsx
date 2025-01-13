import React from 'react';
import './moviesList.scss';
import Movie from '../movie-card/Movie';
import { MoviesListProps } from './moviesList.types';
import { Movie as _Movie } from '../movie-card/movie.types';
import Text from '../text/Text';
import { useHandleNavigate } from '@/utils/handleNavigate';

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  const handleNavigate = useHandleNavigate();

  if (!movies || movies?.length === 0) {
    <Text size='4xl'>Hiç film yok...</Text>;
  }
  return (
    <div className='movies-list'>
      {movies.map((movie: _Movie) => (
        <Movie movie={movie} handleNavigate={handleNavigate} />
      ))}
    </div>
  );
};

export default MoviesList;
