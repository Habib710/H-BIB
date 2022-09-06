import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Contract from './Components/Contract/Contract';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Routes>
      <Route path='*' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/cont' element={<Contract></Contract>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
