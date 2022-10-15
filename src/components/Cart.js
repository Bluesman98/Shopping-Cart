import CartItem from "./CartItem";
import '../styles/Cart.css'

function Cart(props) {
    return (
      <div className="Cart">
        <div className="top">
          <div>Shopping Cart</div>
          <div> Price</div>
        </div>
        {props.cart.map((item) => {
           return <CartItem key ={item.id} item={item} remove={props.remove} quantity={props.quantity}/>
          })}
          <div className="bottom"><div>Total {props.total()} $</div></div>
      </div>
    );
  }
  
  export default Cart;