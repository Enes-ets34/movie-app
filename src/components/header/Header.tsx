import React, { useEffect, useState } from 'react';
import './header.scss';
import { HeaderProps } from './header.types';
import Input from '../input/Input';
import { Icons } from '@/theme/icons';
import Text from '../text/Text';
import { Colors } from '@/theme/colors';
import { useMovieStore } from '@/store/movie/useMovieStore';
import { useDebounce } from '@/hooks/useDebounce';
import { useLoadingStore } from '@/store/loading/loadingStore';
import { useAuth } from '@/context/auth/auth.context';

const Header: React.FC<HeaderProps> = ({ page }) => {
  const [searchKey, setSearchKey] = useState<string>('');
  const { selectedMovie } = useMovieStore();
  const debouncedSearchKey = useDebounce(searchKey, 750);
  const { fetchMovies, fetchMoviesByName, favorites } = useMovieStore();
  const { setLoading } = useLoadingStore();
  const {
    state: { user },
  } = useAuth();
  useEffect(() => {
    if (user) {
      const fetchMoviesWithLoading = async () => {
        setLoading(true);
        try {
          if (debouncedSearchKey.length >= 3) {
            await fetchMoviesByName(debouncedSearchKey);
          } else {
            await fetchMovies();
          }
        } catch (error) {
          console.error('Error fetching movies:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchMoviesWithLoading();
    }
  }, [
    debouncedSearchKey,
    fetchMoviesByName,
    fetchMovies,
    useLoadingStore,
    user,
  ]);

  return (
    <header className='header'>
      {page === 'login' ? (
        <h1 className='header__title'>Movies App</h1>
      ) : (
        <div className='container header-wrapper'>
          <div className='header__input'>
            {page === 'film-detail' && selectedMovie ? (
              <h1 className='header__movie__title'>{selectedMovie?.name}</h1>
            ) : (
              <Input
                value={searchKey}
                onChange={e => setSearchKey(e.target.value)}
                type='text'
                size='sm'
                placeholder='Search for movies...'
                icon={Icons.search}
              />
            )}
          </div>
          {favorites && (
            <div className='header__favorites'>
              <Text color={Colors.rose600}>Favoriler</Text>
              <Text bold>{favorites?.length}</Text>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
