import React from 'react';
import axios from 'axios';

class Markets extends React.Component{

  render(){
    if(this.props.marketList.length) {
      const seeMarkets = this.props.marketDetails;




      return(
        <div>
          <h1>These are your area's markets</h1>
          <ul>
          {seeMarkets.map((market, index) => {
            return (<li key={"market"+index}><p>{market.marketdetails.Address}</p><p></p></li>) 
          })}
          </ul>
        </div>
      )
    } else {
      return (
        <h1>Please search for markets.</h1>
      )
    }

  }
}
export default Markets;
