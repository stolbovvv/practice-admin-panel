import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';
import { actions as actionsCommon } from '../../actions/actions';
import { actions as actionsFilters } from '../../slices/filters';
import { FilterItem } from '../filter-item/filter-item';

import './filter.css';

function Filter() {
  const fetchData = useFetch();
  const filters = useSelector(({ filters }) => filters.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsCommon.fetchFilters(fetchData));
  }, []);

  return (
    <div className="filter">
      <h2 className="filter__title">Hero filter</h2>
      <h3 className="filter__subtitle">Hero element:</h3>
      <div className="filter__buttons">
        {filters.map(({ id, ...data }) => (
          <FilterItem key={id} data={data} />
        ))}
      </div>
      <button className="filter__button-clear" onClick={() => dispatch(actionsFilters.CHANGED(null))}>
        Clear filter
      </button>
    </div>
  );
}

export { Filter };
