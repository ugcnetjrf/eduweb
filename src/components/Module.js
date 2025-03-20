// src/components/Module.js
import React from "react";

const Module = ({ module }) => {
  return (
    <div className="module">
      <h2>{module.name}</h2>
      <ul>
        {module.topics.map((topic) => (
          <li key={topic.id}>
            <p>{topic.name}</p>
            <a href={topic.pdf} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
            <a href={topic.youtube} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Module;
