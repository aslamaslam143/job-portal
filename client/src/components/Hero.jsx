// //    import React,{useContext} from 'react'
// // import { assets } from '../assets/assets'
// // import { AppContext } from '../context/AppContext'

// //  export const Hero = () => {
// //   const{ searchFilter, setSearchFilter, isSearched, setIsSearched } = React.useContext(AppContext);
// //  const titleRef = React.useRef(null);

// //   return (
// //      <div className='container 2xl:px-20  mx-auto my-10'>
// //       <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
// //         <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
// //         <p className='mb-8 max-w-xl mx-auto   text-sm font-light  px-5'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
// //         <div className='flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl mx-auto'>
// //           <div  className='flex items-center'>
// //             <img className='h-4 sm:h-5 ' src={assets.search_icon} alt="" />
// //             <input type="text"
// //             placeholder='search for jobs '
// //             className='max-sm:text-xs p-2 round outline-none w-full'/>
// //           </div>
// //           <div className='flex items-center'>
// //             <img  className='h-4 sm:h-5 ' src={assets.location_icon} alt="" />
// //             <input type="text"
// //             placeholder='Location '
// //             className='max-sm:text-xs p-2 round outline-none w-full'/>
// //           </div>
// //           <button className='bg-blue-500 px-2 py-2 rounded text-white m-1'>Search </button>
// //         </div>
// //       </div>
// //       <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
// //         <div className='flex  justify-center gap-10 lg:gap-16  flex-wrap'>
// //           <p className='font-medium'>Trusted by</p>
// //           <img className='h-6' src={assets.microsoft_logo} alt="" />
// //           <img className='h-6' src={assets.walmart_logo} alt="" />
// //           <img className='h-6' src={assets.accenture_logo} alt="" />
// //           <img className='h-6' src={assets.samsung_logo} alt="" />
// //           <img className='h-6' src={assets.amazon_logo} alt="" />
// //           <img className='h-6' src={assets.adobe_logo} alt="" />

// //         </div>
// //       </div>
// //      </div>
// //    )
// //  }
// import React, { useContext, useRef } from "react";
// import { assets } from "../assets/assets";
// import { AppContext } from "../context/AppContext";

// export const Hero = () => {
//   const { searchFilter, setSearchFilter, isSearched, setIsSearched } =
//     useContext(AppContext);
//   const titleRef = useRef(null);
//   const locationRef = useRef(null);

//   const onSearch = () => {
//     setSearchFilter({
//       title: titleRef.current.value,
//       location: locationRef.current.value,
//     });
//     setIsSearched(true);
//     console.log({
//        title: titleRef.current.value,
//       location: locationRef.current.value
//     }

//     );

//   };

//   return (
//     <div className="container 2xl:px-20 mx-auto my-10">
//       <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
//           Over 10,000+ jobs to apply
//         </h2>
//         <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
//           Your Next Big Career Move Starts Right Here - Explore the Best Job
//           Opportunities and Take the First Step Toward Your Future!
//         </p>

//         {/* Search Inputs */}
// <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
  // <div className="flex items-center bg-white rounded px-2 w-full">
  //   <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
  //   <input
  //     type="text"
  //     placeholder="Search for jobs"
  //     className="text-black max-sm:text-xs p-2 w-full outline-none"
  //     value={searchFilter.title}
  //   />
  // </div>

  // <div className="flex items-center bg-white rounded px-2 w-full">
  //   <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
  //   <input
  //     type="text"
  //     placeholder="Location"
  //     className="text-black max-sm:text-xs p-2 w-full outline-none"
  //     value={searchFilter.location}
  //   />
  // </div>

//   <button
//     onClick={onSearch}
//     className="bg-blue-500 px-4 py-2 rounded text-white font-medium"
//     type="submit"
//   >
//     Search
//   </button>
// </div>
//       </div>
//       {/* Trusted By Section */}
//       <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
//         <div className="flex justify-center gap-10 lg:gap-16 flex-wrap items-center w-full">
//           <p className="font-medium">Trusted by</p>
//           <img className="h-6" src={assets.microsoft_logo} alt="Microsoft" />
//           <img className="h-6" src={assets.walmart_logo} alt="Walmart" />
//           <img className="h-6" src={assets.accenture_logo} alt="Accenture" />
//           <img className="h-6" src={assets.samsung_logo} alt="Samsung" />
//           <img className="h-6" src={assets.amazon_logo} alt="Amazon" />
//           <img className="h-6" src={assets.adobe_logo} alt="Adobe" />
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

export const Hero = () => {
  const { searchFilter, setSearchFilter, isSearched, setIsSearched } =
    useContext(AppContext);

  const onSearch = () => {
    setIsSearched(true);
    console.log(searchFilter);
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 10,000+ jobs to apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Opportunities and Take the First Step Toward Your Future!
        </p>

        {/* Search Inputs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
          <div className="flex items-center bg-white rounded px-2 w-full">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="text-black max-sm:text-xs p-2 w-full outline-none"
              value={searchFilter.title}
              onChange={(e) =>
                setSearchFilter({ ...searchFilter, title: e.target.value })
              }
            />
          </div>

          <div className="flex items-center bg-white rounded px-2 w-full">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Location"
              className="text-black max-sm:text-xs p-2 w-full outline-none"
              value={searchFilter.location}
              onChange={(e) =>
                setSearchFilter({ ...searchFilter, location: e.target.value })
              }
            />
          </div>

          <button
            onClick={onSearch}
            className="bg-blue-500 px-4 py-2 rounded text-white font-medium"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap items-center w-full">
          <p className="font-medium">Trusted by</p>
          <img className="h-6" src={assets.microsoft_logo} alt="Microsoft" />
          <img className="h-6" src={assets.walmart_logo} alt="Walmart" />
          <img className="h-6" src={assets.accenture_logo} alt="Accenture" />
          <img className="h-6" src={assets.samsung_logo} alt="Samsung" />
          <img className="h-6" src={assets.amazon_logo} alt="Amazon" />
          <img className="h-6" src={assets.adobe_logo} alt="Adobe" />
        </div>
      </div>
    </div>
  );
};
