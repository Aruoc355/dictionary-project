import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
                autoFocus={true}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
