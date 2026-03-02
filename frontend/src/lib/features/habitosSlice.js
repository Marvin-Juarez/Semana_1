import { createSlice } from '@reduxjs/toolkit';

const habitosSlice = createSlice({
  name: 'habitos',
  initialState: { items: [] },
  reducers: {
    setHabitos: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setHabitos } = habitosSlice.actions;
export default habitosSlice.reducer;
