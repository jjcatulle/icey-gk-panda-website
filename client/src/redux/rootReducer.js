import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";

// import { ThemeState, themeReducer } from "./theme/reducers";
import UserReducer from "./user";

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = () =>
  combineReducers({
    user: UserReducer,
  });

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
