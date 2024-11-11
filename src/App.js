// import React from "react";
// import Cart from "./component/Cart"; // Import the Cart component
import "./App.css"; // Import your CSS styles
// import SaveLater from "./save for later/SaveLater";

// import PaymentForm from "./payment/PaymentForm"; // Adjust path as needed

// const App = () => {
//   return (
//     <div className="App">
//       <SaveLater />
//       <Cart />
//       {/* <PaymentForm /> */}
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import SaveLater from "./save for later/SaveLater";
// import Cart from "./component/Cart";
// import EmptyBeen from "./empty/EmptyBeen";
// import PaymentForm from "./payment/PaymentForm";

// const Navigation = () => (
//   <nav>
//     <Link to="/">Save Later</Link>

//     <Link to="/cart">Cart</Link>
//     <Link to="/emptybeen">Empty Been</Link>
//     <Link to="/payment">Payment</Link>
//   </nav>
// );

// const App = () => {
//   return (
//     <Router>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<SaveLater />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/emptybeen" element={<EmptyBeen />} />
//         <Route path="/payment" element={<PaymentForm />} />
//         <Route path="*" element={<NotFound />} /> {/* 404 Not Found */}
//       </Routes>
//     </Router>
//   );
// };

// const NotFound = () => <h2>Page not found!</h2>;

// export default App;
// import React from "react";
// import KeypadPhone from "./keypad/KeypadPhone";
// import Cart from "./help/HelpPage";
// import Signup from "./signup/SignUp";
// import CategoryPage from "./category/CategoryPage";
// // import New from "./phone/New";
import Home from "./homePage/Home";
import HelpPage from "./help/HelpPage";
import "./App.css";
import OrderSuccess from "./order/OrderSuccess";
export const App = () => {
  return (
    <div>
      <OrderSuccess />
      {/* <Home /> */}
      {/* <HelpPage /> */}
      {/* <New /> */}
      {/* <Signup /> */}
      {/* <CategoryPage /> */}
      {/* <KeypadPhone /> */}
    </div>
  );
};
export default App;
