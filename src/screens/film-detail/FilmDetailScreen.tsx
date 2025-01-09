import { useParams } from 'react-router-dom';
import FilmDetailView from './FilmDetailView';

export function FilmDetail(): JSX.Element {
  const params = useParams();
  return (
    <>
      <p>selam</p>
      <FilmDetailView value={'Film Detail Page' + params.id} />
    </>
  );
}
