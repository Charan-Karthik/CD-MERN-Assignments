import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import ProductDetails from './views/ProductDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<ProductDetails/>} path="/product/:pdtID" />
      </Routes>
    </div>
  );
}

export default App;
