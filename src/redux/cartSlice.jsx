import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // array of course objects
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const course = action.payload;
      console.log("course",course)
      const exists = state.items.find((item) => item.id === course.id);
      if (!exists) {
        state.items.push(course);
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
