const initialState = {
  data: [],
  error: null,
  process: 'pending',
};

export function heroes(state = initialState, action) {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return { ...state, process: 'laoding', error: null };
    case 'HEROES_FETCHING_SUCCESS':
      return { ...state, process: 'success', error: null, data: action.payload };
    case 'HEROES_FETCHING_FAILURE':
      return { ...state, process: 'failure', error: action.payload };
    case 'HERO_CREATED':
      return { ...state, data: [...state.data, action.payload] };
    case 'HERO_DELETED':
      return { ...state, data: state.data.filter(({ id }) => id !== action.payload) };

    default:
      return state;
  }
}
