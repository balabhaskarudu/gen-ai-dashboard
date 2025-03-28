import { configureStore } from '@reduxjs/toolkit';
import queriesReducer from './queriesSlice';

const store = configureStore({
  reducer: {
    queries: queriesReducer,
  },
});

export default store;
