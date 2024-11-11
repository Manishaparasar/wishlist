import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import prexo from "../assets/prexo.png";
import vrpicon from "../assets/vrpicon.png";
import openbox from "../assets/open box.png";
import spares from "../assets/spares.png";
import newphone from "../assets/newphone.png";
import classes from "./navigationButto.module.css";

export const NavigationButton = () => {
  // const navigate = useNavigate(); // Initialize useNavigate

  const buttons = [
    { id: 1, name: "Prexo", path: "/prexo", image: prexo },
    { id: 2, name: "VRP", path: "/vrp", image: vrpicon },
    { id: 3, name: "Open Box", path: "/openbox", image: openbox },
    // { id: 4, name: "Spares", path: "/spares", image: spares }, // Unique id
    // { id: 5, name: "New Phone", path: "/newphone", image: newphone }, // Unique id
  ];

  return (
    <>
      <div className={classes.header}>
        <h3>Products Category</h3>
      </div>
      <div className={classes.navigationContainer}>
        {buttons.map((button) => (
          <button
            key={button.id}
            id={`btn-${button.id}`}
            className={classes.button}
            // onClick={() => navigate(button.path)} // Use navigate for routing
          >
            <img src={button.image} alt={button.name} />
            {button.name}
          </button>
        ))}
      </div>
    </>
  );
};
export default NavigationButton;
