import { useState } from "react";
import "./App.css";
import Increment from "./components/Increment";
import calc from "./assets/img/calculator.png";
import Header from "./components/Header";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header calc={calc} />
      <Increment counter={counter} setCounter={setCounter} />
      <footer>
        <p>
          Made with <span className="bold">React</span> at
          <span className="bold">
            <a href="https://www.lereacteur.io/"> Le Reacteur </a>
          </span>
          by
          <span className="bold">
            <a href="https://github.com/LuaGeo"> Luana de Oliveira</a>
          </span>
        </p>
      </footer>
    </>
  );
}

export default App;
