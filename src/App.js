// src/App.js
import React from "react";
import ModuleList from "./components/ModuleList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Educational Hub</h1>
      </header>
      <main>
        <ModuleList />
      </main>
      <footer>
        <p>&copy; 2025 Educational Hub</p>
      </footer>
    </div>
  );
}

export default App;
