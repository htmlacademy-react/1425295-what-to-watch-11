export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Root = '/',
  Review = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const DEFAULT_ACTIVE_CARD = 0;

export const tabsLinks = [
  {
    name: 'Overview',
    id: 1,
  },
  {
    name: 'Details',
    id: 2,
  },
  {
    name: 'Reviews',
    id: 3,
  },
];

export enum TabsType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const GENRES = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family',
  'Romance', 'Sci-Fi', 'Thrillers'];

export const GENRE_DEFAULT = 'All genres';

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}
