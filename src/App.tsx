import React, { Suspense, lazy } from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { useToastStore } from '@/store/toast/toastStore';
import { AuthProvider } from './context/auth/auth.context';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';
import { useIsMobile } from './hooks/useIsMobile';
import { RoutesEnum } from './utils/handleNavigate';
import Toast from './components/toast/Toast';
import Loading from './components/loading/Loading';
import { useLoadingStore } from './store/loading/loadingStore';

// Lazy loaded components
const Home = lazy(() => import('@/screens/home/HomeScreen'));
const MovieDetail = lazy(() => import('@/screens/movie-detail/MovieDetailScreen'));
const Login = lazy(() => import('@/screens/login/LoginScreen'));
const NotFound = lazy(() => import('@/screens/not-found/Notfound'));
const Header = lazy(() => import('./components/header/Header'));
const Footer = lazy(() => import('./components/footer/Footer'));

const App: React.FC = () => {
  const { message, type, hideToast } = useToastStore(state => state);
  const isLoading = useLoadingStore(state => state.isLoading);

  const location = useLocation();
  const isMobile = useIsMobile();

  const getPage = (): 'login' | 'home' | 'film-detail' => {
    if (location.pathname === '/') return 'home';
    if (location.pathname.startsWith('/movie-detail')) return 'film-detail';
    return 'login';
  };

  return (
    <>
      <Suspense fallback={<Loading isLoading={true} />}>
        <Header page={getPage()} />
        <div
          className='container'
          style={{ paddingTop: !isMobile ? 144 : 80, paddingBottom: 144 }}
        >
          <Routes>
            <Route
              path={RoutesEnum.HOME}
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path={RoutesEnum.MOVIE_DETAIL}
              element={
                <ProtectedRoute>
                  <MovieDetail />
                </ProtectedRoute>
              }
            />
            <Route path={RoutesEnum.LOGIN} element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Toast message={message} type={type} hideToast={hideToast} />
        <Loading isLoading={isLoading} />
        <Footer />
      </Suspense>
    </>
  );
};

const WrappedApp: React.FC = () => (
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);

export default WrappedApp;
