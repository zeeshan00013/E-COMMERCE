// store.js
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { loadState, saveState } from './LocalStorgae';
import {thunk} from 'redux-thunk'; // Correct thunk import
const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState({
    ...store.getState(), // Save entire Redux state
  });
});

export default store;
