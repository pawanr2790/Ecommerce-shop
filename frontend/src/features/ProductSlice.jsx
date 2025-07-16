import { createSlice } from "@reduxjs/toolkit";
import { products } from "../assets/frontend_assets/assets";
const initialState = {
  products: products,
  currency: "$",
  deliveryFees: 10,
  showSearch: false,
  search: "",
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleShowSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
    setSearch: (state, action) => {
      console.log("coming", action.payload);
      state.search = action.payload;
    },
  },
});

export const { toggleShowSearch, setSearch } = ProductSlice.actions;
export default ProductSlice.reducer;
