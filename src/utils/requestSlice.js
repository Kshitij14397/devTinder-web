import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeRequests: () => {
      return null;
    },
    removeRequest: (state, action) => {
      const newArray = state?.filter((req) => req._id !== action.payload);
      return newArray;
    }
  },
});

export const { addRequests, removeRequests, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
