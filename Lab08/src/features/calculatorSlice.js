import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: { result: 0 },
  reducers: {
    add: (state, action) => {
      state.result = action.payload.a + action.payload.b;
    },
    subtract: (state, action) => {
      state.result = action.payload.a - action.payload.b;
    },
  },
});

export const { add, subtract } = calculatorSlice.actions;
export default calculatorSlice.reducer;
