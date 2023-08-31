import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { Route,Routes } from 'react-router-dom';
import Project from './Components/Project';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Building from './Components/Building';
import Fabricated from './Components/Fabricated';
import Fire from './Components/Fire';
import Enquire from './Components/Enquire';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Home' element={<Home/>}/>
     <Route path='/About' element={<About/>}/>
     <Route path='/Project' element={<Project/>}/>
     <Route path='/Service' element={<Service/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/Enquire' element={<Enquire/>}/>
     <Route path='/Building' element={<Building/>}/>
     <Route path='/Fabricated' element={<Fabricated/>}/>
     <Route path='/Fire' element={<Fire/>}/>
     </Routes>
    </div>
  );
}

export default App;
