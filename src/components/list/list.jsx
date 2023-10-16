import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';
import { actions } from '../../actions/actions';
import { ListItem } from '../list-item/list-item';

import './list.css';

function List() {
  const filteredHeroes = useSelector(({ filteredHeroes }) => filteredHeroes);
  const fetchData = useFetch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.filtersFetching());

    fetchData('http://localhost:3000/heroes')
      .then((data) => dispatch(actions.heroesFetchingSuccess(data)))
      .catch((err) => dispatch(actions.heroesFetchingFailure(err)));
  }, []);

  return (
    <ul className="list">
      {filteredHeroes.map(({ id, name, description, element }) => {
        return <ListItem key={id} id={id} name={name} text={description} type={element} />;
      })}
    </ul>
  );
}

export { List };
