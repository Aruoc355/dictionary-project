import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("null");

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="Container">
        <form className="form-control" onSubmit={search}>
          <div className="row">
            <div className="col">
              <input
                type="search"
                onChange={handleKeywordChange}
                placeholder="Tell me the word...🔎"
              />
            </div>
          </div>
        </form>
        <Results results={results} />
      </div>
    </div>
  );
}
