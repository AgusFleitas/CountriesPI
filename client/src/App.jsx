import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addActivity } from "./redux/actions";

import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";

import "./App.css";

function App() {

const dispatch = useDispatch();

function createActHandler (activityDetail) {
  dispatch(addActivity(activityDetail))
  console.log("ActivityDetail que dispara el dispatch" + activityDetail);
}

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create-activity' element={<Create createActivity={createActHandler}/>} />
      </Routes>
    </>
  );
}

export default App;
