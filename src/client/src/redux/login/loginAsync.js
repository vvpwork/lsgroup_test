import axios from "../../helper/axios";
import { loginRequest, loginSuccess } from "./loginSlice";
import { getUserSuccess } from "../user/userSlice";
import { commentInit } from "../comment/commentSlice";
import { error } from "../error/errorSlice";

export const loginAsync = (user) => (dispatch) => {
  dispatch(loginRequest());
  axios()
    .post("/login", { ...user })
    .then(({ data }) => {
      const { comment, ...user } = data.user;

      dispatch(
        loginSuccess({
          isAuthenticated: data.isAuthenticated,
          token: data.token,
          id: data.user._id,
        })
      );
      dispatch(getUserSuccess(user));
      dispatch(commentInit(comment));
    })
    .catch((err) => dispatch(error(err)));
};
