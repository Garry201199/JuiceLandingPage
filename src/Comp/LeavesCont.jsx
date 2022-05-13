import React from "react";
import Leaf from "./Leaf";
import leaf1 from "../images/leaf01.png";
import leaf2 from "../images/leaf02.png";
import leaf3 from "../images/leaf03.png";
import leaf4 from "../images/leaf04.png";
import leaf5 from "../images/leaf05.png";
import { motion } from "framer-motion";
const LeavesCont = () => {
  return (
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
  );
};

export default LeavesCont;
