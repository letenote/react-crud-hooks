import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "./middleware";
import contactReducer from "./redux/contact/contact.reducer";

const rootReducer = combineReducers({
  contact: contactReducer
});
const middleware = [ thunk, logger ];
const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    ? composeEnhanchers(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware))
);

export default store;