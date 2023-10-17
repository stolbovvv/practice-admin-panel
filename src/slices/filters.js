import { createSlice } from '@reduxjs/toolkit';

const handleFetchtchinLoading = (state) => {
  state.error = null;
  state.process = 'loading';
};

const handleFetchtchinSuccess = (state, action) => {
  state.data = action.payload;
  state.error = null;
  state.process = 'success';
};

const handleFetchtchinFailure = (state, action) => {
  state.error = action.payload;
  state.process = 'failure';
};

const handleChanged = (state, action) => {
  state.current = action.payload;
};

export const { actions, reducer } = createSlice({
  name: 'FILTERS',
  initialState: {
    data: [],
    error: null,
    current: null,
    process: 'pending',
  },
  reducers: {
    FETCHING_LOADING: handleFetchtchinLoading,
    FETCHING_SUCCESS: handleFetchtchinSuccess,
    FETCHING_FAILURE: handleFetchtchinFailure,
    CHANGED: handleChanged,
  },
});
