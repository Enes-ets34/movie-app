import { useParams } from 'react-router-dom';
import MovieDetailView from './MovieDetailView';

export function MovieDetail(): JSX.Element {
  const params = useParams();
  return (
    <>
      <p>selam</p>
      <MovieDetailView value={'Film Detail Page' + params.id} />
    </>
  );
}
