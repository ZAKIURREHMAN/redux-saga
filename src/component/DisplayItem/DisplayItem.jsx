import { useEffect } from "react";
import "./DisplayItem.css";
import { addToCarts } from "../../redux/Store/Slice/Slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../services/ServicesApi";
import {productData} from '../../redux/Store/ProductSlice/ProductSlice'

function DisplayItem() {
  const data = useSelector(productData)
  const dispatch = useDispatch();

  useEffect(() => {
    //Call data using thunk
    dispatch(fetchProduct())
    //Call data using SAGA middleware 
    // dispatch({type:'FETCH_PRODUCT_REQUEST'})
  }, [dispatch]);

  return (
    <div className="add-to-cart-container">
      <div className="cart-container">
        {data.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2 className="cart-item-name">{item.title}</h2>
              <p className="cart-item-price">${item.price}</p>
              <button
                className="add-to-cart-button"
                onClick={() => dispatch(addToCarts(item))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayItem;
