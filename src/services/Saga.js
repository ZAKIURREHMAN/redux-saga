import { call, put, takeLatest } from "redux-saga/effects";
import {
  productStatus,
  setProducts,
  setStatus,
} from "../Redux/Store/ProductSlice/ProductSlice";

function fetchProductApi() {
  return fetch(import.meta.env.VITE_DATA_URL).then((res) => {
    if (!res.ok) {
      throw new Error("Some Error");
    }
    return res.json();
  });
}

function* fetchProductSaga() {
  try {
    yield put(setStatus(productStatus.loading));
    let result = yield call(fetchProductApi);
    yield put(setProducts(result));
    yield put(setStatus(productStatus.idle));
  } catch (err) {
    yield put(setStatus(productStatus.error));
    throw new Error("Some Errors", err);
  }
}

function* fetchFunctionProduct() {
  yield takeLatest("FETCH_PRODUCT_REQUEST", fetchProductSaga);
}

export default fetchFunctionProduct;
