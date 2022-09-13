import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm'

function App() {
  return (
    <div className='container mt-4'>
      <h1>Favorite Authors</h1>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<CreateForm />} path="/author/create" />
        <Route element={<EditForm />} path="/author/:id/update" />
      </Routes>
    </div>
  );
}

export default App;
