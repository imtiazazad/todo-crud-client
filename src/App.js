import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarHead from './component/NavbarHead';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <NavbarHead/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
