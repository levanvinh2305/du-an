import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./../reducers";

const loggerMiddleware = createLogger();
const initalState = {};
const middleware = [thunk];
const store = createStore(
    rootReducer,
    initalState,
    compose(applyMiddleware(...middleware,loggerMiddleware))
);
export default store;
