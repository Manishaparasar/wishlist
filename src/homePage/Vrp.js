import bg from "./assets/bg.svg";
import vector from "./assets/Vector.svg";

import React, { useEffect, useState, useRef } from "react";
import classes from "./vrp.module.css";

export const Vrp = () => {
  const [products, setProducts] = useState([]);
  const hasFetched = useRef(false);
  const fetchData = async () => {
    console.log("Fetching data...");
    try {
      const response = await fetch(
        "https://dev.backend.mobigarage.com/v1/mp/vrp/?limit=4"
      );
      const data = await response.json();

      if (data.code === "200") {
        console.log("Fetched Data:", data.data);
        setProducts(data.data);
      } else {
        console.error("Error fetching data: ", data.message.errorMessage);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      console.log("Component mounted, calling fetchData");
      fetchData();
      hasFetched.current = true;
    }
  }, []);

  return (
    <>
      <>
        <div className={classes.imageContainer}>
          <img src={bg} alt="frame" className={classes.frame} />
        </div>

        {/* <div className={classes.rectangleContainer}>
          {Array(5)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className={classes.rectangle}
                onClick={() => handleRectangleClick(index)}
              ></div>
            ))}
        </div> */}

        <div className={classes.header}>
          <h3>VRP (Hot Deals)</h3>
          <a href="/view-more" className={classes.viewMoreLink}>
            View More <span className={classes.arrow}>→</span>
          </a>
        </div>

        <div className={classes.cartContainer}>
          {products.map((product) => (
            <div key={product.request_id} className={classes.cartItem}>
              <div className={classes.discountContainer}>
                <img
                  src={vector}
                  alt="discount"
                  className={classes.discountImage}
                />
                <span className={classes.discountText}>
                  {product.discount_percentage}% OFF
                </span>
              </div>

              <img
                src={product.image}
                alt={product.request_id}
                className={classes.productImage}
              />

              <h3 className={classes.productName}>
                VRP No. {product.request_id}
              </h3>

              <div className={classes.text}>
                <p className={classes.text}>
                  P4%:{" "}
                  <span className={classes.second}>
                    {product.p4_percentage}%
                  </span>
                </p>
                <p className={classes.text}>
                  ASP: <span className={classes.second}>{product.ASP}</span>
                </p>
                <p className={classes.text}>
                  Apple%:{" "}
                  <span className={classes.second}>
                    {product.apple_percentage}%
                  </span>
                </p>
                <p className={classes.text}>
                  #Phones:{" "}
                  <span className={classes.second}>{product.total_phones}</span>
                </p>
              </div>
              <div className={classes.price}>
                <p>
                  Rs.{product.rate_card}{" "}
                  <span className={classes.span}>
                    Rs.{product.original_price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default Vrp;
