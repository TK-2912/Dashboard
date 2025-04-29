import { createSlice } from "@reduxjs/toolkit";
import { availableWidgets } from "../data/initialData";

const availableWidgetsSlice = createSlice({

  name: "availableWidgets",

  initialState: availableWidgets,

  reducers: {
    addAvailableWidget: (state, action) => {
      const { category, widgetName } = action.payload;
      if (!state[category]) {
        state[category] = [];
      }
      state[category].push(widgetName);
    },
  },
  
});

export const { addAvailableWidget } = availableWidgetsSlice.actions;
export default availableWidgetsSlice.reducer;
