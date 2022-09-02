import React from "react";
import { Routes, Route} from "react-router-dom";

import './App.css';
import Main from './components/Main'
import Home from "./components/Home";
import NumberOrWord from "./components/NumberOrWord";
import StyledText from './components/StyledText';


function App() {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="*" element={<Main/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/:input" element={<NumberOrWord/>}></Route>
        <Route path="/:word/:wordColor/:setBackgroundColor" element={<StyledText/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
