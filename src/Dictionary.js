import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
