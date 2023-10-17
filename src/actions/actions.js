export const actions = {
  heroesFetching: () => {
    return { type: 'HEROES_FETCHING' };
  },

  heroesFetchingSuccess: (data) => {
    return { type: 'HEROES_FETCHING_SUCCESS', payload: data };
  },

  heroesFetchingFailure: (data) => {
    return { type: 'HEROES_FETCHING_FAILURE', payload: data };
  },

  heroCreated: (data) => {
    return { type: 'HERO_CREATED', payload: data };
  },

  heroDeleted: (data) => {
    return { type: 'HERO_DELETED', payload: data };
  },

  filtersFetching: () => {
    return { type: 'FILTERS_FETCHING' };
  },

  filtersFetchingSuccess: (data) => {
    return { type: 'FILTERS_FETCHING_SUCCESS', payload: data };
  },

  filtersFetchingFailure: (data) => {
    return { type: 'FILTERS_FETCHING_FAILURE', payload: data };
  },

  filterChanged: (data) => {
    return { type: 'FILTER_CHANGED', payload: data };
  },

  fetchHereos: (fetchData, signal) => (dispatch) => {
    dispatch(actions.heroesFetching);

    fetchData('http://localhost:3000/heroes', { signal: signal })
      .then((data) => dispatch(actions.heroesFetchingSuccess(data)))
      .catch((err) => dispatch(actions.heroesFetchingFailure(err)));
  },
};
