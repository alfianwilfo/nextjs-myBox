import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let url = "http://localhost:3001";

const initialState = {
  products: [],
};

export const counterSlice = createSlice({
  name: "fetcher",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      axios({ url: url + "/products" }).then(({ data }) => {
        initialState.products = data;
        console.log(initialState, "??");
        state.products = data;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchProducts } = counterSlice.actions;

export default counterSlice.reducer;
