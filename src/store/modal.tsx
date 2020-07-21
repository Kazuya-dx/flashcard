import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
};

const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalVisible: (state, action) => {
      return Object.assign({}, state, {
        isModalVisible: !state.isModalVisible,
      });
    },
  },
});

export default slice.reducer;

export const { setModalVisible } = slice.actions;
