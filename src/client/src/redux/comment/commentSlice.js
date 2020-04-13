import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
  name: 'commnet',
  initialState: [],
  reducers: {
    commentRequest: state => state,
    commentInit: (state, { payload }) => payload,
    addComment: (state, { payload }) => [...state, payload],
    deleteComment: (state, { payload }) =>
      state.filter(comment => comment._id !== payload),
    resetComment: (state, action) => [],
  },
});

export const {
  commentInit,
  addComment,
  deleteComment,
  resetComment,
  commentRequest,
} = commentSlice.actions;

export default commentSlice.reducer;
