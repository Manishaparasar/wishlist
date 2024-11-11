// import React from "react";
// import classes from "./helpPAge.module.css"; // Import your CSS file for styling
// import user1 from "./assets/users.png";
// import box from "./assets/box.png";
// import refresh from "./assets/refresh.png";
// import setting from "./assets/settings.png";
// import credit from "./assets/credit-card.png";
// import shopping from "./assets/shopping-bag.png";
// import layer from "./assets/Layer 2.png";
// import back from "./assets/back arrow.png";
// import Searchicon from "../search/SearchIcon";
// import Footer from "../footer/Footer";
// const HelpPage = () => {
//   const items = [
//     { id: 1, image: user1, text: "Account" },
//     { id: 2, image: box, text: "Products" },
//     { id: 3, image: refresh, text: "Returns & Exchanges" },
//     { id: 4, image: setting, text: "Offers/Coupons" },
//     { id: 5, image: credit, text: "Payments" },
//     { id: 6, image: shopping, text: "Orders" },
//   ];

//   return (
//     <>
//       <div className={classes.container}>
//         <Searchicon />
//         <div className={classes.type}>
//           <h2 className={classes.heading}>Help Center</h2>
//           <p className={classes.paragraph}>
//             Lorium was an ancient village
//             <br />
//             of ancient Etruria, Italy, on the
//             <br />
//             Via Aurelia,
//           </p>
//         </div>
//         <img src={layer} alt="Layer" className={classes.image} />
//       </div>

//       <div className={classes.header}>
//         <h2>Browse Topics</h2>
//       </div>
//       <div className={classes.container}>
//         {items.map((item) => (
//           <div key={item.id} className={classes.item}>
//             <img src={item.image} alt={item.text} className={classes.image} />
//             <p className={classes.text}>{item.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className={classes.box}>
//         <p>
//           How do I login to account?
//           <img src={back} alt="Back" className={classes.backImage} />
//         </p>

//         <p>
//           Why am I not getting an OTP?
//           <img src={back} alt="Back" className={classes.backImage} />
//         </p>

//         <p>
//           I am not getting forgot password link?
//           <img src={back} alt="Back" className={classes.backImage} />
//         </p>

//         <p>
//           Why am I not getting an OTP?
//           <img src={back} alt="Back" className={classes.backImage} />
//         </p>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default HelpPage;
import React from "react";
import classes from "./helpPAge.module.css"; // Import your CSS file for styling
import user1 from "./assets/users.png";
import box from "./assets/box.png";
import refresh from "./assets/refresh.png";
import setting from "./assets/settings.png";
import credit from "./assets/credit-card.png";
import shopping from "./assets/shopping-bag.png";
import layer from "./assets/Layer 2.png";
import back from "./assets/back arrow.png";
import Searchicon from "../search/SearchIcon";
import Footer from "../footer/Footer";

