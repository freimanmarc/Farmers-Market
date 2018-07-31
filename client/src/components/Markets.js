import React from 'react';
import axios from 'axios';
import Market from './Market';

class Markets extends React.Component{

  render(){
    if(this.props.marketList.length) {
      const seeMarkets = this.props.marketDetails;


      return(
        <div>
          <h1>These are your area's markets</h1>
          {seeMarkets.map((market, index) => {
            return (<Market id={"market"+index} market={market.data.marketdetails}/>)
          })}
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
