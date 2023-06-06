import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarHead from './component/NavbarHead';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <NavbarHead />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
