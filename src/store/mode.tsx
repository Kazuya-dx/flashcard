import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "top",
};

const slice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setStudyMode: (state, action) => {
      return Object.assign({}, state, { mode: "study" });
    },
    setTopMode: (state, action) => {
      return Object.assign({}, state, { mode: "top" });
    },
  },
});

export default slice.reducer;

export const { setStudyMode, setTopMode } = slice.actions;
