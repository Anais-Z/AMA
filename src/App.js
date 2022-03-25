import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import Help from './Help'
import Parent from './Parent'
import {Route,Link, Routes} from "react-router-dom"
import Navbar from "./Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/about" element={<About/>}/>
     <Route  path="/help" element={<Help/>}/>
     <Route  path="/parent" element={<Parent/>}/>
     </Routes>
    </div>
  );
}

export default App;
