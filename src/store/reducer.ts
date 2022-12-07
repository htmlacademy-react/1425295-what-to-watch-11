// Опишите в нём:

import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';
import { filmDescription } from '../types/film';
import { changeGenre, getFilmsList } from './action';

// Объект начального состояния: жанр (используется для фильтров по жанру) и список фильмов.

// Функцию-редьюсер. Она принимает в качестве параметров текущий state и действие (action).
// Результатом выполнения редьюсера станет новое состояние.
// Обратите внимание, для именования функций-редьюсеров применяются существительные.

type TInitialState = {
  genre: string;
  filmsList: filmDescription[];
};

const initialState: TInitialState = {
  genre: 'All genres',
  filmsList: films,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsList, (state, action) => {
      state.filmsList = action.payload;
    });
});

export {reducer};
