import { actions as actionsHeroes } from '../slices/heroes';
import { actions as actionsFilters } from '../slices/filters';

export const actions = {
  fetchHereos: (fetchData) => (dispatch) => {
    dispatch(actionsHeroes.FETCHING_LOADING());

    fetchData('http://localhost:3000/heroes')
      .then((data) => dispatch(actionsHeroes.FETCHING_SUCCESS(data)))
      .catch((err) => dispatch(actionsHeroes.FETCHING_FAILURE(err)));
  },

  fetchFilters: (fetchData) => (dispatch) => {
    dispatch(actionsFilters.FETCHING_LOADING());

    fetchData('http://localhost:3000/filters')
      .then((data) => dispatch(actionsFilters.FETCHING_SUCCESS(data)))
      .catch((err) => dispatch(actionsFilters.FETCHING_FAILURE(err)));
  },
};
