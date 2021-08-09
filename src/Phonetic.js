import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="btn btn-secondary">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
      <br />
      {props.phonetic.text}
    </div>
  );
}
