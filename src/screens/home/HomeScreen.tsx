import { useEffect, useState } from 'react';
import { useMovieStore } from '@/store/movie/useMovieStore';
import HomeView from './HomeView';
import { SortBy } from '@/types/types';

export function Home(): JSX.Element {
  const { movies, fetchMovies, favorites } = useMovieStore();
  const [sortBy, setSortBy] = useState<SortBy | undefined>(undefined);
  const [showFavorites, setShowFavorites] = useState(false);

  // Filmleri ilk kez yükleme
  useEffect(() => {
    if (!movies.length) {
      fetchMovies();
    }
  }, [fetchMovies, movies.length]);

  // Sıralama değiştiğinde filmleri güncelle
  useEffect(() => {
    fetchMovies(sortBy);
  }, [sortBy, fetchMovies]);

  // Filtrelenmiş filmleri hesapla
  const filteredMovies = showFavorites
    ? movies.filter(movie => favorites.includes(movie.id))
    : movies;

  // Sıralama işlemi
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
