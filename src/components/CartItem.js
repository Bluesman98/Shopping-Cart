import '../styles/CartItem.css'
function CartItem(props) {

    return (
      <div className="CartItem">
        <div><img src = {props.item.img}></img></div>
        <div>
            <div>{props.item.name}</div>
            <div className='quantity'>
                <div>Quantity</div>
              <button onClick={()=>{props.quantity(props.item,-1)}}>-</button>
              <div>{props.item.quantity}</div>
              <button onClick={()=>{props.quantity(props.item,+1)}}>+</button>
            </div>
        </div>
        <div className='price'>{props.item.price}$</div>
      </div>
    );
  }
  
  export default CartItem;