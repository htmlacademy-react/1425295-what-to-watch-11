import { Fragment } from 'react';
import { ChangeEvent, useEffect, useState } from 'react';

type ReviewForm = {
  comment: string;
  rating: number;
}

function MessageForm(): JSX.Element {
  const [formData, setFormData] = useState<ReviewForm>({
    comment: '',
    rating: 0
  });
  // eslint-disable-next-line no-console
  useEffect(() => { console.log(formData); }, [formData]);
  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };
  const raitingArray = [
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

  return (
    <form action="#" className="add-review__htmlForm">
      <div className="rating">
        <div className="rating__stars">
          {raitingArray.reverse().map((elem) => (
            <Fragment key={elem.id}> <input onChange={fieldChangeHandle} className="rating__input" id={elem.id} value={elem.value} type="radio" name="rating" />
              <label className="rating__label" htmlFor={elem.id}>Rating 10</label>
            </Fragment>))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={fieldChangeHandle} className="add-review__textarea" value={formData.comment} name="comment" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default MessageForm;
