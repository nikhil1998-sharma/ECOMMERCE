import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.attributes;
      //   console.log("product : ", product);
      const currItem = product
        ? {
            title: product.title,
            key: product.key,
            price: product.price,
            image: product.image.data.attributes.url,
          }
        : action.payload;

      //   console.log("currItem : ", currItem);

      const index = state.cart.findIndex((item) => item.key === currItem.key);
      if (index === -1) {
        state.cart.push({ ...currItem, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const currKey = action.payload?.attributes?.key || action.payload.key;
      const index = state.cart.findIndex((item) => item.key === currKey);
      if (index === -1) return;
      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter((item) => item.key !== currKey); // if only one item is present in cart
      } else {
        state.cart[index].quantity -= 1;
      }
    },
    removeCartItem: (state, action) => {
      const currKey = action.payload.key;
      state.cart = state.cart.filter((item) => item.key !== currKey);
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, removeCartItem, resetCart } =
  cartSlice.actions;
