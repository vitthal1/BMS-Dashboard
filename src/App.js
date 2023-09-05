import React from 'react';
import Posts from './components/Posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import Settings from './components/Settings';
import Alerts from './components/Alerts';
import Reports from './components/Reports';
import Chiller from './components/Chiller';
function App () {
  return (
    <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/post" element={<Post />} />
         <Route exact path="/contact" element={<Contact />} />
         <Route exact path="/posts" element={<Posts/>} />
         <Route exact path="/settings" element={<Settings/>} />
         <Route exact path="/alerts" element={<Alerts/>} />
         <Route exact path="/reports" element={<Reports/>} />
         <Route exact path="/chiller" element={<Chiller/>} />
      </Routes>
    </BrowserRouter>     
)}

export default App;
