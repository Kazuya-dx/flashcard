import { createSlice } from "@reduxjs/toolkit";

interface User {
  uid: string | null;
  name: string;
  isBeginner: boolean;
  isGuest: boolean;
}

const initialState: User = {
  uid: "",
  name: "",
  isBeginner: true,
  isGuest: true,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsersInfo: (state, action) => {
      return Object.assign({}, state, {
        uid: action.payload.uid,
        name: action.payload.name,
        isGuest: action.payload.isGuest,
      });
    },
    clearUsersInfo: (state, action) => {
      return Object.assign({}, state, {
        uid: "",
        name: "",
        isBeginner: false,
        isGuest: true,
      });
    },
    changeIsBeginner: (state, action) => {
      return Object.assign({}, state, { isBeginner: !state.isBeginner });
    },
  },
});

export default slice.reducer;

export const { setUsersInfo, clearUsersInfo, changeIsBeginner } = slice.actions;
