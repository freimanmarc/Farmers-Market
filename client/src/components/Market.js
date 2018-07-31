import React from 'react';

export default class Market extends React.Component{

  render(){
    return(
      <div>
        <ul>
          <li> Name: </li>
          <li> Address: {this.props.market.Address}</li>
          <li> Products: {this.props.market.Products}</li>
        </ul>
      </div>
    )
  }
}
