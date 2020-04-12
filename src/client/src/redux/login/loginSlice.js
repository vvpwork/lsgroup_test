import { createSlice } from '@reduxjs/toolkit';

const init = {
  isAuthenticated: false,
  token: '',
  id: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState: init,
  reducers: {
    loginRequest: (state, action) => state,
    loginSuccess: (state, { payload }) => payload,
    logOut: state => init,
    registrationRequest: state => state,
    registrationSuccess: (state, { payload }) => payload,
  },
});

export const { loginRequest, loginSuccess, logOut, registrationRequest, registrationSuccess } = loginSlice.actions;

export default loginSlice.reducer;
