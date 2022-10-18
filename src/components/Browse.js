import Item from "./Item";
import "../styles/Browse.css";

function Browse(props) {
  function add(item) {
    props.add(item);
  }

  return (
    <div className="Browse">
      {props.list.items.map((item, i) => {
        return <Item key={i} item={item} add={add} />;
      })}
    </div>
  );
}

export default Browse;
