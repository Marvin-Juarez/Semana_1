import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice para los hábitos
const habitsSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {
    setHabits: (state, action) => action.payload, // reemplaza la lista completa
    addHabit: (state, action) => [...state, action.payload], // agrega un hábito
  },
});

export const { setHabits, addHabit } = habitsSlice.actions;

export const store = configureStore({
  reducer: {
    habits: habitsSlice.reducer,
  },
});