// import React from "react";
// import apple from "./assets/apple.svg";
// import applepart from "./assets/applepart.svg";
// import keypad from "./assets/keypad.svg";
// import frame from "./assets/bg_1 1.svg";
// import classes from "./new.module.css";
// import heart from "./assets/heart.svg";
// const products = [
//   {
//     id: 1,
//     name: "LCD compatible for Apple 13",
//     price: "Rs.42,000",
//     image: apple,
//     originalPrice: "57,800",
//   },
//   {
//     id: 2,
//     name: "Middle frame compatible for Apple iPhone 13",
//     price: "Rs.12,800",
//     image: applepart,
//     originalPrice: "14,800",
//   },
//   {
//     id: 3,
//     name: "Keypad compatible for LAVA A1 Josh BOL",
//     price: "Rs.11,800",
//     image: keypad,
//     originalPrice: "13,800",
//   },
// ];

// const New = () => {
//   return (
//     <>
//       <img src={frame} alt="Frame" />
//       <div className={classes.cartcontainer}>
//         <img src={heart} alt="Heart" />
//         {products.map((product) => (
//           <div key={product.id} className={classes.cartitem}>
//             <img src={product.image} alt={product.name} />
//             <div>
//               <h3>{product.name}</h3>
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <span className={classes.price}>{product.price}</span>
//                 <span className={classes.alt}>{product.originalPrice}</span>
//               </div>
//               <div className={classes.cartbuttons}>
//                 <button className={classes.addtcart}>Add to Cart</button>
//                 <button className={classes.buynow}>Buy Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default New;
import React from "react";
import apple from "./assets/apple.svg";
import applepart from "./assets/applepart.svg";
import keypad from "./assets/keypad.svg";
import frame from "./assets/bg_1 1.svg";
import classes from "./new.module.css";
import heart from "./assets/heart.svg";
import Footer from "../footer/Footer";
import SearchIcon from "../search/SearchIcon";

const products = [
  {
    id: 1,
    name: "LCD compatible for Apple 13",
    price: "Rs.42,000",
    image: apple,
    originalPrice: "57,800",
  },
  {
    id: 2,
    name: "Middle frame compatible for Apple iPhone 13",
    price: "Rs.12,800",
    image: applepart,
    originalPrice: "14,800",
  },
  {
    id: 3,
    name: "Keypad compatible for LAVA A1 Josh BOL",
    price: "Rs.11,800",
    image: keypad,
    originalPrice: "13,800",
  },
];

const New = () => {
  return (
    <>
      <SearchIcon />
      <img src={frame} alt="Frame" />
      <div className={classes.cartcontainer}>
        {products.map((product) => (
          <div key={product.id} className={classes.cartitem}>
            <img src={heart} alt="Heart" className={classes.heart} />{" "}
            {/* Heart Icon */}
            <img src={product.image} alt={product.name} />
            <div>
              <p className={classes.paragraph}>{product.name}</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className={classes.price}>{product.price}</span>
                <span className={classes.alt}>{product.originalPrice}</span>
              </div>
              <div className={classes.cartbuttons}>
                <button className={classes.addtcart}>Add to Cart</button>
                <button className={classes.buynow}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default New;
