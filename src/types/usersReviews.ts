export type User = {
  id: number;
  name: string;
}
export type usersReview = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

export type usersReviews = usersReview[];
