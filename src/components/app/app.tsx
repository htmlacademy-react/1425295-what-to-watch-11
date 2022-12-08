import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import AddReview from '../../pages/add-review/add-review';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Player from '../../pages/player/player';
import Registration from '../../pages/registration/registration';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../spinner/spinner';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isQuestionsDataLoading = useAppSelector((state) => state.isQuestionsDataLoading);
  if (authorizationStatus === AuthorizationStatus.Auth || isQuestionsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<WelcomeScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<Registration/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage />}
        />
        <Route
          path={AppRoute.Review}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
