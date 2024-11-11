// import React, { useEffect, useState, useRef } from "react";
// import classes from "./openBox.module.css"; // Ensure the correct CSS file is imported
// import vector from "./assets/Vector.svg";

// export const OpenBox = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const hasFetched = useRef(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://dev.backend.mobigarage.com/v1/mp/open_box/?limit=4"
//       );
//       const data = await response.json();

//       if (data.code === "200") {
//         console.log("Fetched Data:", data.data);
//         setProducts(data.data);
//       } else {
//         console.error("Error fetching data: ", data.message.errorMessage);
//       }
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!hasFetched.current) {
//       fetchData();
//       hasFetched.current = true; // Mark as fetched
//     }
//   }, []);

//   return (
//     <>
//       <div className={classes.header}>
//         <h3>Open Box (Hot Deals)</h3>
//         <a href="/view-more" className={classes.viewMoreLink}>
//           View More <span className={classes.arrow}>→</span>
//         </a>
//       </div>
//       <div className={classes.cartContainer}>
//         {loading ? (
//           <p>Loading...</p>
//         ) : products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.request_id} className={classes.cartItem}>
//               <div className={classes.discountContainer}>
//                 <img
//                   src={vector}
//                   alt="discount"
//                   className={classes.discountImage}
//                 />
//                 <span className={classes.discountText}>
//                   {product.discount_percentage}% OFF
//                 </span>
//               </div>
//               <img
//                 src={product.image}
//                 alt={product.model}
//                 className={classes.productImage}
//               />
//               <h3 className={classes.productName}>
//                 {product.model} ({product.ram}/{product.rom}, {product.color})
//               </h3>
//               <div className={classes.price}>
//                 <p>
//                   Rs. {product.discounted_price}{" "}
//                   <span className={classes.span}>
//                     Rs. {product.original_price}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default OpenBox;
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import classes from "./openBox.module.css";
import vector from "./assets/Vector.svg";

export const OpenBox = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://dev.backend.mobigarage.com/v1/mp/open_box/?limit=4"
      );
      const data = response.data; // Axios automatically parses the JSON response

      if (data.code === "200") {
        console.log("Fetched Data:", data.data);
        setProducts(data.data);
      } else {
        console.error("Error fetching data: ", data.message.errorMessage);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      fetchData();
      hasFetched.current = true; // Mark as fetched
    }
  }, []);

  return (
    <>
      <div className={classes.header}>
        <h3>Open Box (Hot Deals)</h3>
        <a href="/view-more" className={classes.viewMoreLink}>
          View More <span className={classes.arrow}>→</span>
        </a>
      </div>
      <div className={classes.cartContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
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
                alt={product.model}
                className={classes.productImage}
              />
              <h3 className={classes.productName}>
                {product.model} {product.ram} /{product.rom} ({product.color})
              </h3>
              <div className={classes.price}>
                <p>
                  Rs. {product.discounted_price}{" "}
                  <span className={classes.span}>
                    Rs. {product.original_price}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
};

export default OpenBox;
