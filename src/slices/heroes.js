import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useFetch } from '../hooks/useFetch';

const handleFetching = createAsyncThunk('HEROES/FETCHING', () => {});

const handleFetchingLoading = (state) => {
  state.error = null;
  state.process = 'loading';
};

const handleFetchingSuccess = (state, action) => {
  state.data = action.payload;
  state.error = null;
  state.process = 'success';
};

const handleFetchingFailure = (state, action) => {
  state.error = action.payload;
  state.process = 'failure';
};

const handleCreated = (state, action) => {
  state.data.push(action.payload);
};

const handleDeleted = (state, action) => {
  state.data = state.data.filter(({ id }) => id !== action.payload);
};

export const { actions, reducer } = createSlice({
  name: 'HEROES',
  initialState: {
    data: [],
    error: null,
    process: 'pending',
  },
  reducers: {
    // FETCHING: handleFetching,
    FETCHING_LOADING: handleFetchingLoading,
    FETCHING_SUCCESS: handleFetchingSuccess,
    FETCHING_FAILURE: handleFetchingFailure,
    CREATED: handleCreated,
    DELETED: handleDeleted,
  },
});
