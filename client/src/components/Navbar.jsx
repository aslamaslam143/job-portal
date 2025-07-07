
// import React, { useContext } from "react";
// import { assets } from "../assets/assets.js";
// import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
// import { Link, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext.jsx";

// const Navbar = () => {
//   const { user } = useUser();
//   const { openSignIn } = useClerk();
//   const navigate = useNavigate();
//   const { setShowRecuiterLogin } = useContext(AppContext);

//   return (
//     <div className="shadow py-4 px-8 flex justify-between items-center">
//       {/* Left side: Logo and Title */}
//       <div className="flex items-center">
//         <img
//           onClick={() => navigate("/")}
//           src={assets.logo}
//           alt="Logo"
//           className="w-22 h-22 cursor-pointer"
//         />

//         {user ? (
//           <div className="flex items-center gap-3 ml-4">
//             <Link to="/applications" className="text-blue-600 font-medium">
//               Applied Jobs
//             </Link>
//             <p className="text-gray-600 max-sm:hidden">
//               Hi, {user.firstName} {user.lastName}
//             </p>
//           </div>
//         ) : (
//           <div className="flex items-center gap-4 ml-4">
//             <button
//               onClick={() => setShowRecuiterLogin(true)}
//               className="text-gray-600"
//             >
//               Recruiter Login
//             </button>

//             <button
//               onClick={() => openSignIn()}
//               className="bg-green-500 text-white px-4 py-2 rounded-full"
//             >
//               Candidate Login
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Right side: User button */}
//       {user && (
//         <div>
//           <UserButton afterSignOutUrl="/" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  const { setShowRecuiterLogin } = useContext(AppContext);

  return (
    <div className="shadow py-4 px-8 flex justify-between items-center">
      {/* Left side: Logo and Title */}
      <div className="flex items-center">
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="Logo"
          className="w-22 h-22 cursor-pointer"
        />
        {user && (
          <div className="flex items-center gap-3 ml-4">
            <Link to="/applications" className="text-blue-600 font-medium">
              Applied Jobs
            </Link>
            <p className="text-gray-600 max-sm:hidden">
              Hi, {user.firstName} {user.lastName}
            </p>
          </div>
        )}
      </div>

      {/* Right side: Buttons or User Info */}
      <div className="flex items-center gap-4">
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <>
            <button
              onClick={() => setShowRecuiterLogin(true)}
              className="text-gray-600"
            >
              Recruiter Login
            </button>

            <button
              onClick={() => openSignIn()}
              className="bg-green-500 text-white px-4 py-2 rounded-full"
            >
              Candidate Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
