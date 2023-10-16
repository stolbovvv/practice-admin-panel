import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import { actions } from '../../actions/actions';

import './form.css';

function Form() {
  const { register, reset, handleSubmit, formState } = useForm();
  const filters = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();
  const fetchData = useFetch();

  const onSubmit = (data) => {
    fetchData('http://localhost:3000/heroes', { method: 'POST', body: JSON.stringify(data) })
      .then((data) => dispatch(actions.heroCreated(data)))
      .finally(() => reset());
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">Add new hero</h2>

      <label className="form__label">Hero name:</label>
      <input
        className="form__input"
        type="text"
        placeholder="Enter the hero's name"
        {...register('name', {
          minLmaxLength: { value: 2, message: 'Please, enter at least 2 characters!' },
          required: { value: true, message: "Enter the hero's name!" },
        })}
      />
      {formState.errors.name && <span className="form__error">{formState.errors.name.message}</span>}

      <label className="form__label">Hero bio:</label>
      <textarea
        className="form__textarea"
        placeholder="Enter the hero's bio"
        {...register('description', {
          maxLength: { value: 100, message: 'Maximum length of bio is 100 characters!' },
        })}
      />
      {formState.errors.description && <span className="form__error">{formState.errors.description.message}</span>}

      <label className="form__label">Choose the hero&apos;s element:</label>

      <select className="form__select" {...register('element')} value={filters[0]}>
        {filters.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div className="form__buttons">
        <button className="form__button form__button_add" type="submit">
          Add
        </button>
        <button className="form__button form__button_res" type="reset">
          Clear
        </button>
      </div>
    </form>
  );
}

export { Form };
