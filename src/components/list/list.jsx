import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useFetch } from '../../hooks/useFetch';
import { actions } from '../../actions/actions';
import { ListItem } from '../list-item/list-item';

import './list.css';

function List() {
  const heroesSelector = createSelector(
    (store) => store.heroes.data,
    (store) => store.filters.current,
    (heroes, filter) => {
      if (filter) {
        return heroes.filter(({ element }) => element === filter);
      } else {
        return heroes;
      }
    },
  );

  const fetchData = useFetch();
  const heroes = useSelector(heroesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchHereos(fetchData));
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
