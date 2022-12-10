import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { filmDescription } from '../types/film';
import { changeGenre, loadFilms, requireAuthorization, setFilmsDataLoadingStatus } from './action';

type InitialState = {
  genre: string;
  filmsList: filmDescription[];
  isFilmsDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
};

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
