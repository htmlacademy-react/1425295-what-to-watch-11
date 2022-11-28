export type User = {
  id: number;
  name: string;
}
export type usersReviews = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}
