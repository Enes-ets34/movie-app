import './loading.scss';
import { LoadingProps } from './loading.types';

const Loading = ({ isLoading }: LoadingProps) => {
  return (
    <div className={`loading ${isLoading ? 'show' : ''}`}>
      <div className='spinner'></div>
    </div>
  );
};

export default Loading;
