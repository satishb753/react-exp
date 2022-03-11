import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <Navigate to='/home' />} />
      <Route exact path='/home' element={ <Home/>} />
    </Routes>
  );
}

export default App;
