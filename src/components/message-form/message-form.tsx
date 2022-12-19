import { FormEvent, Fragment } from 'react';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { APIRoute, raitingArray } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setReviewFormDisabled } from '../../store/action';
import { fetchReviewAction } from '../../store/api-actions';

type ReviewForm = {
  comment: string;
  rating: number;
}

function MessageForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector((state) => state.film);
  const isReviewFormDisabled = useAppSelector((state) => state.isReviewFormDisabled);

  const [formData, setFormData] = useState<ReviewForm>({
    comment: '',
    rating: 0
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.rating && formData.comment && film) {
      const [comment, rating] = [formData.comment, formData.rating];
      dispatch(setReviewFormDisabled(true));
      dispatch(fetchReviewAction([film.id, {comment, rating}]));
      navigate(`${APIRoute.Films}/${film.id}`);
    }
  };

  return (
    <form action="#" className="add-review__htmlForm" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {raitingArray.reverse().map((elem) => (
            <Fragment key={elem.id}> <input onChange={fieldChangeHandle} className="rating__input" id={elem.id} value={elem.value} type="radio" name="rating" disabled={isReviewFormDisabled}/>
              <label className="rating__label" htmlFor={elem.id}>Rating 10</label>
            </Fragment>))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={fieldChangeHandle} className="add-review__textarea" value={formData.comment} name="comment" id="review-text" placeholder="Review text" disabled={isReviewFormDisabled}></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isReviewFormDisabled}>Post</button>
        </div>

      </div>
    </form>
  );
}

export default MessageForm;
