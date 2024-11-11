// import React from "react";
// import classes from "./spare.module.css"; // Assuming you have a CSS file for styling
// import redmi from "./assets/redminote.svg";
// import nokia from "./assets/nokia.svg";
// import vector from "./assets/Vector.svg";

// const products = [
//   {
//     id: 1,
//     name: "Redmi note pro max 3 gb/128 Gb (blue)",
//     image: redmi,
//   },
//   {
//     id: 2,
//     name: "Noika 2345 2gb/32gb (violet)",
//     image: nokia,
//   },
//   {
//     id: 3,
//     name: "Apple iPhone 14 pro max",
//     image: redmi,
//   },
//   {
//     id: 4,
//     name: "Noika 2345 2gb/32gb (violet)",
//     image: nokia,
//   },
// ];

// export const NewPhone = () => {
//   return (
//     <>
//       <div className={classes.header}>
//         <h3>New Phones (Hot Deals)</h3>
//         <a href="/view-more" className={classes.viewMoreLink}>
//           View More <span className={classes.arrow}>→</span>
//         </a>
//       </div>
//       <div className={classes.cartContainer}>
//         {products.map((product, index) => (
//           <div key={product.id} className={classes.cartItem}>
//             <div className={classes.discountContainer}>
//               <img
//                 src={vector}
//                 alt="discount"
//                 className={classes.discountImage}
//               />
//               <span className={classes.discountText}>
//                 {product.discount_percentage}% OFF
//               </span>
//             </div>
//             <img
//               src={product.image}
//               alt={product.name}
//               className={classes.productImage}
//             />

//             <h3 className={classes.productName}>{product.name}</h3>

//             {/* Display different prices based on the index */}
//             {index === 0 || index === 3 ? (
//               <div className={classes.price}>
//                 <p>
//                   Rs.44,800 <span className={classes.span}>Rs.45,800</span>
//                 </p>
//               </div>
//             ) : (
//               <div className={classes.price}>
//                 <p>
//                   Rs.32,800 <span className={classes.span}>Rs.35,800</span>
//                 </p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default NewPhone;
// import React, { useEffect, useState } from "react";
// import classes from "./spare.module.css";
// import vector from "./assets/Vector.svg";

// const API_URL = "https://dev.backend.mobigarage.com/v1/mp/new_phones/?limit=4";

// export const NewPhone = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         setProducts(data.data || []);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <div className={classes.header}>
//         <h3>New Phones (Hot Deals)</h3>
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
//                   {product.discount_percentage > 0
//                     ? `${product.discount_percentage}% OFF`
//                     : ""}
//                 </span>
//               </div>

//               <img
//                 src={product.image}
//                 alt={product.model}
//                 className={classes.productImage}
//               />

//               <h3 className={classes.productName}>
//                 {product.brand} {product.model} ({product.ram}/{product.rom},{" "}
//                 {product.color})
//               </h3>

//               <div className={classes.price}>
//                 <p>
//                   Rs. {product.discounted_price}{" "}
//                   {product.original_price !== product.discounted_price && (
//                     <span className={classes.span}>
//                       Rs. {product.original_price}
//                     </span>
//                   )}
//                 </p>
//               </div>

//               {/* <p className={classes.productDetails}>
//                 Stock Status: {product.stock_status} <br /> */}
//               {/* Color: {product.color} <br />
//                 RAM: {product.ram} <br />
//                 ROM: {product.rom} */}
//               {/* </p> */}
//             </div>
//           ))
//         ) : (
//           <p>Loading products...</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default NewPhone;
import React, { useEffect, useState, useRef } from "react";
import classes from "./spare.module.css"; // Assuming same CSS file for styling
import vector from "./assets/Vector.svg";

const API_URL = "https://dev.backend.mobigarage.com/v1/mp/new_phones/?limit=4";

export const NewPhone = () => {
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
          // Check for successful response code if applicable
          console.log("Fetched New Phones Data:", data.data);
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
        <h3>New Phones (Hot Deals)</h3>
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
                  {product.discount_percentage > 0
                    ? `${product.discount_percentage}% OFF`
                    : ""}
                </span>
              </div>

              <img
                src={product.image}
                alt={product.model}
                className={classes.productImage}
              />

              <h3 className={classes.productName}>
                {product.brand} {product.model} ({product.ram}/{product.rom},{" "}
                {product.color})
              </h3>

              <div className={classes.price}>
                <p>
                  Rs. {product.discounted_price}{" "}
                  {product.original_price !== product.discounted_price && (
                    <span className={classes.span}>
                      Rs. {product.original_price}
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

export default NewPhone;
