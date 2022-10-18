import { useEffect, useState } from "react";
import Browse from "./Browse";
import "../styles/Shop.css";

function Shop(props) {
  const [current, setCurrent] = useState(props.items[0]);

  useEffect(() => {
    document.querySelector(".cartDiv").classList.remove("hidden");
    showAll(document.querySelector("li"));
  }, []);

  function browseTo(i) {
    setCurrent(props.items[i]);
  }

  function showAll(target) {
    let temp = { items: [] };
    props.items.map((item) => {
      item.items.map((i) => {
        temp.items.push(i);
      });
    });
    setCurrent(temp);
    console.log(target);
    currentCategory(target);
  }

  function currentCategory(target) {
    document.querySelectorAll("li").forEach((li) => {
      li.classList.remove("current");
    });
    target.classList.add("current");
  }

  return (
    <div className="Shop">
      <div className="sidebar">
        <div>
          <li
            onClick={(e) => {
              showAll(e.target);
            }}
          >
            All Books
          </li>
          <div>By Series</div>
          {props.items.map((item, i) => {
            return (
              <li
                key={i}
                onClick={(e) => {
                  browseTo(i);
                  currentCategory(e.target);
                }}
              >
                {item.name}
              </li>
            );
          })}
        </div>
      </div>
      <div className="main">
        <Browse list={current} add={props.add} />
      </div>
    </div>
  );
}

export default Shop;
