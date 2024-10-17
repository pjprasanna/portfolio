// import React from "react";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24 text-white">
//       <h1 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">Projects</h1>
//       <div className="py-12 px-8 flex flex-wrap gap-5 max-w-6xl mx-auto justify-center md:justify-start">
//         <ProjectCard
//           title="Staff Document Manager"
//           main="To empowering staff members to effortlessly upload, download, and effectively manage course documents."
//           codeLink="https://github.com/pjprasanna/Staff-Document-Manager"
//         />
//         <ProjectCard
//           title="Smart Pet Feeder"
//           main="IoT and Google Assistant to help pet owners feed their furry friends remotely through voice command."
//           codeLink="https://github.com/pjprasanna/pet-feeder"
//         />
//         <ProjectCard
//           title="File Transfer between Mobile and PC"
//           main="Java Swing application to share files between Mobile and PC without internet connection"
//           codeLink="https://github.com/pjprasanna/File-transfer-between-mobile-and-pc"
//         />
//         <ProjectCard
//           title="RTO Site web scraping "
//           main="To extract precise RTO office details for facilitating data analysis and stored in database."
//           codeLink="https://github.com/pjprasanna/web_scraping"
//         />
       
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import ProjectCard from "./ProjectCard";
import staffDocImg from "../../assets/staff-doc-manager.png"; // Example image path
import petFeederImg from "../../assets/smart-pet-feeder.png"; // Example image path
import fileTransferImg from "../../assets/file-transfer.png"; // Example image path
import rtoScrapingImg from "../../assets/rto-web-scraping.png"; // Example image path

const Projects = () => {
  return (
    <div id="Projects" className="text-2xl md:text-4xl text-white font-bold text-center mb-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 max-w-6xl mx-auto justify-center">
        <ProjectCard
          title="Staff Document Manager"
          main="Empowering staff members to effortlessly upload, download, and manage course documents."
          codeLink="https://github.com/pjprasanna/Staff-Document-Manager"
          image={staffDocImg}
        />
        <ProjectCard
          title="Google Home's Smart Pet Feeder"
          main="IoT solution allowing pet owners to feed their pets remotely via voice command."
          codeLink="https://github.com/pjprasanna/pet-feeder"
          image={petFeederImg}
        />
        {/* <ProjectCard
          title="File Transfer between Mobile and PC"
          main="Java Swing application to share files between mobile and PC without an internet connection."
          codeLink="https://github.com/pjprasanna/File-transfer-between-mobile-and-pc"
          image={fileTransferImg}
        /> */}
        <ProjectCard
          title="RTO Site Web Scraping"
          main="Extracting precise RTO office details for data analysis, stored in a database."
          codeLink="https://github.com/pjprasanna/web_scraping"
          image={rtoScrapingImg}
        />
      </div>
    </div>
  );
};

export default Projects;

