import React from "react";
import bell from "./assets/bell.svg";

import icon from "./assets/icon.svg";
import classes from "./header.module.css"; // Ensure to import your CSS module
import SearchIcon from "../search/SearchIcon";
const Header = () => {
  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.imageContainer}>
          <img src={icon} alt="mobigare" className={classes.headerImage} />
          <h3>MobiGarage</h3>
        </div>
        <div className={classes.bellContainer}>
          <div className={classes.dot}></div>
          <img src={bell} alt="Bell" className={classes.bellIcon} />
        </div>
      </div>

      <SearchIcon />
    </>
  );
};

export default Header; // Export the component
