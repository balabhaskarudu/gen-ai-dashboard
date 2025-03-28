import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { generateMockData } from '../utils/mockData';

const mockDelay = () => new Promise(resolve => setTimeout(resolve, 1500));

export const submitQuery = createAsyncThunk('queries/submit', 
  async (query) => {
    await mockDelay();
    return {
      query,
      timestamp: new Date().toISOString(),
      data: generateMockData(query)
    };
  }
);

const queriesSlice = createSlice({
  name: 'queries',
  initialState: {
    history: [],
    currentResult: null,
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitQuery.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitQuery.fulfilled, (state, action) => {
        state.history.unshift(action.payload);
        state.currentResult = action.payload;
        state.isLoading = false;
      })
      .addCase(submitQuery.rejected, (state) => {
        state.error = 'Failed to process query';
        state.isLoading = false;
      });
  }
});

export default queriesSlice.reducer;