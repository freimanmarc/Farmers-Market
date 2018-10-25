import React, { Component } from 'react';
import {Input, Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const navItem = {
 width: '125px',
 padding: 'auto',
 fontSize: '1.5em',
}
const space ={
  marginRight: '3rem',
}

const form = {
 display: 'flex',
 flexDirection: 'row',
 margin: 'auto',
}

const header = {
 fontSize: '1.5em',
}

const sub = {
 fontSize: '2em',
 align: 'center',
 marginTop: '10px',
 paddingTop: '10px'
}


class MarketForm extends React.Component {
 constructor() {
   super();
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 async handleSubmit(e) {
   e.preventDefault();
   await this.props.getMarkets(this.refs.return.value);
   this.props.history.push("/Markets")
 }

 render()  {
     return (
       <Menu id='HeaderId'>
         <Menu.Item style={navItem}>
           <Link to = '/'>Home</Link>
         </Menu.Item>
         <Menu.Item style={navItem}>
           <Link to = '/About'>About</Link>
           </Menu.Item>
           <Menu.Item style={navItem}>
           <Link to = '/Markets'>Your Markets</Link>
         </Menu.Item>

         <Menu.Menu style={space} position='right' id="Bar" >
         <form action="" className="farmer-market-form" onSubmit={this.handleSubmit} style={form}>
        <div>
           <label htmlFor="city" style={sub }>Enter Zip Code </label>
           <input type="number" ref='return' name="zipcode"  placeholder="ex: 33018" />
         </div>
         <footer>
           <input type="submit" value="Find my market!" />
         </footer>
         </form>
         </Menu.Menu>
     </Menu>

     );
 }
}
export default MarketForm;
