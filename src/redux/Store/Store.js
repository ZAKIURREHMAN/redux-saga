import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cartSlice from "./Slice/Slice";
import productSlice from "./ProductSlice/ProductSlice";
import fetchFunctionProduct from "../../services/Saga"; 


const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(fetchFunctionProduct);
