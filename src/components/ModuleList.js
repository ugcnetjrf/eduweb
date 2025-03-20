// src/components/ModuleList.js
import React from "react";
import Module from "./Module";

const modules = [
  {
    id: 1,
    name: "Module 1: Introduction to Climate Change",
    topics: [
      { id: 1, name: "What is Climate Change?", pdf: "intro1.pdf", youtube: "https://youtu.be/intro1" },
      { id: 2, name: "History of Climate Change", pdf: "intro2.pdf", youtube: "https://youtu.be/intro2" },
      { id: 3, name: "Greenhouse Effect", pdf: "intro3.pdf", youtube: "https://youtu.be/intro3" },
      { id: 4, name: "Global Warming", pdf: "intro4.pdf", youtube: "https://youtu.be/intro4" },
      { id: 5, name: "Weather vs. Climate", pdf: "intro5.pdf", youtube: "https://youtu.be/intro5" },
      { id: 6, name: "Natural vs. Human Factors", pdf: "intro6.pdf", youtube: "https://youtu.be/intro6" },
    ],
  },
  {
    id: 2,
    name: "Module 2: Impacts of Climate Change",
    topics: [
      { id: 7, name: "Rising Sea Levels", pdf: "impact1.pdf", youtube: "https://youtu.be/impact1" },
      { id: 8, name: "Extreme Weather Events", pdf: "impact2.pdf", youtube: "https://youtu.be/impact2" },
      { id: 9, name: "Melting Ice Caps", pdf: "impact3.pdf", youtube: "https://youtu.be/impact3" },
      { id: 10, name: "Ecosystem Disruption", pdf: "impact4.pdf", youtube: "https://youtu.be/impact4" },
      { id: 11, name: "Impact on Biodiversity", pdf: "impact5.pdf", youtube: "https://youtu.be/impact5" },
      { id: 12, name: "Agricultural Effects", pdf: "impact6.pdf", youtube: "https://youtu.be/impact6" },
    ],
  },
  {
    id: 3,
    name: "Module 3: Climate Solutions",
    topics: [
      { id: 13, name: "Renewable Energy", pdf: "solutions1.pdf", youtube: "https://youtu.be/solutions1" },
      { id: 14, name: "Energy Efficiency", pdf: "solutions2.pdf", youtube: "https://youtu.be/solutions2" },
      { id: 15, name: "Carbon Sequestration", pdf: "solutions3.pdf", youtube: "https://youtu.be/solutions3" },
      { id: 16, name: "Reforestation", pdf: "solutions4.pdf", youtube: "https://youtu.be/solutions4" },
      { id: 17, name: "Sustainable Farming", pdf: "solutions5.pdf", youtube: "https://youtu.be/solutions5" },
      { id: 18, name: "Policy Changes", pdf: "solutions6.pdf", youtube: "https://youtu.be/solutions6" },
    ],
  },
  {
    id: 4,
    name: "Module 4: Climate Science",
    topics: [
      { id: 19, name: "Climate Models", pdf: "science1.pdf", youtube: "https://youtu.be/science1" },
      { id: 20, name: "Measuring Climate Change", pdf: "science2.pdf", youtube: "https://youtu.be/science2" },
      { id: 21, name: "Carbon Cycle", pdf: "science3.pdf", youtube: "https://youtu.be/science3" },
      { id: 22, name: "Ocean Currents", pdf: "science4.pdf", youtube: "https://youtu.be/science4" },
      { id: 23, name: "Cloud Formation", pdf: "science5.pdf", youtube: "https://youtu.be/science5" },
      { id: 24, name: "Radiative Forcing", pdf: "science6.pdf", youtube: "https://youtu.be/science6" },
    ],
  },
  {
    id: 5,
    name: "Module 5: Social Impact",
    topics: [
      { id: 25, name: "Climate Justice", pdf: "social1.pdf", youtube: "https://youtu.be/social1" },
      { id: 26, name: "Migration and Refugees", pdf: "social2.pdf", youtube: "https://youtu.be/social2" },
      { id: 27, name: "Economic Effects", pdf: "social3.pdf", youtube: "https://youtu.be/social3" },
      { id: 28, name: "Health Impacts", pdf: "social4.pdf", youtube: "https://youtu.be/social4" },
      { id: 29, name: "Community Resilience", pdf: "social5.pdf", youtube: "https://youtu.be/social5" },
      { id: 30, name: "Education and Awareness", pdf: "social6.pdf", youtube: "https://youtu.be/social6" },
    ],
  },
  {
    id: 6,
    name: "Module 6: Future Perspectives",
    topics: [
      { id: 31, name: "Climate Projections", pdf: "future1.pdf", youtube: "https://youtu.be/future1" },
      { id: 32, name: "Innovations in Technology", pdf: "future2.pdf", youtube: "https://youtu.be/future2" },
      { id: 33, name: "Youth Activism", pdf: "future3.pdf", youtube: "https://youtu.be/future3" },
      { id: 34, name: "Global Agreements", pdf: "future4.pdf", youtube: "https://youtu.be/future4" },
      { id: 35, name: "Public Policy", pdf: "future5.pdf", youtube: "https://youtu.be/future5" },
      { id: 36, name: "The Role of Individuals", pdf: "future6.pdf", youtube: "https://youtu.be/future6" },
    ],
  },
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
