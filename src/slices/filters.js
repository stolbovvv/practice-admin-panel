import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useFetch } from '../hooks/useFetch';

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

export const fetching = createAsyncThunk('filters/fetching', async () => {
  const fetchData = useFetch();
  return await fetchData('http://localhost:3000/filters');
});

export const { actions, reducer } = createSlice({
  name: 'filters',
  initialState: {
    data: [],
    error: null,
    current: null,
    process: 'pending',
  },
  reducers: {
    changed: handleChanged,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetching.pending, handleFetchtchinLoading)
      .addCase(fetching.rejected, handleFetchtchinFailure)
      .addCase(fetching.fulfilled, handleFetchtchinSuccess)
      .addDefaultCase(() => {});
  },
});
