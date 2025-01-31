import {legacy_createStore as createStore } from 'redux';
import {rootReducer} from "./Reducer.js";

export const store = createStore(
    rootReducer
);

export default store;