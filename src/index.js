import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

import "./styles.css";

function App() {
  const [value, setValue] = React.useState("");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <Hello text={value} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
