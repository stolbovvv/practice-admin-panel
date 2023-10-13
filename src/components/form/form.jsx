import './form.css';

function Form() {
  return (
    <form className="form">
      <h2 className="form__title">Add new hero</h2>

      <label className="form__label">Hero name:</label>
      <input className="form__input" type="text" placeholder="Enter the hero's name" />

      <label className="form__label">Hero bio:</label>
      <textarea className="form__textarea" placeholder="Enter the hero's bio" />

      <label className="form__label">Choose the hero&apos;s element:</label>
      <select className="form__select">
        <option value="stone">Stone</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="air">Air</option>
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
