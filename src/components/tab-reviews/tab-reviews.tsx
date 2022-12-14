import { useAppSelector } from '../../hooks';
import dayjs from 'dayjs';
import { usersReview } from '../../types/usersReviews';

function TabReviews(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

  return(
    <div className="film-card__reviews film-card__row">
      {reviews.map((review: usersReview) => (
        <div className="film-card__reviews film-card__row" key={review.id}>
          <div className="film-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={review.date}>{dayjs(review.date).format('MMMM D, YYYY')}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TabReviews;
