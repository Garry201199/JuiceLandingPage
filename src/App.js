import "./App.css";
import { fadeIn } from "./Comp/variants";
import { motion } from "framer-motion";

import juice from "./images/juice.png";

import { staggeredContainer } from "../src/Comp/variants";
import Leaf from "./Comp/Leaf";
import leaf1 from "./images/leaf01.png";
import leaf2 from "./images/leaf02.png";
import leaf3 from "./images/leaf03.png";
import leaf4 from "./images/leaf04.png";
import leaf5 from "./images/leaf05.png";
function App() {
  return (
    <div>
      {/* AppBar */}
      <motion.div
        variants={fadeIn("down")}
        initial="initial"
        animate="animate"
        className="h-[10vh] font-cor font-bold flex items-center px-10 py-4 md:px-20 text-lg justify-between"
      >
        <div className="font-black md:text-4xl">GARRY'S JUICES</div>

        <ul className="justify-center text-2xl flex-1 hidden space-x-5 md:flex">
          <li>SHOP</li>
          <li>STORY</li>
          <li>MENU</li>
          <li>CONTACT</li>
          <li>ALL JUICES</li>
        </ul>

        <span className="hidden font-bold text-2xl md:block">My Account</span>
      </motion.div>
      {/* Container */}
      <main>
        <motion.div
          variants={staggeredContainer}
          initial="initial"
          animate="animate"
          className="flex  flex-col h-full px-2 py-28 md:px-52"
        >
          {/* TOp */}
          <div className="flex  items-center justify-between text-lg md:text-2xl ">
            <motion.span
              variants={fadeIn("up", 0)}
              className="font-pop text-3xl text-green-600"
            >
              Find Your Clean Juice
            </motion.span>

            <motion.span
              variants={fadeIn("up", 0.5)}
              className="font-cor  text-5xl"
            >
              <span className="text-8xl font-bold">2</span> / 4{" "}
            </motion.span>
          </div>

          {/* MID  */}
          <motion.div
            className=" grid place-items-center my-20 "
            variants={fadeIn("up")}
            animate="animate"
            initial="initial"
          >
            <h1 className="text-9xl tracking-wider font-cor font-extrabold text-black ">
              ORANGE
            </h1>
          </motion.div>

          {/* Bottom */}
          <div className="flex font-pop items-center justify-between">
            <motion.button
              variants={fadeIn("up", 1)}
              className="p-2 text-base tracking-wide text-white lowercase bg-gray-900 rounded-lg md:px-6 md:py-3 md:text-lg"
            >
              Show all your Juices
            </motion.button>

            <motion.p
              variants={fadeIn("up", 1.5)}
              className="text-sm font-semibold md:text-2xl"
            >
              Your Healthy <span className="text-green-600">Life</span> <br />{" "}
              Starts here with us !
            </motion.p>
          </div>
        </motion.div>
        {/* Juice Bootle */}
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", delay: 2.5, duration: 2 }}
          className="absolute  top-24 left-0 grid w-full text-center place-items-center"
        >
          <motion.img
            initial={{}}
            animate={{ y: [40, 0, 40] }}
            transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
            className="h-[400px] w-[250px] md:h-[550px] md:w-[500px] object-contain"
            src={juice}
            alt="juice"
          ></motion.img>
        </motion.div>

        {/*  */}
        <motion.div>
          <Leaf
            style={{ position: "absolute", top: "230px", left: "30%" }}
            imageUrl={leaf1}
          ></Leaf>
          <Leaf
            style={{ position: "absolute", top: "50%", right: "200px" }}
            imageUrl={leaf2}
          ></Leaf>
          <Leaf
            style={{ position: "absolute", top: "40px", right: "30%" }}
            imageUrl={leaf3}
          ></Leaf>
          <Leaf
            style={{ position: "absolute", top: "36%", right: "33.33%" }}
            imageUrl={leaf4}
          ></Leaf>
          <Leaf
            style={{ position: "absolute", top: "75%", left: "25%" }}
            imageUrl={leaf5}
          ></Leaf>
        </motion.div>
      </main>{" "}
    </div>
  );
}

export default App;
