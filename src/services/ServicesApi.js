import {
  setProducts,
  setStatus,
  productStatus,
} from "../redux/Store/ProductSlice/ProductSlice";

//Thunk is just like a function where we return a new function
export const fetchProduct = () => {
  const fetchProductThunk = async (dispatch) => {
    dispatch(setStatus(productStatus.loading));
    try {
      let response = await fetch(import.meta.env.VITE_DATA_URL);
      if (!response.ok) {
        throw new Error("Some Errors");
      }
      let result = await response.json();
      dispatch(setProducts(result));
      dispatch(setStatus(productStatus.idle));
    } catch (err) {
      dispatch(setStatus(productStatus.error));
      throw new Error("Some Errors", err);
    }
  };
  return fetchProductThunk;
};
