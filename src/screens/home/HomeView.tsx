import MoviesList from '@/components/movies-list/MoviesList';
import { HomeProps } from './home.types';
import Text from '@/components/text/Text';
import FilterDropdown from '@/components/filter-dropdown/FilterDropdown';
import './homeView.scss';

const HomeView = ({
  movies,
  onSortChange,
  onFilterChange,
}: HomeProps): JSX.Element => {
  if (!movies) {
    return <Text size='4xl'>Filmler Bulunamadı...</Text>;
  }

  return (
    <div className='home-view'>
      <div className='home-view__header'>
        <Text size='3xl' bold>
          Movies
        </Text>
        <div className='home-view__header__filters'>
          <FilterDropdown
            text='Sırala'
            icon='switch_vertical'
            onClick={onSortChange}
            menuItems={['Film Adı', 'Yayın Yılı', 'Imdb Puanı']}
          />
          <FilterDropdown
            text='Filtrele'
            icon='adjustments'
            onClick={onFilterChange}
            menuItems={['Favoriler', 'Yeni eklenenler']}
          />
        </div>
      </div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomeView;
