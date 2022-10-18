import CartItem from "./CartItem";
import "../styles/Cart.css";
import { useEffect } from "react";

function Cart(props) {
  useEffect(() => {
    document.querySelector(".cartDiv").classList.add("hidden");
    props.modalOpen(false);
  }, []);

  return (
    <div className="Cart">
      <div className="top">
        <div>Shopping Cart</div>
        <div>Unit Price</div>
        <div>Subtotal</div>
      </div>
      {props.cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            remove={props.remove}
            quantity={props.quantity}
          />
        );
      })}
      <div className="bottom">
        <div>
          <button>Checkout</button>
        </div>
        <div></div>
        <div>{props.total().toFixed(2)} $</div>
      </div>
    </div>
  );
}

export default Cart;
