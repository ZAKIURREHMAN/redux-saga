import { createSlice } from "@reduxjs/toolkit";

export const productStatus = {
  idle: "idle",
  loading: "loading",
  error: "error",
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: productStatus.idle,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const productData = (state) => state.products.data

export const { setProducts, setStatus } = productSlice.actions;



export default productSlice.reducer;
