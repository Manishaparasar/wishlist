// import React from "react";
// import styles from "./cart.module.css";
// import heart from "../assets/heart.png";
// import box from "../assets/box.png";
// import box2 from "../assets/box2.png";
// import box3 from "../assets/box3.png";
// import box4 from "../assets/box4.png";
// import forward from "../assets/forward icon.png";
// import SearchIcon from "../search/SearchIcon";
// import Filter from "../filter/Filter";
// import Footer from "../footer/Footer";

// const Cart = () => {
//   const products = [
//     {
//       image: box,
//       title: "VRP",
//       id: "#123456",
//       totalPhones: 50,
//       priceBefore: "Rs.13,800",
//       discount: "43% Discount",
//     },
//     {
//       image: box2,
//       title: "Prexo",
//       id: "Xiaomi 11 Lite NE 5G New",
//       totalPhones: 25,
//       priceBefore: "Rs.13,800",
//       discount: "43% Discount",
//     },
//     {
//       image: box3,
//       title: "Open Box",
//       id: "Xiaomi 11 Lite NE 5G Pro",
//       priceBefore: "Rs.13,800",
//       discount: "43% Discount",
//     },
//     {
//       image: box4,
//       title: "VRP",
//       id: "#123457",
//       totalPhones: 50,
//       priceBefore: "Rs.13,800",
//       discount: "43% Discount",
//     },
//   ];

//   const handleForwardClick = () => {
//     // Implement functionality for the forward button
//     console.log("Forward clicked");
//   };

//   return (
//     // <div className={styles.profileContainer}>
//     //   {/* <div className={styles.searchContainer}>
//     //     <div className={styles.icon} onClick={handleForwardClick}>
//     //       <img src={forward} alt="forward icon" />
//     //     </div> */}
// <>
//         <SearchIcon />
//       // </div>
//       <Filter />
//       <div className={styles.cartContainer}>
//         {products.map((product, index) => (
//           <div key={index} className={styles.cart}>
//             <img src={heart} alt="icon of heart" className={styles.heartIcon} />
//             <div className={styles.cartContent}>
//               <img
//                 src={product.image}
//                 alt="Product"
//                 className={styles.cartImage}
//               />
//               <div className={styles.textContainer}>
//                 <h2
//                   className={`${styles.productTitle} ${
//                     product.title === "VRP" ? styles.vrpColor : ""
//                   }`}
//                 >
//                   {product.title}
//                 </h2>
//                 <p>ID: {product.id}</p>
//                 {product.totalPhones && (
//                   <p>Total Phones: {product.totalPhones}</p>
//                 )}
//                 <div className={styles.priceContainer}>
//                   <p className={styles.priceBefore}>{product.priceBefore}</p>
//                   <span className={styles.discount}>{product.discount}</span>
//                 </div>
//                 <div className={styles.cartButtons}>
//                   <button className={styles.addToCart}>Add to Cart</button>
//                   <button className={styles.buyNow}>Buy Now</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//   </>
//   );
// };

// export default Cart;
import React from "react";
import styles from "./cart.module.css";
import heart from "../assets/heart.png";
import box from "../assets/box.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import box4 from "../assets/box4.png";
import SearchIcon from "../search/SearchIcon";
import Filter from "../filter/Filter";
import Footer from "../footer/Footer";

const Cart = () => {
  const products = [
    {
      image: box,
      title: "VRP",
      id: "#123456",
      totalPhones: 50,
      priceBefore: "Rs.13,800",
      discount: "43% Discount",
    },
    {
      image: box2,
      title: "Prexo",
      id: "Xiaomi 11 Lite NE 5G New",
      totalPhones: 25,
      priceBefore: "Rs.13,800",
      discount: "43% Discount",
    },
    {
      image: box3,
      title: "Open Box",
      id: "Xiaomi 11 Lite NE 5G Pro",
      priceBefore: "Rs.13,800",
      discount: "43% Discount",
    },
    {
      image: box4,
      title: "VRP",
      id: "#123457",
      totalPhones: 50,
      priceBefore: "Rs.13,800",
      discount: "43% Discount",
    },
  ];

  return (
    <>
      <SearchIcon />
      <Filter />
      <div className={styles.cartContainer}>
        {products.map((product, index) => (
          <div key={index} className={styles.cart}>
            <img src={heart} alt="icon of heart" className={styles.heartIcon} />
            <div className={styles.cartContent}>
              <img
                src={product.image}
                alt="Product"
                className={styles.cartImage}
              />
              <div className={styles.textContainer}>
                <h2
                  className={`${styles.productTitle} ${
                    product.title === "VRP" ? styles.vrpColor : ""
                  }`}
                >
                  {product.title}
                </h2>
                <p>ID: {product.id}</p>
                {product.totalPhones && (
                  <p>Total Phones: {product.totalPhones}</p>
                )}
                <div className={styles.priceContainer}>
                  <p className={styles.priceBefore}>{product.priceBefore}</p>
                  <span className={styles.discount}>{product.discount}</span>
                </div>
                <div className={styles.cartButtons}>
                  <button className={styles.addToCart}>Add to Cart</button>
                  <button className={styles.buyNow}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
