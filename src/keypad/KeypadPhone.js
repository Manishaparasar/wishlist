// import React from "react";
// import classes from "./keypadphone.module.css";
// import image41 from "./assets/image 41.png";
// import image56 from "./assets/image 56.png";
// import image57 from "./assets/image 57.png";
// import frame from "./assets/frame.png";

// export const KeypadPhone = () => {
//   return (
//     <>
//       <div className={classes.Frame}>
//         <img src={frame} alt="frame of card" className={classes.frameImage} />
//       </div>
//       <div className={classes.cartContainer}>
//         {/* Product 1 */}
//         <div className={classes.card}>
//           <img src={image41} alt="Phone 1" className={classes.cardImage} />
//           <div className={classes.title}>Saregama Carvaan281</div>
//           <p className={classes.header}>New</p>
//           <p className={classes.price}>Rs.13,800</p>
//           <button className={classes.addButton}>Add to Cart</button>
//           <button className={classes.buyButton}>Buy Now</button>
//         </div>
//         {/* Product 2 */}
//         <div className={classes.card}>
//           <img src={image56} alt="Phone 2" className={classes.cardImage} />
//           <div className={classes.title}>NOKIA 106 4G</div>
//           <p className={classes.header}>Open Box</p>
//           <p className={classes.price}>Rs.13,800</p>
//           <button className={classes.addButton}>Add to Cart</button>
//           <button className={classes.buyButton}>Buy Now</button>
//         </div>
//         {/* Product 3 */}
//         <div className={classes.card}>
//           <img src={image57} alt="Phone 3" className={classes.cardImage} />
//           <div className={classes.title}>Nokia 105 Single</div>
//           <p className={classes.header}>Refurbished</p>
//           <p className={classes.price}>Rs.13,800</p>
//           <button className={classes.addButton}>Add to Cart</button>
//           <button className={classes.buyButton}>Buy Now</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default KeypadPhone;
import React from "react";
import classes from "./keypadphone.module.css";
import image41 from "./assets/image 41.png";
import image56 from "./assets/image 56.png";
import image57 from "./assets/image 57.png";
import frame from "./assets/frame.png";

export const KeypadPhone = () => {
  return (
    <>
      <div className={classes.Frame}>
        <img src={frame} alt="frame of card" className={classes.frameImage} />
      </div>
      <div className={classes.cartContainer}>
        <div className={classes.card}>
          <img src={image41} alt="Phone 1" className={classes.cardImage} />
          <div className={classes.textContainer}>
            <div className={classes.title}>Saregama Carvaan281</div>
            <p className={classes.header}>New</p>
            <p className={classes.price}>Rs.13,800</p>

            <button className={classes.addButton}>Add to Cart</button>
            <button className={classes.buyButton}>Buy Now</button>
          </div>
        </div>

        <div className={classes.card}>
          <img src={image56} alt="Phone 2" className={classes.cardImage} />
          <div className={classes.textContainer}>
            <div className={classes.title}>NOKIA 106 4G</div>
            <p className={classes.header}>Open Box</p>
            <p className={classes.price}>Rs.13,800</p>
            <button className={classes.addButton}>Add to Cart</button>
            <button className={classes.buyButton}>Buy Now</button>
          </div>
        </div>

        <div className={classes.card}>
          <img src={image57} alt="Phone 3" className={classes.cardImage} />
          <div className={classes.textContainer}>
            <div className={classes.title}>Nokia 105 Single</div>
            <p className={classes.header}>Refurbished</p>
            <p className={classes.price}>Rs.13,800</p>
            <button className={classes.addButton}>Add to Cart</button>
            <button className={classes.buyButton}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeypadPhone;
