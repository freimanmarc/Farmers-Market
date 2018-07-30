import React, { Component } from 'react';
import axios from 'axios';
import MarketForm from './MarketForm';
import Home from './Home'
import Markets from './Markets'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      zipCode: null,
      marketList: [],
      marketDetails: {}
    }
    this.getZip = this.getZip.bind(this);
  }

  async getZip(zipId) {
    let {data} = await axios.get(`/zipCode/${zipId}`);
    this.setState({marketList: data});
    console.log(data);
  }
  async getMarket (marketId){
    let {data} = await axios.get(`/marketDetails/${marketId}`);
    this.setState({marketDetails: data});
    console.log(data);
  }

render()  {
  return(
    <div>
      <MarketForm getZip={this.getZip}/>
      <Markets marketList={this.state.marketList}/>
    </div>
    )
  }
};
