import { configureStore } from '@reduxjs/toolkit';
import habitosReducer from './features/habitosSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      habitos: habitosReducer,
    },
  });
};
