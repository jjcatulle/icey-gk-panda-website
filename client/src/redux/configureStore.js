import { Store, createStore, applyMiddleware } from "redux";
// `react-router-redux` is deprecated, so we use `connected-react-router`.
// This provides a Redux middleware which connects to our `react-router` instance.
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
// If you use react-router, don't forget to pass in your history type.
import { History } from "history";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";

// Import the state interface and our combined reducers/sagas.
import { ApplicationState, createRootReducer } from "./rootReducer";

const middlewares = [thunk];

// if developement apply middlewares
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export let persistor = persistStore(store);
