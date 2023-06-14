
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Navbar from './components/Other/Navbar';

function App() {
  return (
    <div className="App">
    Pagina de Home
    <Navbar/>
    <Routes>
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
      
    </Routes>
    </div>
  );
}

export default App;
