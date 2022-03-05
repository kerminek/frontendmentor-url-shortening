import { createSlice } from "@reduxjs/toolkit";

const linksSlice = createSlice({
  name: "links",
  initialState: {
    links: [],
  },
  reducers: {
    linksAdd: (state, action) => {
      state.links = [action.payload, ...state.links.slice(0, 2)];
    },
    linksRemove: (state, action) => {
      state.links = state.filter((x) => x !== action.payload);
    },
  },
});

export const { linksAdd, linksRemove } = linksSlice.actions;
export default linksSlice.reducer;
