import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { useFetch } from '../hooks/useFetch';

const adapter = createEntityAdapter();

const fetching = createAsyncThunk('filters/fetching', async () => {
  const fetchData = useFetch();
  return await fetchData('http://localhost:3000/filters');
});

const { actions, reducer } = createSlice({
  name: 'filters',
  initialState: adapter.getInitialState({
    error: null,
    current: null,
    process: 'pending',
  }),
  reducers: {
    changed: (state, action) => {
      state.current = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetching.pending, (state) => {
        state.error = null;
        state.process = 'loading';
      })
      .addCase(fetching.rejected, (state, action) => {
        state.error = action.payload;
        state.process = 'failure';
      })
      .addCase(fetching.fulfilled, (state, action) => {
        adapter.setAll(state, action.payload);
        state.error = null;
        state.process = 'success';
      })
      .addDefaultCase(() => {});
  },
});

export default reducer;

export const { selectAll } = adapter.getSelectors((state) => state.filters);

export const { changed } = actions;

export { fetching };
