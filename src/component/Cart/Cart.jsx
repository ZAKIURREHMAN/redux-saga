import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/Store/Slice/Slice";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/Store/Slice/Slice";

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="cart-container">
        <div className="cart-box">
          <table>
            <thead>
              <tr>
                <th>ID Number</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
                <th>Increase</th>
                <th>decrease</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img src={item.image} alt={item.title} width="50" />
                  </td>
                  <td>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => dispatch(removeItem(item.id))}>
                      Delete
                    </button>{" "}
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch(increaseQuantity({ id: item.id }))
                      }
                    >
                      Increase
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity({ id: item.id }))
                      }
                    >
                      decrease
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <div className="total-price">
            <p>Total Price</p>
            <p>$ {totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
