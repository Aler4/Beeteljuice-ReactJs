import React from 'react';
import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import {Footer, Header} from './components';
import {About, Home, News, Projects} from "./pages";
import {observable} from "mobx";

function App(){


  return (
      <BrowserRouter>
        <div className="App">
          <Header></Header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/news' element={<News />} />
            </Routes>
            <Footer/>
        </div>


      </BrowserRouter>
  );
};

export default App;
