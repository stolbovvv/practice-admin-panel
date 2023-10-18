import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetHerorsQuery } from '../../api/api';
import { ListItem } from '../list-item/list-item';

import './list.css';

function List() {
  const { data = [] } = useGetHerorsQuery();
  const { current: currentFilter } = useSelector(({ filters }) => filters);

  const heroes = useMemo(() => {
    return currentFilter ? data.filter(({ element }) => element === currentFilter) : data;
  }, [data, currentFilter]);

  return (
    <ul className="list">
      {heroes.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export { List };
