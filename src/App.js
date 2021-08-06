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
        <main className="Main">
          <Dictionary />
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
            href="https://app.netlify.com/sites/frosty-euclid-ae1756/deploys/"
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
