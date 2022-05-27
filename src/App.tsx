import React from "react";
import "./App.css";
import data from "./data/Data";
import Month from "./components/Month";
import Feature from "./components/Feature";

function App() {
  return (
    <div className="App">
      <h1 className="title">First Year with Penny</h1>
      <div className="month-list">
        {data.map((data, i) => {
          return (
            <Month
              month={data.month}
              image={data.image}
              caption={data.caption}
              key={i}
            />
          );
        })}
      </div>
      <Feature />
    </div>
  );
}

export default App;
