import { useNavigate } from 'react-router-dom';

export enum RoutesEnum {
  HOME = '/',
  LOGIN = '/login',
  MOVIE_DETAIL = '/movie-detail/:id',
}

type NavigateOptions = {
  params?: Record<string, string>;
  query?: Record<string, string>;
  replace?: boolean;
};

export const useHandleNavigate = () => {
  const navigate = useNavigate();
  const handleNavigate = (route: RoutesEnum, options: NavigateOptions = {}) => {
    const { params = {}, query = {}, replace = false } = options;

    let path: string = route;
    Object.keys(params).forEach(key => {
      path = path.replace(`:${key}`, params[key]);
    });

    const queryString = new URLSearchParams(query).toString();
    const finalPath = queryString ? `${path}?${queryString}` : path;

    if (replace) {
      navigate(finalPath, { replace: true });
    } else {
      navigate(finalPath);
    }
  };

  return handleNavigate;
};
