import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "commnet",
  initialState: [],
  reducers: {
    commentInit: (state, { payload }) => payload,
    updateComment: (state, { payload }) => state.push(payload),
    deleteComment: (state, { payload }) =>
      state.filter((comment) => comment._id !== payload),
    resetComment: (state, action) => [],
  },
});

export const {
  commentInit,
  updateComment,
  deleteComment,
  resetComment,
} = commentSlice.actions;

export default commentSlice.reducer;
