export const actions = {
  heroesFetching: () => {
    return {
      type: 'HEROES_FETCHING',
    };
  },

  heroesFetchingSuccess: (data) => {
    return {
      type: 'HEROES_FETCHING_SUCCESS',
      payload: data,
    };
  },

  heroesFetchingFailure: (data) => {
    return {
      type: 'HEROES_FETCHING_FAILURE',
      payload: data,
    };
  },

  filtersFetching: () => {
    return {
      type: 'FILTERS_FETCHING',
    };
  },

  filtersFetchingSuccess: (data) => {
    return {
      type: 'FILTERS_FETCHING_SUCCESS',
      payload: data,
    };
  },

  filtersFetchingFailure: (data) => {
    return {
      type: 'FILTERS_FETCHING_FAILURE',
      payload: data,
    };
  },
};
