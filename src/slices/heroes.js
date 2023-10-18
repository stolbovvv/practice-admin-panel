import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { useFetch } from '../hooks/useFetch';

const adapter = createEntityAdapter();

const fetching = createAsyncThunk('heroes/fetching', async () => {
  const fetchData = useFetch();
  return await fetchData('http://localhost:3000/heroes');
});

const { actions, reducer } = createSlice({
  name: 'heroes',
  initialState: adapter.getInitialState({
    error: null,
    process: 'pending',
  }),
  reducers: {
    created: (state, action) => {
      adapter.addOne(state, action.payload);
    },
    deleted: (state, action) => {
      adapter.removeOne(state, action.payload);
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

export const { selectAll } = adapter.getSelectors((state) => state.heroes);

export const { created, deleted } = actions;

export { fetching };
