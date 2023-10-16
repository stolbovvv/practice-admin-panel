import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../actions/actions';

import './filter-item.css';

function FilterItem({ data }) {
  const currentFilter = useSelector(({ currentFilter }) => currentFilter);
  const dispatch = useDispatch();

  return (
    <button
      className={`filter-item filter-item_${data}${data === currentFilter ? ' is-active' : ''}`}
      onClick={() => dispatch(actions.filterChanged(data))}
    >
      {data}
    </button>
  );
}

export { FilterItem };
