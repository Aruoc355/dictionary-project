import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("null");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);

    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="Container">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <input
                  type="search"
                  onChange={handleKeywordChange}
                  placeholder="Tell me the word...🔎"
                />
              </div>
            </div>

            <p>Suggestions: daffodil, sun, sky...</p>
          </form>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
