import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Home from './Home';
import Webdesign from './Webdesign';
import Webdev from './Webdevelopment';
import Logodesign from './LogoDesign';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webdesign" element={<Webdesign />} />
        <Route path="/webdev" element={<Webdev />} />
        <Route path="/logodesign" element={<Logodesign />} />
        <Route path='/header' element={<Header/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
