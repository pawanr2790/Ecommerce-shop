import { createSlice } from "@reduxjs/toolkit";
import { products } from "../assets/frontend_assets/assets";

const initialState = {
  products: products,
  currency: "$",
  deliveryFees: 10,
  showSearch: false,
  search: "",
  cartItems: [],
  totalItems: 0,
};

const calculateTotalItems = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
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
      const { product, size } = action.payload;
      const existingIndex = state.cartItems.find(
        (item) => item._id === product._id && item.size === size
      );

      if (existingIndex) {
        existingIndex.quantity += 1;
      } else {
        state.cartItems.push({
          ...product,
          quantity: 1,
          size,
        });
      }

      state.totalItems = calculateTotalItems(state.cartItems);
    },

    removeItemFromCart: (state, action) => {
      const { itemId, size } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => !(item._id === itemId && item.size === size)
      );
      state.totalItems = calculateTotalItems(state.cartItems);
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { toggleShowSearch, setSearch, addToCart, removeItemFromCart } =
  ProductSlice.actions;

export default ProductSlice.reducer;
