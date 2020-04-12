import { createSlice } from "@reduxjs/toolkit";

const init = {
  isAuthenticated: false,
  token: "",
  id: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: init,
  reducers: {
    loginRequest: (state, action) => state,
    loginSuccess: (state, { payload }) => payload,
    logOutt: (state) => init,
  },
});

export const { loginRequest, loginSuccess } = loginSlice.actions;

export default loginSlice.reducer;
