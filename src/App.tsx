import React from "react";
import "./App.css";
import Schema from "./components/Schema";
import Data from "./components/Data";
import Manifest from "./components/Manifest";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Schema step={10} factor={-3} />
        <br />
        <Data step={4} factor={2} />
        <br />
        <Manifest step={4} factor={2} />
        <br />
      </div>
    </RecoilRoot>
  );
}

export default App;
