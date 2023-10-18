import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import { selectAll as selectAllFilters } from '../../slices/filters';
import { created as createdHero } from '../../slices/heroes';

import './form.css';

function Form() {
  const { reset, register, handleSubmit, formState } = useForm();
  const fetchData = useFetch();
  const dispatch = useDispatch();
  const filters = useSelector(selectAllFilters);

  const onSubmit = (data) => {
    fetchData('http://localhost:3000/heroes', { method: 'POST', body: JSON.stringify(data) })
      .then((data) => dispatch(createdHero(data)))
      .catch((err) => console.error(err))
      .finally(() => reset());
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form__title">Add new hero</h2>

      <label className="form__label">Hero name:</label>
      <input className="form__input" type="text" {...register('name', { required: true })} />
      {formState.errors.name && <span className="form__error">Enter the hero&apos;s name!</span>}

      <label className="form__label">Hero bio:</label>
      <textarea className="form__textarea" {...register('description', { required: true })} />
      {formState.errors.description && <span className="form__error">Enter the hero&apos;s bio!</span>}

      <label className="form__label">Hero element:</label>
      {filters.length && (
        <select className="form__select" {...register('element')} defaultValue={filters[0]?.type}>
          {filters.map(({ id, type, label }) => (
            <option key={id} value={type}>
              {label}
            </option>
          ))}
        </select>
      )}

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
