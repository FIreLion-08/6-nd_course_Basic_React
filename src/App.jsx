// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import { PopExit } from "./components/PopUps/PopExit/PopExit.jsx";
import { PopNewCard } from "./components/PopUps/PopNewCard/PopNewCard.jsx";
import { PopBrowse } from "./components/PopUps/PopBrowse/PopBrowse.jsx";

import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} classNameName="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} classNameName="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div classNameName="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div className="wrapper">
        {/* pop-up start*/}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}

        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
