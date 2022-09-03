import './App.css';
import Form from './components/Form';
import { useState } from 'react'
import { Routes, Route} from "react-router-dom";
import Display from './components/Display';

function App() {

  const [apiResponse, setApiResponse] = useState();

  return (
    <div className="container mt-4">
      <Form apiResponse={apiResponse} setApiResponse={setApiResponse}/>
      
      <Routes>
        {/* <Route path="*" element={}></Route> */}
        <Route path="/:searchField/:searchID" element={<Display apiResponse={apiResponse} setApiResponse={setApiResponse}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
