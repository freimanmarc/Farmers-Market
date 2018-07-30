import React from 'react';
import {Link} from 'react-router-dom'
import MarketForm from './MarketForm';

class Header extends React.Component{
  render(){
    return(
  <ul id='HeaderId'>
    <li>
      <Link to = '/Home'>Home</Link>
    </li>
    <li>
      <Link to = '/About'>About</Link>
      </li>
      <li>
      <Link to = '/MarketForm'></Link>
    </li>
    </ul>)
  }
}

export default Header;
