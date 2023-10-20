import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About'
import Faq from './views/Faq';
import Contact from './views/Contact';
import Login from './views/Login';
import Registration from './views/Registration';
import Registered from './views/Registered';
import NavBar from './components/NavBar';
import axios from 'axios'

//So you no longer have to type the base URL anymore for axios requests, you only have to type the endpoints
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/registered' element={<Registered/>}></Route>
      </Routes>
    </div>
  );
}


export default App;
