import React from 'react';

export default class Market extends React.Component{

  render(){
    return(
      <div id="market-div">
        <div id="Markets">
        <ul>
          <li> Name: {this.props.market.myMarketName}</li>
          <li> Address: {this.props.market.Address}</li>
          <li> Products: {this.props.market.Products}</li>
        </ul>
        </div>
      </div>
    )
  }
}
