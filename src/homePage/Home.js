// import React from "react";
// import classes from "./home.module.css";
// import vrp from "./assets/image 32.svg"; // Image used for all products
// import bg from "./assets/bg.svg";
// import NavigationButton from "../homeButton/NavigationButton";
// import discount from "./assets/discount.svg";
// import Header from "./Header";
// import Spare from "./Spares";
// import NewPhone from "./NewPhone";
// import Footer from "../footer/Footer";
// // import SearchIcon from "../search/SearchIcon";
// const products = [
//   {
//     id: 1,
//     name: "VRP No. #8456321",

//     image: vrp,
//   },
//   {
//     id: 2,
//     name: "VRP No. #8456321",

//     image: vrp,
//   },
//   {
//     id: 3,
//     name: "VRP No. #8456321",

//     image: vrp,
//   },
//   {
//     id: 4,
//     name: "VRP No. #8456321",

//     image: vrp,
//   },
// ];

// export const Home = () => {
//   return (
//     <>
//       <Header />
//       {/* <SearchIcon /> */}
//       <NavigationButton />
//       <div className={classes.imageContainer}>
//         <img src={bg} alt="frame" className={classes.frame} />
//       </div>
//       <div className={classes.rectangleContainer}>
//         {Array(5)
//           .fill()
//           .map((_, index) => (
//             <div key={index} className={classes.rectangle}></div>
//           ))}
//       </div>

//       <div className={classes.header}>
//         <h3>VRP (Hot Deals)</h3>
//         <a href="/view-more" className={classes.viewMoreLink}>
//           View More <span className={classes.arrow}>→</span>
//         </a>
//       </div>
//       <div className={classes.cartContainer}>
//         {products.map((product) => (
//           <div key={product.id} className={classes.cartItem}>
//             <img
//               src={discount}
//               alt="discount"
//               className={classes.discountImage}
//             />

//             <img
//               src={product.image}
//               alt={product.name}
//               className={classes.productImage}
//             />

//             <h3 className={classes.productName}>{product.name}</h3>
//             <div className={classes.text}>
//               <p className={classes.text}>
//                 P4 :-<span className={classes.second}>30%</span>
//               </p>
//               <p className={classes.text}>
//                 ASP :- <span className={classes.second}>3</span>
//               </p>
//               <p className={classes.text}>
//                 Apple% :- <span className={classes.second}>20% </span>
//               </p>
//               <p className={classes.text}>
//                 #Phones :-<span className={classes.second}> 15 </span>
//               </p>
//             </div>
//             <div className={classes.price}>
//               <p>
//                 Rs.13,800 <span className={classes.span}>Rs.14,800</span>
//               </p>
//             </div>
//             <p className={classes.productDetails}>
//               {product.dis} {product.sec} {product.host} {product.fall}
//             </p>
//           </div>
//         ))}
//       </div>
//       <Spare />
//       <NewPhone />

//       <Footer />
//     </>
//   );
// };

// export default Home;
// Home.jsx
// Home.jsx
// Home.jsx
// import React, { useEffect, useState } from "react";
// import NavigationButton from "../homeButton/NavigationButton";
// import Header from "./Header";
// import Spare from "./Spares";
// import NewPhone from "./NewPhone";
// import Footer from "../footer/Footer";
// import { fetchProducts } from "./Api"; // Ensure correct import path
// import Vrp from "./Vrp";
// import OpenBox from "./OpenBox";

// export const Home = () => {
//   const [products, setProducts] = useState({
//     spares: [],
//     vrp: [],
//     openBox: [],
//     newPhones: [],
//   });

//   useEffect(() => {
//     const getProducts = async () => {
//       const fetchedProducts = await fetchProducts();
//       // Assuming fetchedProducts follows the order of urls
//       setProducts({
//         spares: fetchedProducts[0] || [],
//         vrp: fetchedProducts[1] || [],
//         openBox: fetchedProducts[2] || [],
//         newPhones: fetchedProducts[3] || [],
//       });
//     };
//     getProducts(); // Call the function to fetch products
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <>
//       <Header />
//       <NavigationButton />
//       <Vrp products={products.vrp} />
//       <Spare products={products.spares} />
//       <NewPhone products={products.newPhones} />
//       <OpenBox products={products.openBox} /> {/* Correct key access */}
//       <Footer />
//     </>
//   );
// };

// export default Home;
// import React, { useEffect, useState } from "react";
import NavigationButton from "../homeButton/NavigationButton";
import Header from "./Header";
import Spare from "./Spares";
import NewPhone from "./NewPhone";
import OpenBox from "./OpenBox";
import Footer from "../footer/Footer";

import Vrp from "./Vrp";

export const Home = () => {
  return (
    <>
      <Header />
      <NavigationButton />
      <Vrp />
      <Spare />
      <NewPhone />
      <OpenBox />
      <Footer />
    </>
  );
};

export default Home;