const HelpPage = () => {
  const items = [
    { id: 1, image: user1, text: "Account" },
    { id: 2, image: box, text: "Products" },
    { id: 3, image: refresh, text: "Returns & Exchanges" },
    { id: 4, image: setting, text: "Offers/Coupons" },
    { id: 5, image: credit, text: "Payments" },
    { id: 6, image: shopping, text: "Orders" },
  ];

  // Array of questions
  const questions = [
    "How do I login to account?",
    "Why am I not getting an OTP?",
    "I am not getting forgot password link?",
    "Why am I not getting an OTP?",
  ];

  return (
    <>
      <div className={classes.container}>
        <Searchicon />
        <div className={classes.type}>
          <h2 className={classes.heading}>Help Center</h2>
          <p className={classes.paragraph}>
            Lorium was an ancient village
            <br />
            of ancient Etruria, Italy, on the
            <br />
            Via Aurelia,
          </p>
        </div>
        <img src={layer} alt="Layer" className={classes.image} />
      </div>

      <div className={classes.header}>
        <h2>Browse Topics</h2>
      </div>
      <div className={classes.container}>
        {items.map((item) => (
          <div key={item.id} className={classes.item}>
            <img src={item.image} alt={item.text} className={classes.image} />
            <p className={classes.text}>{item.text}</p>
          </div>
        ))}
      </div>

      <div className={classes.box}>
        {questions.map((question, index) => (
          <p key={index}>
            {question}
            <img src={back} alt="Back" className={classes.backImage} />
          </p>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default HelpPage;
// import React from "react";
// // import help_center from "../../assets/help_center.svg";
// // import help__account from "../../assets/help_account.svg";
// // import help__products from "../../assets/help_products.svg";
// // import help__return from "../../assets/help_return.svg";
// // import help__offer from "../../assets/help_offer.svg";
// // import help__payment from "../../assets/help_payment.svg";
// // import help__orders from "../../assets/help_orders.svg";
// import classes from "./helpPAge.module.css";

// const topics = [
//   {
//     id: 1,
//     title: "Account",
//     image: user1,
//     backGroundColor: "#E4FDEF",
//     border: "1px solid #CBFADF",
//     borderRadius: "8px",
//   },
//   {
//     id: 2,
//     title: "Products",
//     image: box,
//     backGroundColor: "#FFF0EB",
//     border: "1px solid #FCE6DE",
//     borderRadius: "8px",
//   },
//   {
//     id: 3,
//     title: "Returns & Exchanges",
//     image: refresh,
//     backGroundColor: "#F0F2FF",
//     border: "1px solid #E1E5FD",
//     borderRadius: "8px",
//   },
//   {
//     id: 4,
//     title: "Offers/Coupons",
//     image: setting,
//     backGroundColor: "#EBF7FF",
//     border: "1px solid #DDF0FC",
//     borderRadius: "8px",
//   },
//   {
//     id: 5,
//     title: "Payments",
//     image: credit,
//     backGroundColor: "#FAF0FF",
//     border: "1px solid #F4E4FD",
//     borderRadius: "8px",
//   },
//   {
//     id: 6,
//     title: "Orders",
//     image: shopping,
//     backGroundColor: "#E3FFFD",
//     border: "1px solid #CEF4F2",
//     borderRadius: "8px",
//   },
// ];

// const faqs = [
//   { id: 1, query: "How do i login to account?" },
//   { id: 2, query: "Why am i not getting an OTP?" },
//   { id: 3, query: "I am not getting forgot password link?" },
//   { id: 4, query: "Why am i not getting an OTP?" },
// ];

// export const Help = () => {
//   return (
//     <div className={classes.box}>
//       <div className={classes.box__content}>
//         <div className={classes.box__content__info}>
//           <h1 className={classes.box__content__info__title}>Help Center</h1>
//           <p className={classes.box__content__info__para}>
//             Lorium was an ancient village of ancient Etruria, Italy, on the Via
//             Aurelia.
//           </p>
//         </div>

//         {/* <img
//           // src={help_center}
//           alt="Help Center"
//           className={classes.box__content__img}
//         /> */}
//       </div>
//       <div className={classes.box__help}>
//         <h2 className={classes.box__help__title}>Browse Topics</h2>
//         <div className={classes.box__help__tabs}>
//           {topics.map((topic) => (
//             <div
//               key={topic.id}
//               style={{
//                 backgroundColor: topic.backGroundColor,
//                 borderRadius: topic.borderRadius,
//                 border: topic.border,
//               }}
//               className={classes.box__help__tabs__tab}
//             >
//               <img
//                 src={topic.image}
//                 alt={topic.title}
//                 className={classes.box__help__tabs__tab_img}
//               />
//               <h3 className={classes.box__help__tabs__tab__name}>
//                 {topic.title}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className={classes.box__faqs}>
//         {faqs.map((faq) => (
//           <div key={faq.id} className={classes.box__faqs__faq}>
//             <div className={classes.box__faqs__faq__content}>
//               <h3 className={classes.box__faqs__faq__content__title}>
//                 {" "}
//                 {faq.query}
//               </h3>
//               <button className={classes.box__faqs__faq__content__btn} />
//             </div>
//             <hr className={classes.box__item__divider} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Help;
