import React from "react";
import order from "./assets/order.svg";
import Footer from "../footer/Footer";
import SearchIcon from "../search/SearchIcon";
import classes from "./orderSuccess.module.css";
export const OrderSuccess = () => {
  return (
    <>
      <SearchIcon />
      <div>
        <img src={order} className={classes.main} alt="order success" />
        <h1 className={classes.box}>Your order is placed successfully.</h1>
        <br />
        <div className={classes.box2}>
          <p>
            Feel free to track your order from <span>'My orders's</span>
          </p>
        </div>
      </div>
      <br />
      <button>Continue Shopping</button>
      <Footer />
    </>
  );
};
export default OrderSuccess;
