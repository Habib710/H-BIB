import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import './App.css'


function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
      <Route path='*' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
