import "../styles/CartModal.css";
import  ReactDOM  from "react-dom";
import { useEffect } from "react";
import CartModalItem from "./CartModalItem";
import { Link,useNavigate} from "react-router-dom";


const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.734)',
    zIndex:500
}

function CartModal(props) {



    //ReactDOM.render(<div style={OVERLAY_STYLE}></div>,document.getElementById('portal'))
  if (!props.open) return null
  if(!props.cart.length) return <div className="CartModal">Cart is empty </div>
  return (
      <div className="CartModal">
                <div className="view-cart">
                  <Link to="/cart" ><button>Cart & Checkout</button></Link>
                  <div>{props.total().toFixed(2)} $</div>
                </div>
        <div className="item-div">
          {props.cart.map((item) => {
             return <CartModalItem key ={item.id} item={item} remove={props.remove} quantity={props.quantity}/>
            })}
        </div>
      </div>

  );
}

export default CartModal;
