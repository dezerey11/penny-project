import React from "react";
import "./App.css";
import Month from "./components/Month";
import data from "./data/Data";

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
    </div>
  );
}

export default App;
