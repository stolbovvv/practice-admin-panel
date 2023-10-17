import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useFetch } from '../hooks/useFetch';

const handleCreated = (state, action) => {
  state.data.push(action.payload);
};

const handleDeleted = (state, action) => {
  state.data = state.data.filter(({ id }) => id !== action.payload);
};

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

export const fetching = createAsyncThunk('heroes/fetching', async () => {
  const fetchData = useFetch();
  return await fetchData('http://localhost:3000/heroes');
});

export const { actions, reducer } = createSlice({
  name: 'heroes',
  initialState: {
    data: [],
    error: null,
    process: 'pending',
  },
  reducers: {
    created: handleCreated,
    deleted: handleDeleted,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetching.pending, handleFetchingLoading)
      .addCase(fetching.rejected, handleFetchingFailure)
      .addCase(fetching.fulfilled, handleFetchingSuccess)
      .addDefaultCase(() => {});
  },
});
