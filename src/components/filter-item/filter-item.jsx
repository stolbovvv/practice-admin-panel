import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../actions/actions';

import './filter-item.css';

function FilterItem({ data: { type, label } }) {
  const currentFilter = useSelector(({ currentFilter }) => currentFilter);
  const dispatch = useDispatch();

  return (
    <button
      className={`filter-item filter-item_${type}${type === currentFilter ? ' is-active' : ''}`}
      onClick={() => dispatch(actions.filterChanged(type))}
    >
      {label}
    </button>
  );
}

export { FilterItem };
