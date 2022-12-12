import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { filmDescription } from '../types/film';
import { changeGenre, loadFilm, loadFilms, requireAuthorization, setFilmDataLoadingStatus, setFilmsDataLoadingStatus } from './action';

type InitialState = {
  genre: string;
  filmsList: filmDescription[];
  isFilmsDataLoading: boolean;
  isFilmDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  film: filmDescription;
};

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  isFilmsDataLoading: false,
  isFilmDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  film: {} as filmDescription,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setFilmDataLoadingStatus, (state, action) => {
      state.isFilmDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
