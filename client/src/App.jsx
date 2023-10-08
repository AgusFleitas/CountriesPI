import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create-activity' element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
