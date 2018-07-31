import React from 'react';

export default class Market extends React.Component{

  render(){
    return(
      <div>
        <ul>
          <li> {this.props.market.Address}</li>
          <li> {this.props.market.Products}</li>
          <li> {this.props.market.Schedule}</li>
        </ul>
      </div>
    )
  }
}
