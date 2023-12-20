import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import jobsReducer from '../features/jobs/jobSlice';
import filterReducer from '../features/filters/filterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    jobs: jobsReducer,
    filters: filterReducer
  },
});
