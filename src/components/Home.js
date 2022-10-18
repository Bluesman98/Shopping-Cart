import "../styles/Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "8vh",
    opacity: "0",
  },
  visible: {
    opacity: "1",
    y: "0",
  },
  exit: {
    height: "0px",
  },
};

const slideIn = {
  hidden: {
    x: "-27%",
  },
  visible: {
    x: "0",
  },
};

function Home() {
  useEffect(() => {
    document.querySelector(".cartDiv").classList.remove("hidden");
  }, []);

  return (
    <div className="Home">
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <img  src={process.env.PUBLIC_URL+"/tolkien.svg"} />
        <div className="box">
          <div>Welcome to Tolkien Book Shop</div>
          <motion.div
            variants={slideIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/shop">
              <button>Visit The Store</button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
