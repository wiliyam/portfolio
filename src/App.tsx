import React from "react";
import "./App.css";
import Home from "./components/home/home";

const App: React.FC = () => {
  const id: number = 10;
  const name: string = "wiliyam";
  return (
    <div className="App">
      <header>
        <Home />
      </header>
    </div>
  );
};

export default App;
