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
  Reviews = '/comments',
  PromoFilm = '/promo',
  Favourite = '/favorite',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const raitingArray = [
  {
    id: '1',
    value: 1
  },
  {
    id: '2',
    value: 2
  },
  {
    id: '3',
    value: 3
  },
  {
    id: '4',
    value: 4
  },
  {
    id: '5',
    value: 5
  },
  {
    id: '6',
    value: 6
  },
  {
    id: '7',
    value: 7
  },
  {
    id: '8',
    value: 8
  },
  {
    id: '9',
    value: 9
  },
  {
    id: '10',
    value: 10
  },
];
