import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "test",
  isBeginner: true,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTest: (state, action) => {
      return Object.assign({}, state, { test: "Hello" });
    },
    changeIsBeginner: (state, action) => {
      return Object.assign({}, state, { isBeginner: !state.isBeginner });
    },
  },
});

export default slice.reducer;

export const { setTest, changeIsBeginner } = slice.actions;
