import './App.css';
import NavbarComp from './Components/NavbarComp';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Screens/Home';
import Hero from './Screens/Hero';

function App() {
  return (
    <>
      <NavbarComp/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Hero" element={<Hero/>}/>            
      </Routes>   
    </>    
  );
}

export default App;