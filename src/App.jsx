import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Home from './Home';
import Webdesign from './Webdesign';
import Webdev from './Webdevelopment';
import Logodesign from './LogoDesign';
import Navbar from './components/Navbar';
import Appdesign from './Appdesign';


import Header from "./components//Header.jsx";
import CarouselComponent from './components/test';
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webdesign" element={<Webdesign />} />
        <Route path="/webdev" element={<Webdev />} />
        <Route path="/logodesign" element={<Logodesign />} />
        <Route path="/Appdesign" element={<Appdesign />} />
        <Route path='/header' element={<Header/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/car' element={<CarouselComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
