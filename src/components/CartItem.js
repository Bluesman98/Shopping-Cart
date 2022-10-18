import "../styles/CartItem.css";
function CartItem(props) {
  return (
    <div className="CartItem">
      <div>
        <img src={props.item.img}></img>
        <div className="item-details">
          <div className="modal-item-name">{props.item.name}</div>
          <div className="quantity">
            <div>Quantity</div>
            <i
              className="fa-solid fa-minus"
              onClick={() => {
                props.quantity(props.item, -1);
              }}
            ></i>
            <div className="quantity-number">{props.item.quantity}</div>
            <i
              className="fa-solid fa-plus"
              onClick={() => {
                props.quantity(props.item, +1);
              }}
            ></i>
            <i
              className="removeFromCart fa-solid fa-xmark"
              onClick={() => {
                props.remove(props.item.id);
              }}
            ></i>
          </div>
        </div>
      </div>
      <div className="unit-price">{props.item.price} $</div>
      <div className="subtotal">
        {(props.item.price * props.item.quantity).toFixed(2)} $
      </div>
    </div>
  );
}

export default CartItem;
