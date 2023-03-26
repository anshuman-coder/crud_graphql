import thunk from "redux-thunk";
import createDebounce from "redux-debounced";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers/rootReducer";

const middleware = [thunk, createDebounce()];

//dev tools setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middleware)));

export { store };