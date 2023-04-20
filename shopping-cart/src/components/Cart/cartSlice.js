import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addCart: (state, action) => {
      const { id, name, price } = action.payload;
      state.items.push(action.payload);
    },

    removeCart: (state, action) => {
      const idToRemove = action.payload.id;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
