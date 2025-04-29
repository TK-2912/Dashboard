import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../data/initialData";

const widgetSlice = createSlice({
  
  name: "widgets",

  initialState: initialData,

  reducers: {
    
    addWidget: (state, action) => {
      const { category, widget } = action.payload;
      const cat = state.find((c) => c.category === category);
      if (cat) cat.widgets.push(widget);
    },

    removeWidget: (state, action) => {
      const { category, widgetId } = action.payload;
      const cat = state.find((c) => c.category === category);
      if (cat) cat.widgets = cat.widgets.filter((w) => w.id !== widgetId);
    },

  },
});

export const { addWidget, removeWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
