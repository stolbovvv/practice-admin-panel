import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changed as changedFilter, fetching as fetchingFilters, selectAll as selectAllFilters } from '../../slices/filters';
import { FilterItem } from '../filter-item/filter-item';

import './filter.css';

function Filter() {
  const filters = useSelector(selectAllFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingFilters());
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
      <button className="filter__button-clear" onClick={() => dispatch(changedFilter(null))}>
        Clear filter
      </button>
    </div>
  );
}

export { Filter };
