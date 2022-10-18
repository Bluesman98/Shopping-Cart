import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Cart from "./components/Cart";
import CartModal from "./components/CartModal";
import Home from "./components/Home";
import Shop from "./components/Shop";
import data from "./data/data";

import "./styles/App.css";
function App() {
  const [items, setItems] = useState(data());

  const [cart, setCart] = useState([]);

  function addToCart(item) {
    if (!isInCart(item)) {
      let temp = { ...item };
      temp.quantity = 1;
      console.log("hello");
      setCart((array) => [...array, temp]);
    }
  }

  function removeFromCart(id) {
    setCart(
      cart.filter(function (item) {
        return item.id !== id;
      })
    );
  }

  function isInCart(item) {
    let temp = [...cart];
    let check = false;
    temp.map((i) => {
      if (item.id === i.id) {
        i.quantity++;
        setCart(temp);
        check = true;
      }
    });

    return check;
  }

  const [counter, setCounter] = useState(0);

  function cartLength() {
    let sum = 0;
    cart.map((item) => {
      sum += item.quantity;
    });
    console.log(sum);
    setCounter(sum);
  }

  function changeQuantity(item, num) {
    let temp = [...cart];
    temp.map((i) => {
      if (i.id === item.id) {
        i.quantity += num;
        setCart(temp);
        if (i.quantity == 0) removeFromCart(i.id);
      }
    });
  }

  function cartTotal() {
    let sum = 0;
    cart.map((item) => {
      sum += item.price * item.quantity;
    });
    return sum;
  }

  const [isOpen, setIsOpen] = useState(false);

  function close(e) {
    if (
      !e.target.closest(".CartModal") &&
      !e.target.closest(".CartModalItem") &&
      e.target !== document.querySelector(".cart")
    ) {
      setIsOpen(false);
      window.removeEventListener("click", close);
    }
  }

  function handlemodal() {
    if (isOpen === false) {
      setIsOpen(true);
      window.addEventListener("click", close);
    } else {
      setIsOpen(false);
      window.removeEventListener("click", close);
    }
  }
  useEffect(() => {
    cartLength();
    console.log(cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <div className="nav">
            <Link to={process.env.PUBLIC_URL + "/home"}>Home</Link>
            <Link to={process.env.PUBLIC_URL + "/shop"}>Shop</Link>
          </div>
          <div className="cartDiv">
            <div>{counter}</div>
            <i
              className="fa-solid fa-cart-shopping cart"
              onClick={handlemodal}
            ></i>
          </div>
          <AnimatePresence>
            {isOpen && (
              <CartModal
                open={isOpen}
                cart={cart}
                remove={removeFromCart}
                quantity={changeQuantity}
                total={cartTotal}
                modalOpen={setIsOpen}
              />
            )}
          </AnimatePresence>
        </div>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Navigate to={process.env.PUBLIC_URL + "/home"} />} />
          <Route path={process.env.PUBLIC_URL + "/home"} element={<Home />} />
          <Route
            path={process.env.PUBLIC_URL + "/shop"}
            element={<Shop items={items} cart={cart} add={addToCart} />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/cart"}
            element={
              <Cart
                cart={cart}
                quantity={changeQuantity}
                total={cartTotal}
                remove={removeFromCart}
                modalOpen={setIsOpen}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
