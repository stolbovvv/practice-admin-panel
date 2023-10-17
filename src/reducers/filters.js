const initialState = {
  data: [],
  error: null,
  current: null,
  process: 'pending',
};

export function filters(state = initialState, action) {
  switch (action.type) {
    case 'FILTERS_FETCHING':
      return { ...state, process: 'laoding', error: null };
    case 'FILTERS_FETCHING_SUCCESS':
      return { ...state, process: 'success', error: null, data: [...action.payload] };
    case 'FILTERS_FETCHING_FAILURE':
      return { ...state, process: 'failure', error: action.payload };
    case 'FILTER_CHANGED':
      return { ...state, current: action.payload };

    default:
      return state;
  }
}
