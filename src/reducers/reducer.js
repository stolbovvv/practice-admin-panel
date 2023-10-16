const initialState = {
  heroesError: null,
  heroesProcess: 'pending',
  heroes: [],
  filteredHeroes: [],
  filtersError: null,
  currentFilter: null,
  filtersProcess: 'pending',
  filters: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesError: null,
        heroesProcess: 'laoding',
      };
    case 'HEROES_FETCHING_SUCCESS':
      return {
        ...state,
        heroes: action.payload,
        heroesError: null,
        heroesProcess: 'success',
        filteredHeroes: state.currentFilter ? action.payload.filter(({ element }) => element === state.currentFilter) : action.payload,
      };
    case 'HEROES_FETCHING_FAILURE':
      return {
        ...state,
        heroesError: action.payload,
        heroesProcess: 'failure',
      };
    case 'HERO_CREATED':
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
        filteredHeroes: state.currentFilter
          ? [...state.heroes, action.payload].filter(({ element }) => element === state.currentFilter)
          : [...state.heroes, action.payload],
      };
    case 'HERO_DELETED':
      return {
        ...state,
        heroes: state.heroes.filter(({ id }) => id !== action.payload),
        filteredHeroes: state.currentFilter
          ? state.heroes.filter(({ id, element }) => id !== action.payload && (!state.currentFilter || element === state.currentFilter))
          : state.heroes.filter(({ id }) => id !== action.payload),
      };

    case 'FILTERS_FETCHING':
      return {
        ...state,
        filtersError: null,
        filtersProcess: 'laoding',
      };
    case 'FILTERS_FETCHING_SUCCESS':
      return {
        ...state,
        filters: [...action.payload],
        filtersError: null,
        filtersProcess: 'success',
      };
    case 'FILTERS_FETCHING_FAILURE':
      return {
        ...state,
        filtersError: action.payload,
        filtersProcess: 'failure',
      };
    case 'FILTER_CHANGED':
      return {
        ...state,
        currentFilter: action.payload,
        filteredHeroes: state.heroes.filter(({ element }) => !action.payload || element === action.payload),
      };

    default:
      return state;
  }
}
