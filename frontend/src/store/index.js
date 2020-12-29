import { createStore } from "react-hooks-global-state";

// Reducers
const reducer = (state, action) => {
  switch (action.type) {
    case "SignIn":
      return { ...state, loggedin: true };
    case "SignOut":
      return { ...state, loggedin: false };
    case "AuthError":
      return { ...state, autherror: action.payload };
    default:
      return state;
  }
};
const initialState = { loggedin: false, autherror: "" };
export const { useGlobalStateProvider, dispatch, useGlobalState } = createStore(
  reducer,
  initialState
);
