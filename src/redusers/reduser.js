const initialState = {
  heroesError: null,
  heroesProcess: false,
  heroes: [],
  filtersError: null,
  filtersProcess: false,
  filters: [],
};

export function reduser(state = initialState, action) {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return { ...state, heroesProcess: 'laoding', heroesError: null };
    case 'HEROES_FETCHING_SUCCESS':
      return { ...state, heroesProcess: 'success', heroesError: null, heroes: [...state, ...action.payload] };
    case 'HEROES_FETCHING_FAILURE':
      return { ...state, heroesProcess: 'failure', heroesError: action.payload };
    case 'FILTER_FETCHING':
      return { ...state, filtersProcess: 'laoding', filtersError: null };
    case 'FILTER_FETCHING_SUCCESS':
      return { ...state, filtersProcess: 'success', filtersError: null, filters: [...state, ...action.payload] };
    case 'FILTER_FETCHING_FAILURE':
      return { ...state, filtersProcess: 'failure', filtersError: action.payload };

    default:
      return state;
  }
}
