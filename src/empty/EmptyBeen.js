import React from "react";
import empty from "../assets/empty.png";
import SearchIcon from "../search/SearchIcon";
import classes from "./emptyBeen.module.css"; // Import the CSS module
import Footer from "../footer/Footer";
export const EmptyBeen = () => {
  return (
    <>
      <SearchIcon />
      <div className={classes.emptyContainer}>
        <img src={empty} alt="emptybeen" className={classes.emptyImage} />
        <h2 className={classes.emptyTitle}>Empty Cart</h2>
        <p className={classes.emptyDescription}>
          Looks like you haven’t made <br />
          your choice yet
        </p>

        <button className={classes.backButton}>Back to product</button>
      </div>

      <Footer />
    </>
  );
};
export default EmptyBeen;
