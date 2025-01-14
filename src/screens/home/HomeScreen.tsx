import React, { useEffect, useState } from 'react';
import { useMovieStore } from '@/store/movie/useMovieStore';
import { SortBy } from '@/types/types';
import { useToastStore } from '@/store/toast/toastStore';
import { useLoadingStore } from '@/store/loading/loadingStore';

const HomeView = React.lazy(() => import('./HomeView'));

function Home(): JSX.Element {
  const { movies, fetchMovies, favorites } = useMovieStore();
  const { showToast } = useToastStore();
  const { setLoading } = useLoadingStore();
  const [sortBy, setSortBy] = useState<SortBy | undefined>(undefined);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    if (!movies.length) {
      setLoading(true);
      fetchMovies()
        .then(result => {
          if (result === undefined) {
            showToast('Film(ler) bulunamadı...', 'error');
          }
        })
        .catch(err => {
          showToast(err, 'error');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [fetchMovies, movies.length, setLoading, showToast]);

  useEffect(() => {
    setLoading(true);
    fetchMovies(sortBy).finally(() => {
      setLoading(false);
    });
  }, [sortBy, fetchMovies, setLoading]);

  const filteredMovies = showFavorites
    ? movies.filter(movie => favorites.includes(movie.id))
    : movies;

  const handleSortChange = (selectedOption: string) => {
    if (selectedOption === '') {
      setSortBy(undefined);
    } else {
      const sortBy: SortBy =
        selectedOption === 'Film Adı'
          ? 'name'
          : selectedOption === 'Yayın Yılı'
          ? 'year'
          : 'imdb';
      setSortBy(sortBy);
    }
  };

  const handleFilterChange = (selectedOption: string) => {
    setShowFavorites(selectedOption === 'Favoriler');
  };

  return (
    <HomeView
      movies={filteredMovies}
      onSortChange={handleSortChange}
      onFilterChange={handleFilterChange}
    />
  );
}
export default Home;
