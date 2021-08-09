import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Header">
          {" "}
          <h1>Dictionary</h1>
        </div>
        <div className="Sub-header">
          What word do you want to look up today?
        </div>
        <main className="Main">
          <Dictionary defaultKeyword="Ocean" />
        </main>

        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/alessia-ruocco-17a61041/"
            target="_blank"
            rel="noreferrer"
          >
            ALRU,
          </a>{" "}
          Opensourced on{" "}
          <a
            href="https://github.com/Aruoc355/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://frosty-euclid-ae1756.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
