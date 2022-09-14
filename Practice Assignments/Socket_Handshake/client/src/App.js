import './App.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function App() {
  
  const[socket] = useState(() => io(':5000'));

  useEffect(() => {
    socket.on("Welcome", data => console.log(data));

    return () => socket.disconnect(true);
  }, [])
  
  return (
    <div className="App">
      <h1>Socket Test</h1>
    </div>
  );
}

export default App;
