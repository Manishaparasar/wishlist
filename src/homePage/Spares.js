// // import React from "react";
// // import classes from "./spare.module.css"; // Assuming you have a CSS file for styling
// // import spare from "./assets/spare.svg"; // Image used for all products
// // import vector from "./assets/Vector.svg";

// // const products = [
// //   {
// //     id: 1,
// //     name: "LCD compatible for apple iPhone 15 Max Pro",
// //     image: spare,
// //   },
// //   {
// //     id: 2,
// //     name: "Speaker for compatible devices",
// //     image: spare,
// //   },
// //   {
// //     id: 3,
// //     name: "LCD compatible for apple iPhone 15 Max Pro Thunder...",
// //     image: spare,
// //   },
// //   {
// //     id: 4,
// //     name: "Speaker for compatible devices",
// //     image: spare,
// //   },
// // ];

// // export const Spare = () => {
// //   return (
// //     <>
// //       <div className={classes.header}>
// //         <h3>Spares (Hot Deals)</h3>
// //         <a href="/view-more" className={classes.viewMoreLink}>
// //           View More <span className={classes.arrow}>→</span>
// //         </a>
// //       </div>
// //       <div className={classes.cartContainer}>
// //         {products.map((product) => (
// //           <div key={product.id} className={classes.cartItem}>
// //             <div className={classes.discountContainer}>
// //               <img
// //                 src={vector}
// //                 alt="discount"
// //                 className={classes.discountImage}
// //               />

// //               <span className={classes.discountText}>
// //                 {product.discount_percentage}% OFF
// //               </span>
// //             </div>

// //             <img
// //               src={product.image}
// //               alt={product.name}
// //               className={classes.productImage}
// //             />

// //             <h3 className={classes.productName}>{product.name}</h3>

// //             <div className={classes.price}>
// //               <p>
// //                 Rs.2,800 <span className={classes.span}>Rs.3,800</span>
// //               </p>
// //             </div>

// //             <p className={classes.productDetails}>
// //               {/* Extra details can be added here if needed */}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default Spare;
// import React, { useEffect, useState } from "react";
// import classes from "./spare.module.css";
// import vector from "./assets/Vector.svg"; // Discount image

// const API_URL = "https://dev.backend.mobigarage.com/v1/mp/spares/?limit=4";

// export const Spare = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         if (data.code === "200") {
//           console.log("Fetched Products Spares Data:", data.data);
//           setProducts(data.data || []);
//         } else {
//           console.error("Error fetching products:", data.message.errorMessage);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <div className={classes.header}>
//         <h3>Spares (Hot Deals)</h3>
//         <a href="/view-more" className={classes.viewMoreLink}>
//           View More <span className={classes.arrow}>→</span>
//         </a>
//       </div>
//       <div className={classes.cartContainer}>
//         {products.length > 0 ? (
//           products.map((product) => (
//             <div key={product.id} className={classes.cartItem}>
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
//                 alt={product.part_name}
//                 className={classes.productImage}
//               />

//               <h3 className={classes.productName}>{product.part_name}</h3>

//               <div className={classes.price}>
//                 <p>
//                   Rs.{product.discounted_price}{" "}
//                   {product.original_price !== product.discounted_price && (
//                     <span className={classes.span}>
//                       Rs.{product.original_price}
//                     </span>
//                   )}
//                 </p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Loading products...</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default Spare;
import React, { useEffect, useState, useRef } from "react";
import classes from "./spare.module.css";
import vector from "./assets/Vector.svg"; // Discount image

const API_URL = "https://dev.backend.mobigarage.com/v1/mp/spares/?limit=4";

export const Spare = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const hasFetched = useRef(false); // Ref to prevent multiple fetches

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.code === "200") {
          console.log("Fetched Products Spares Data:", data.data);
          setProducts(data.data || []);
        } else {
          console.error("Error fetching products:", data.message.errorMessage);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    // Fetch data only if it hasn't been fetched yet
    if (!hasFetched.current) {
      fetchProducts();
      hasFetched.current = true; // Mark as fetched
    }
  }, []);

  return (
    <>
      <div className={classes.header}>
        <h3>Spares (Hot Deals)</h3>
        <a href="/view-more" className={classes.viewMoreLink}>
          View More <span className={classes.arrow}>→</span>
        </a>
      </div>
      <div className={classes.cartContainer}>
        {loading ? ( // Conditional rendering for loading state
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={classes.cartItem}>
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
                alt={product.part_name}
                className={classes.productImage}
              />

              <h3 className={classes.productName}>{product.part_name}</h3>

              <div className={classes.price}>
                <p>
                  Rs.{product.discounted_price}{" "}
                  {product.original_price !== product.discounted_price && (
                    <span className={classes.span}>
                      Rs.{product.original_price}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
};

export default Spare;
