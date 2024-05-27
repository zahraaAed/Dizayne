import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Home from './Home';
import Webdesign from './Webdesign';
import Webdev from './Webdevelopment';
import Logodesign from './LogoDesign';
import Navbar from './components/Navbar';
import Appdesign from './Appdesign';
import Footer from './components/Footer';


import Header from "./components//Header.jsx";
import CarouselComponent from './components/test';
import Services from './components/services';
import Reasons from './components/reasons';
import Contact from './pages/contact';
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
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/reasons' element={<Reasons/>}/>
        <Route path='/contact' element={<Contact/>}/>
     
        <Route path='/car' element={<CarouselComponent/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
