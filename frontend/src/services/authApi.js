import axiosInstance from "./axiosInstance";
import { dispatch } from "../store";

// Sign up as a new user
export const signup = (data) =>
  axiosInstance
    .post("auth/register/", {
      email: data.email,
      password: data.password,
    })
    .then((result) => {
      axiosInstance.defaults.headers["Authorization"] =
        "Token " + result.data.token;
      localStorage.setItem("token", result.data.token);
      dispatch({ type: "SignIn" });
    })
    .catch((error) => {
      console.log(error.stack);
      dispatch({ type: "AuthError", payload: "Invalid User Infos" });
      setTimeout(() => {
        dispatch({ type: "AuthError", payload: "" });
      }, 2000);
    });

// Sign in
export const signin = (data) =>
  axiosInstance
    .post("auth/login/", {
      email: data.email,
      password: data.password,
    })
    .then((result) => {
      axiosInstance.defaults.headers["Authorization"] =
        "Token " + result.data.token;
      localStorage.setItem("token", result.data.token);
      dispatch({ type: "SignIn" });
    })
    .catch((error) => {
      console.log(error.stack);
      dispatch({ type: "AuthError", payload: "Invalid User Infos" });
      setTimeout(() => {
        dispatch({ type: "AuthError", payload: "" });
      }, 2000);
    });

// Sign out
export const signout = () =>
  axiosInstance
    .post("auth/logout/", {
      token: localStorage.getItem("token"),
    })
    .then((result) => {
      localStorage.removeItem("token");
      axiosInstance.defaults.headers["Authorization"] = null;
      dispatch({ type: "SignOut" });
    })
    .catch((err) => {
      console.log(err.stack);
      dispatch({ type: "AuthError", payload: "Server Error!" });
      setTimeout(() => {
        dispatch({ type: "AuthError", payload: "" });
      }, 2000);
      dispatch({ type: "SignOut" });
    });
