import { createSlice } from "@reduxjs/toolkit";
import { products } from "../assets/frontend_assets/assets";
const initialState = {
  products: products,
  currency: "$",
  deliveryFees: 10,
  showSearch: false,
  search: "",
  cartItems: {},
  totalItems: 0,
};

const calculateTotalItems = (cartItems) => {
  return Object.values(cartItems).reduce((total, sizeMap) => {
    return total + Object.values(sizeMap).reduce((sum, qty) => sum + qty, 0);
  }, 0);
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleShowSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    addToCart: (state, action) => {
      const { itemId, size } = action.payload;

      if (!state.cartItems[itemId]) {
        // Step 1: item does not exist, so create it with the selected size
        state.cartItems[itemId] = {}; // create empty size map
        state.cartItems[itemId][size] = 1; // set quantity 1 for that size
      } else {
        // Step 2: item exists
        if (!state.cartItems[itemId][size]) {
          // size doesn't exist yet
          state.cartItems[itemId][size] = 1;
        } else {
          // size already exists, just increment
          state.cartItems[itemId][size] += 1;
        }
      }
      state.totalItems = calculateTotalItems(state.cartItems);
    },
  },
});

export const { toggleShowSearch, setSearch, addToCart } = ProductSlice.actions;
export default ProductSlice.reducer;
