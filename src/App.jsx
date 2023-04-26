import { useState } from "react";
import "./App.css";
import Increment from "./components/Increment";
import Header from "./components/Header";

function App() {
  const [counter, setCounter] = useState(0);

  return <Increment counter={counter} setCounter={setCounter} />;
}

export default App;
