// import { createSlice } from "@reduxjs/toolkit";

// export const dataSlice = createSlice({
//   name: "data",
//   initialState: {
//     data: [],
//   },
//   // The `reducers` field lets us define reducers and generate associated actions
//   reducers: {
//     setData: (state, action) => {
//       state.data += action.payload;
//     },
//   },
// });

// export const { setData } = dataSlice.actions;

// export const selectData = (state) => state.data.data;

// export default dataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    resetData: (state) => {
      return [];
    },
  },
});

export const { setData, resetData } = dataSlice.actions;
export default dataSlice.reducer;
