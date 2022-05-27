import React from "react";
import "./Month.css";

type MonthProps = {
  month: string;
  image: string;
  caption: string;
};

const Month = (props: MonthProps) => {
  return (
    <div className="month">
      <h1> {props.month}</h1>
      <div>
        {!props.image || !props.caption ? (
          <>
            <div className="no-image"></div>
            <h2>TBD</h2>
          </>
        ) : (
          <>
            <img src={props.image} alt="Penny Picture" />
            <h2>{props.caption}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Month;
