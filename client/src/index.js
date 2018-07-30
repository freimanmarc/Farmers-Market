import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Style.css';
import Home from './components/Home';
import About from './components/About';
import Markets from './components/Markets';
import MarketForm from './components/MarketForm';
import Header from './components/Header';
import App from './components/App';


const Browser = () =>{
  return(
    <BrowserRouter>
        <div>
          <Route path = '/' component = {Header} />
          <Route path = '/' component = {App} />
          // <Route exact path ='/Home' component = {Home} />
          // <Route path = '/Markets' component = {Markets} />
          <Route path = '/About' component = {About} />
        </div>
      </BrowserRouter>
  )
}


ReactDOM.render(<Browser />, document.getElementById('root'));
