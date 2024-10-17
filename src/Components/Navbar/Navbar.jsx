// import React, { useState } from "react";
// import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
// const Navbar = () => {
//   const [menu, openMenu] = useState(false);
//   const [showMenu, setShowmenu] = useState(true);
//   return (
//     <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
//       <span className="text-xl font-bold tracking-wide">Prasanna's Portfolio</span>

//       <ul
//         className={`${
//           menu ? "block" : "hidden"
//         }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
//       >
//         {/* <a href="#About">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             About
//           </li>
//         </a> */}
//         <a href="#Education">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Education
//           </li>
//         </a>
//         <a href="#Experience">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Experience
//           </li>
//         </a>
//         <a href="#Projects">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Projects
//           </li>
//         </a>
//         <a href="#Footer">
//           <li className="text-md transition-all duration-300 p-1 md:p-0">
//             Contact
//           </li>
//         </a>
//       </ul>
//       {showMenu ? (
//         <RiMenu2Line
//           size={30}
//           className="md:hidden absolute right-10 top-6 transition-all duration-300"
//           onClick={() => {
//             openMenu(!menu);
//             setShowmenu(!showMenu);
//           }}
//         />
//       ) : (
//         <RiCloseLine
//           size={30}
//           className="md:hidden absolute right-10 top-6 transition-all duration-300"
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 p-y2 mt-4 font-semibold md:mt-5 px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-8`}  // Increased gap from 6 to 8
      >
        <a href="#Education">
          <li className="text-md transition-all duration-300 p-2 md:p-0">
            Education
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-2 md:p-0">  
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-2 md:p-0"> 
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-2 md:p-0">  
            Contact
          </li>
        </a>
      </ul>

      {/* Toggle Menu Icons */}
      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => openMenu(false)}  // Close the menu when clicked
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => openMenu(true)}  // Open the menu when clicked
        />
      )}
    </nav>
  );
};

export default Navbar;
