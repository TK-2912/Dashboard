import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "./widgetSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("widgets");
    if (serializedState === null) return undefined;
    return { widgets: JSON.parse(serializedState) };
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.widgets);
    localStorage.setItem("widgets", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    widgets: widgetReducer,
  },
  preloadedState,
});


store.subscribe(() => {
  saveState(store.getState());
});

export default store;
