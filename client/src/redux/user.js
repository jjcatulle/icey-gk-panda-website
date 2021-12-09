import { createSlice } from "@reduxjs/toolkit";

export const USERINITIALSTATE = {
  connected: false,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: USERINITIALSTATE,
  reducers: {
    setUserData: (state = USERINITIALSTATE, action) => {
      state.connected = true;
      state.user = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
