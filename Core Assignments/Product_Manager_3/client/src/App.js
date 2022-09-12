import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './views/Main';
import ProductDetails from './views/ProductDetails';
import EditForm from './components/EditForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<ProductDetails/>} path="/product/:pdtID" />
        <Route element={<EditForm/>} path="/product/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
