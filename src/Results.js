import React from "react";
import "./Results.css";

export default function Results(props) {
  console.log(props.results.meanings);
  if (props.results) {
    return (
      <div className="Results">
        <div className="container">
          <h2>{props.results.word}</h2>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
