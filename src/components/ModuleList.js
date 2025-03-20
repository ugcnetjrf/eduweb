// src/components/ModuleList.js
import React from "react";
import Module from "./Module";

const modules = [
  {
    id: 1,
    name: "Module 1",
    topics: [
      { id: 1, name: "Topic 1.1", pdf: "topic1.1.pdf", youtube: "https://youtu.be/example1" },
      { id: 2, name: "Topic 1.2", pdf: "topic1.2.pdf", youtube: "https://youtu.be/example2" },
      // Add 4 more topics here
    ],
  },
  // Repeat for other 5 modules
];

const ModuleList = () => {
  return (
    <div className="modules">
      {modules.map((module) => (
        <Module key={module.id} module={module} />
      ))}
    </div>
  );
};

export default ModuleList;
