// Опишите в нём:

import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { filmDescription } from '../types/film';
import { changeGenre, loadFilms, setFilmsDataLoadingStatus } from './action';

// Объект начального состояния: жанр (используется для фильтров по жанру) и список фильмов.

// Функцию-редьюсер. Она принимает в качестве параметров текущий state и действие (action).
// Результатом выполнения редьюсера станет новое состояние.
// Обратите внимание, для именования функций-редьюсеров применяются существительные.

type InitialState = {
  genre: string;
  filmsList: filmDescription[];
  isQuestionsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  isQuestionsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isQuestionsDataLoading = action.payload;
    });
});

export {reducer};
