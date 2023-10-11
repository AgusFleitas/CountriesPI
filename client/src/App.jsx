import { Route, Routes } from "react-router-dom";

import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import Landing from "./views/Landing/Landing";
import About from "./views/About/About";

import "./App.css";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create-activity' element={<Create />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
