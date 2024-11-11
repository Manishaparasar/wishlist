// import React from "react";
// import search from "../assets/search.png";
// import forward from "../assets/forward icon.png";
// import classes from "./searchicon.module.css";

// const SearchIcon = () => {
//   const handleForwardClick = () => {
//     console.log("Forward icon clicked");
//   };

//   return (
//     <>
//       <div className={classes.icon} onClick={handleForwardClick}>
//         <img src={forward} alt="forward icon" />
//       </div>
//       <div className={classes.searchIcon}>
//         <input
//           type="text"
//           placeholder="Search for mobile, accessories & more"
//           name="search"
//           className={classes.searchInput}
//         />

//         <img src={search} alt="search icon" className={classes.imgContainer} />
//       </div>
//     </>
//   );
// };

// export default SearchIcon;
// import React, { useState } from "react";
// import search from "../assets/search.png";
// import forward from "../assets/forward icon.png";
// import classes from "./searchicon.module.css";

// const SearchIcon = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleForwardClick = () => {
//     console.log("Forward icon clicked");
//     // You can use the searchTerm to navigate or search
//   };

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <>
//       <button
//         className={classes.icon}
//         onClick={handleForwardClick}
//         aria-label="Forward"
//       >
//         <img src={forward} alt="Forward arrow icon" />
//       </button>
//       <div className={classes.searchIcon}>
//         <input
//           type="text"
//           placeholder="Search for mobile, accessories & more"
//           name="search"
//           value={searchTerm}
//           onChange={handleInputChange}
//           className={classes.searchInput}
//           aria-label="Search"
//         />
//         <img src={search} alt="Search icon" className={classes.imgContainer} />
//       </div>
//     </>
//   );
// };

// export default SearchIcon;
import React, { useState } from "react";
import search from "../assets/search.png";
import forward from "../assets/forward icon.png";
import classes from "./searchicon.module.css";

const SearchIcon = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleForwardClick = () => {
    console.log("Forward icon clicked");
    // You can use the searchTerm to navigate or search
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={classes.searchIcon}>
      {/* Forward button on the left */}
      <button
        className={classes.icon}
        onClick={handleForwardClick}
        aria-label="Forward"
      >
        <img src={forward} alt="Forward arrow icon" />
      </button>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for mobile, accessories & more"
        name="search"
        value={searchTerm}
        onChange={handleInputChange}
        className={classes.searchInput}
        aria-label="Search"
      />

      {/* Search icon inside the input */}
      <img src={search} alt="Search icon" className={classes.imgContainer} />
    </div>
  );
};

export default SearchIcon;
