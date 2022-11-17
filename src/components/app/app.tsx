import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import { promoFilmProps } from '../../types/promo-film';

function App({promoFilm}: {promoFilm: promoFilmProps}): JSX.Element {
  return (
    <div>
      <WelcomeScreen
        promoFilm={promoFilm}
      />
    </div>
  );
}

export default App;
