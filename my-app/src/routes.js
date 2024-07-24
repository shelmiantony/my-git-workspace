import "../src/App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Game from "./Component/TicTacToe/Game";
function RouterFun() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <Link to="/tictactoe">TicTacToe</Link>
          </li>
          {/* <li>
         <Link to="/about">About</Link>
       </li>
       <li>
         <Link to="/contact">Contact</Link>
       </li> */}
        </ul>
        <Routes>
          <Route exact path="/tictactoe" element={<Game />}></Route>
          {/* <Route exact path="/about" element={<About />}></Route>
       <Route exact path="/contact" element={<Contact />}></Route>             */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
