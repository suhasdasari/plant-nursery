import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}
  },
  reducers: {
    addItem: (state, action) => {
      const productId = action.payload;
      state.items[productId] = (state.items[productId] || 0) + 1;
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      delete state.items[productId];
    },
    updateQuantity: (state, action) => {
      const { productId, change } = action.payload;
      const newQuantity = (state.items[productId] || 0) + change;
      if (newQuantity <= 0) {
        delete state.items[productId];
      } else {
        state.items[productId] = newQuantity;
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer; 