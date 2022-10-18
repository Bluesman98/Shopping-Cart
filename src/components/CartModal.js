import "../styles/CartModal.css";
import CartModalItem from "./CartModalItem";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.734)",
  zIndex: 500,
};

const dropIn = {
  hidden: {
    height: "0",
    opacity: "0",
  },
  visible: {
    height: "fit-content",
    opacity: "1",
  },
  exit: {
    height: "0px",
  },
};

function CartModal(props) {
  useEffect(() => {
    if (document.querySelector(".cart-empty>button"))
      document.querySelector(".cart-empty>button").classList.add("hidden");
  }, []);
  if (!props.cart.length)
    return (
      <motion.div
        className="CartModal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <div className="cart-empty">
          <div>Your Cart Is Empty</div>
          <i className="fa-solid fa-cart-shopping"></i>
          <Link to={process.env.PUBLIC_URL + "/shop"}>
            <button
              onClick={() => {
                props.modalOpen(false);
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </motion.div>
    );
  return (
    <motion.div
      className="CartModal"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="view-cart">
        <Link to={process.env.PUBLIC_URL + "/cart"}>
          <button>Cart & Checkout</button>
        </Link>
        <div>{props.total().toFixed(2)} $</div>
      </div>
      <div className="item-div">
        {props.cart.map((item) => {
          return (
            <CartModalItem
              key={item.id}
              item={item}
              remove={props.remove}
              quantity={props.quantity}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default CartModal;
