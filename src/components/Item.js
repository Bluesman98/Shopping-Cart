import "../styles/Item.css";

function Item(props) {
  function add() {
    props.add(props.item);
  }

  return (
    <div className="Item">
      <div>
        <img src={props.item.img}></img>
      </div>
      <div>
        <div className="name">{props.item.name}</div>
        <div className="series">{props.item.series}</div>
        <div className="price">{props.item.price} $ </div>
        <button onClick={add}>Add To Cart</button>
      </div>
    </div>
  );
}

export default Item;
