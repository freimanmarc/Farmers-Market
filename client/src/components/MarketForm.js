import React, { Component } from 'react';


class MarketForm extends React.Component {
   constructor() {
     super();
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e) {
     e.preventDefault();
     this.props.getZip(this.refs.return.value);
   }

   render()  {
       return (
           <form action="" className="farmer-market-form" onSubmit={this.handleSubmit}>
           <h1 className="form-title">Find your local Farmers Market!</h1>
          <div>
             <label htmlFor="city">Enter Zip Code</label>
             <input type="number" ref='return' name="zipcode"  placeholder="ex: 33018" />
           </div>
           <footer>
             <input type="submit" value="Find my market!" />
           </footer>
           </form>
       );
   }
}
export default MarketForm;
