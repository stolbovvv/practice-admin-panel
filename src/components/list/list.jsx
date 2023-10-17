import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { useFetch } from '../../hooks/useFetch';
import { actions } from '../../actions/actions';
import { ListItem } from '../list-item/list-item';

import './list.css';

function List() {
  const heroesSelector = createSelector(
    ({ heroes }) => heroes.data,
    ({ filters }) => filters.current,
    (heroes, filters) => {
      if (filters) {
        return heroes.filter(({ element }) => element === filters);
      } else {
        return heroes;
      }
    },
  );

  const { fetchData } = useFetch();
  const heroes = useSelector(heroesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    dispatch(actions.fetchHereos(fetchData, controller.signal));

    return () => controller.abort();
  }, []);

  return (
    <ul className="list">
      {heroes.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export { List };
