import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';
import { actions } from '../../actions/actions';
import { FilterItem } from '../filter-item/filter-item';

import './filter.css';

function Filter() {
  const filters = useSelector(({ filters }) => filters);
  const fetchData = useFetch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.filtersFetching());

    fetchData('http://localhost:3000/filters')
      .then((data) => dispatch(actions.filtersFetchingSuccess(data)))
      .catch((err) => dispatch(actions.filtersFetchingFailure(err)));
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
      <button className="filter__button-clear" onClick={() => dispatch(actions.filterChanged(null))}>
        Clear filter
      </button>
    </div>
  );
}

export { Filter };
