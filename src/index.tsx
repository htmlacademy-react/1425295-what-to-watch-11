import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const PromoFilm = {
  FilmsName: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  ReleaseDate: 2014,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promoFilm={PromoFilm}
    />
  </React.StrictMode>,
);
