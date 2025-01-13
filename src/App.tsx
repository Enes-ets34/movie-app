import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Home } from './screens/home/HomeScreen';
import { MovieDetail } from './screens/movie-detail/MovieDetailScreen';
import { Login } from './screens/login/LoginScreen';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useToastStore } from '@/store/toast/toastStore';
import { AuthProvider } from './context/auth/auth.context';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';
import { useIsMobile } from './hooks/useIsMobile';
import { NotFound } from './screens/not-found/Notfound';
import { RoutesEnum } from './utils/handleNavigate';
import Toast from './components/toast/Toast';
import Loading from './components/loading/Loading';
import { useLoadingStore } from './store/loading/loadingStore';
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
