// import React from 'react'
// import mit from "../../assets/mit.png"
// import laurel from "../../assets/laurel.png"
// const Education = () => {
//   return (
//     <div id="Experience" className="p-10 md:p-24">
//     <h1 className="text-2xl md:text-4xl text-white font-bold">Education</h1>
//     <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
//     <img src={mit} alt="MIT Logo" className="w-12 h-12" />
//       <span className="text-white">
//         <h2 className="leading-tight">Madras Institute of Technology, Anna University, Chennai</h2>
//         <p className="text-sm leading-tight font-thin">
//           Sep 2020 - June 2024
//         </p>
//         <ul className="text-sm p-2">
//           <li>- B.Tech Information Technology</li>
//           <li>- CGPA : 8.89</li>
//         </ul>
//       </span>
//     </div>
//     <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
//     <img src={laurel} alt="Laurel Logo" className="w-12 h-12" />
//       <span className="text-white">
//         <h2 className="leading-tight">Laurel Higher Secondary School, Pattukottai</h2>
//         <p className="text-sm leading-tight font-thin">
//           Aug 2018 - Mar 2020
//         </p>
//         <ul className="text-sm p-2">
//           <li>- JEE Mains : 89%</li>
//           <li>- Percentage : 92.1</li>
//         </ul>
//       </span>
//     </div>
    
//   </div>
//   )
// }
// export default Education;
import React from 'react';
import mit from "../../assets/mit.png";
import laurel from "../../assets/laurel.png";

const Education = () => {
  return (
    <div id="Education" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-8">Education</h1>
      
      {/* Container for education cards */}
      <div className="flex flex-col md:flex-row md:justify-around md:gap-10">
        
        {/* MIT Card */}
        <div className="flex gap-4 bg-slate-950 bg-opacity-70 rounded-lg p-6 items-center mb-4 md:mb-0 transition-transform duration-300 transform hover:scale-105 shadow-lg">
          <img src={mit} alt="MIT Logo" className="w-16 h-16" /> {/* Enlarged logo */}
          <span className="text-white">
            <h2 className="leading-tight text-lg md:text-xl font-semibold">Madras Institute of Technology, Anna University, Chennai</h2>
            <p className="text-sm md:text-md leading-tight font-thin">Sep 2020 - June 2024</p>
            <ul className="text-sm md:text-md p-2">
              <li>- B.Tech Information Technology</li>
              <li>- CGPA : 8.89</li>
            </ul>
          </span>
        </div>
        
        {/* Laurel Card */}
        <div className="flex gap-4 bg-slate-950 bg-opacity-70 rounded-lg p-6 items-center transition-transform duration-300 transform hover:scale-105 shadow-lg">
          <img src={laurel} alt="Laurel Logo" className="w-16 h-16" /> {/* Enlarged logo */}
          <span className="text-white">
            <h2 className="leading-tight text-lg md:text-xl font-semibold">Laurel Higher Secondary School, Pattukottai</h2>
            <p className="text-sm md:text-md leading-tight font-thin">Aug 2018 - Mar 2020</p>
            <ul className="text-sm md:text-md p-2">
              <li>- JEE Mains : 89%</li>
              <li>- Percentage : 92.1</li>
            </ul>
          </span>
        </div>

      </div>
    </div>
  );
}

export default Education;
