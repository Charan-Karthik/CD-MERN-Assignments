import { Link, Routes, Route, Navigate } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';

function App() {
  return (
    <div className='container mt-4'>
      <div className='w-50'>
        <div className='d-flex justify-content-around'>
          <Link to={'/players/list'}><h2>Manage Players</h2></Link>
          <h2> | </h2>
          <Link to={'/status/game/1'}><h2>Manage Player Status</h2></Link>
        </div>
      </div>

      <Routes>
        <Route path={'*'} element={<Navigate to={'/players/list'} />} />
        <Route path={'/players/list'} element={<PlayerList />} />
        <Route path={'/players/add'} element={<AddPlayer />} />
      </Routes>

    </div>
  );
}

export default App;
