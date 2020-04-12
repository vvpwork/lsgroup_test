import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    userRequest: (state, action) => state,
    getUserSuccess: (state, { payload }) => payload,
    updateUser: (state, { payload }) => payload,
    resetUser: (state, payload) => ({}),
  },
});

export const {
  userRequest,
  updateUser,
  getUserSuccess,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
