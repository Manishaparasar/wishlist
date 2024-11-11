import React from "react";
import home from "../assets/home.png";
import grid from "../assets/grid.png";
import alert from "../assets/alert-circle.png";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.iconContainer}>
        <a href="/home" className={classes.iconLink}>
          <img src={home} alt="Home" className={classes.icon} />
          <span className={classes.text}>Home</span>
        </a>
        <a href="/CategoryPage" className={classes.iconLink}>
          <img src={grid} alt="grid" className={classes.icon} />
          <span className={classes.text}>Category</span>
        </a>
        <a href="/HelpPage" className={classes.iconLink}>
          <img src={alert} alt="Help" className={classes.icon} />
          <span className={classes.text}>Help</span>
        </a>
        <a href="/cart" className={classes.iconLink}>
          <img src={cart} alt="cart" className={classes.icon} />
          <span className={classes.text}>cart</span>
        </a>
        <a href="/user" className={classes.iconLink}>
          <img src={user} alt="Profile" className={classes.icon} />
          <span className={classes.text}>Profile</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
