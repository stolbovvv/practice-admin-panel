import './item.css';

function Item({ name, text, type }) {
  const classModifer = type ? `item_${type}` : '';

  return (
    <li className={['item', classModifer].join(' ').trim()}>
      <img className="item__image" src="https://placehold.co/300x300?text=Hero\navatar" alt="Hero avatar" />
      <div className="item__body">
        <p className="item__name">{name}</p>
        <p className="item__text">{text}</p>
      </div>
      <button className="item__delete">
        <svg xmlns="http://www.w3.org/2000/svg" width="0.875rem" height="0.875rem" fill="currentColor" viewBox="0 0 256 256">
          <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
      </button>
    </li>
  );
}

export { Item };
