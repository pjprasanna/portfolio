// import React from "react";
// const ProjectCard = ({ title, main, codeLink, image }) => {
//   return (
//     <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl rounded-2xl transition-transform duration-300 hover:scale-105">
//       <img className="p-4 h-40 w-full object-cover rounded-t-2xl" src={image} alt={title} />
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <a href={codeLink} target="_blank" rel="noopener noreferrer">
//           <button className="text-white py-2 px-3 text-sm md:text-lg  text-center md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//             Source Code
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React from "react";

const ProjectCard = ({ title, main, codeLink, image }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl rounded-2xl transition-transform duration-300 hover:scale-105">
      <img className="p-4 h-40 w-full object-cover rounded-t-2xl" src={image} alt={title} />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 font-normal">{main}</p> {/* Removed bold and added font-normal */}
      <div className="mt-2 p-2 md:p-4 flex justify-center gap-2 md:gap-4"> {/* Added justify-center */}
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-3 text-sm md:text-lg text-center md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
