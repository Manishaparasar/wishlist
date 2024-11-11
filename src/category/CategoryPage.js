import React from "react";
import frame from "./assets/frame.svg";
import Prexo from "./assets/prexo.svg";
import spare from "./assets/spares.svg";
import Flipkart from "./assets/Flipkart.svg";
import image from "./assets/image.svg";
import classes from "./categoryPage.module.css";
import Footer from "../footer/Footer";
import SearchIcon from "../search/SearchIcon";
import icon from "../assets/icon.png";
import NavigationButton from "../homeButton/NavigationButton";
export const CategoryPage = () => {
  return (
    <>
      <NavigationButton />
      <div className={classes.container}>
        <img src={icon} alt="mobigarage" className={classes.iconImage} />
        <h2 className={classes.heading}>MobiGarage</h2>
      </div>

      <SearchIcon />
      <div className={classes.Frame}>
        <img src={frame} alt="Frame header" />
      </div>
      <h2 className={classes.heading}>Product Category</h2>
      <div className={classes.categorycontainer}>
        <div className={`${classes.box} ${classes.box1}`}>
          <h4 className={classes.text}>VRP</h4>
          <p className={classes.paragraph1}>
            Lorium was an ancient village of ancient Etruria, Italy, on the Via
            Aurelia,
          </p>
          <img src={Flipkart} alt="Category 1" className={classes.boximage} />
        </div>

        <div className={classes.container}>
          <div className={`${classes.box} ${classes.box2}`}>
            <h4 className={classes.boxtext}>Prexo</h4>
            <img src={Prexo} alt="Category 2" className={classes.boximage} />
          </div>
          <div className={`${classes.box} ${classes.box3}`}>
            <h4 className={classes.boxtext}>Spares</h4>
            <img src={spare} alt="Category 3" className={classes.boximage} />
          </div>
        </div>

        <div className={`${classes.box} ${classes.box4}`}>
          <h4 className={classes.textPhone}>New Phones</h4>
          <p className={classes.paragraph}>
            Lorium was an ancient village of ancient Etruria, Italy, on the Via
            Aurelia,
          </p>
          <img src={image} alt="Category 4" className={classes.boximage} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
// import React from "react";
// import frame from "./assets/frame.svg";
// import Prexo from "./assets/prexo.svg";
// import spare from "./assets/spares.svg";
// import Flipkart from "./assets/Flipkart.svg";
// import image from "./assets/image.svg";
// import classes from "./categoryPage.module.css";
// import Footer from "../footer/Footer";
// import SearchIcon from "../search/SearchIcon";
// import icon from "../assets/icon.png";
// import NavigationButton from "../homeButton/NavigationButton";

// export const CategoryPage = () => {
//   // Define the category data
//   const categories = [
//     {
//       title: "VRP",
//       description:
//         "Lorium was an ancient village of ancient Etruria, Italy, on the Via Aurelia.",
//       image: Flipkart,
//       className: classes.box1,
//     },
//     {
//       title: "Prexo",
//       image: Prexo,
//       className: classes.box2,
//     },
//     {
//       title: "Spares",
//       image: spare,
//       className: classes.box3,
//     },
//     {
//       title: "New Phones",
//       description:
//         "Lorium was an ancient village of ancient Etruria, Italy, on the Via Aurelia.",
//       image: image,
//       className: classes.box4,
//     },
//   ];

//   return (
//     <>
//       <NavigationButton />
//       <div className={classes.container}>
//         <img src={icon} alt="mobigarage" className={classes.iconImage} />
//         <h2 className={classes.heading}>MobiGarage</h2>
//       </div>

//       <SearchIcon />
//       <div className={classes.Frame}>
//         <img src={frame} alt="Frame header" />
//       </div>
//       <h2 className={classes.heading}>Product Category</h2>

//       <div className={classes.categorycontainer}>
//         {categories.map((category, index) => (
//           <div key={index} className={`${classes.box} ${category.className}`}>
//             <h4 className={classes.text}>{category.title}</h4>
//             {category.description && (
//               <p className={classes.paragraph}>{category.description}</p>
//             )}
//             <img
//               src={category.image}
//               alt={`Category ${index + 1}`}
//               className={classes.boximage}
//             />
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default CategoryPage;
