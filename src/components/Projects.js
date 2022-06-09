import React from "react";
import { useNavigate } from "react-router-dom";

import Project from "./Project";

const Projects = () => {
  const navigate = useNavigate();
  const handleprojectdetail = () => {
    navigate("/projectdetail");
  };
  return (
    <div>
      {/* projects */}
      <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        <Project />;
      </section>
      <div className="mx-auto">
        {" "}
        <button onClick={handleprojectdetail} className="mt-20 button mx-auto">
          Project Detail
        </button>
      </div>
    </div>
  );
};

export default Projects;
