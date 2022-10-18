import "../styles/CartModalItem.css";
function CartModalItem(props) {
  console.log(props);
  return (
    <div className="CartModalItem">
      <div>
        <img src={props.item.img}></img>
        <div>
          <div className="modal-item-name">{props.item.name}</div>
          <div className="quantity">
            <div>Qty :</div>
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
          </div>
          <div className="modal-item-price">
            <div>Price: </div>
            <div>{props.item.price} $</div>
          </div>
        </div>
      </div>
      <i
        className="removeFromCart fa-solid fa-xmark"
        onClick={() => {
          props.remove(props.item.id);
        }}
      ></i>
    </div>
  );
}

export default CartModalItem;
