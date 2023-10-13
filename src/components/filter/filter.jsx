import './filter.css';

function Filter() {
  return (
    <div className="filter">
      <h2 className="filter__title">Hero filter</h2>
      <h3 className="filter__subtitle">Hero element:</h3>
      <div className="filter__buttons">
        <button className="filter__buttons-item filter__buttons-item_stone">Stone</button>
        <button className="filter__buttons-item filter__buttons-item_fire">Fire</button>
        <button className="filter__buttons-item filter__buttons-item_water">Water</button>
        <button className="filter__buttons-item filter__buttons-item_air">Air</button>
      </div>
      <button className="filter__button-clear">Clear filter</button>
    </div>
  );
}

export { Filter };
