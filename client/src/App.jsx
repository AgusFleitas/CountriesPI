import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import Landing from "./views/Landing/Landing";
import About from "./views/About/About";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <NavBar />}
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
