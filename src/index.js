import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './Components/Home';
import About from './Components/About';
import Markets from './Components/Markets';
import Header from './Components/Header';

const Browser = () =>{
  return(
    <BrowserRouter>
        <div>
          <Route path = '/' component = {Header} />
          <Route exact path ='/Home' component = {Home} />
          <Route path = '/Markets' component = {Markets} />
          <Route path = '/About' component = {About} />
        </div>
      </BrowserRouter>
  )
}


ReactDOM.render(<Browser />, document.getElementById('root'));
registerServiceWorker();
