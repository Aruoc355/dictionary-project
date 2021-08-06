import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results && props.results.meanings) {
    return (
      <div className="Results">
        <div className="container">
          <h2>{props.results.word}</h2>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
