import { useDispatch } from 'react-redux';
import { animated, useSpring } from '@react-spring/web';
import { useFetch } from '../../hooks/useFetch';
import { actions as actionsHeroes } from '../../slices/heroes';

import './list-item.css';

function ListItem({ id, name, description, element }) {
  const fetchData = useFetch();
  const dispatch = useDispatch();

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const deleteItem = () => {
    fetchData(`http://localhost:3000/heroes/${id}`, { method: 'DELETE' })
      .then(() => dispatch(actionsHeroes.deleted(id)))
      .catch((err) => console.log(err));
  };

  return (
    <animated.li style={style} className={['list-item', element ? `list-item_${element}` : ''].join(' ').trim()}>
      <img className="list-item__image" src="https://placehold.co/300x300?text=Hero\navatar" alt="Hero avatar" />
      <div className="list-item__body">
        <p className="list-item__name">{name}</p>
        <p className="list-item__text">{description}</p>
      </div>
      <button className="list-item__delete" onClick={() => deleteItem()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="0.875rem" height="0.875rem" fill="currentColor" viewBox="0 0 256 256">
          <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
        </svg>
      </button>
    </animated.li>
  );
}

export { ListItem };
