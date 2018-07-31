import React, { Component } from 'react';
import axios from 'axios';
import MarketForm from './MarketForm';
import Home from './Home'
import Markets from './Markets'
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import About from './About';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      zipCode: null,
      marketList: [],
      marketDetails: []
    }
    this.getMarkets = this.getMarkets.bind(this);
    this.getZip = this.getZip.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  async getZip(ZipId) {
    let {data} = await axios.get(`/zipCode/${ZipId}`);
    this.setState({marketList: data})
  }

  async getDetails() {
    console.log('IM RUNNIN');
    let marketDetails_list = []
    this.state.marketList.forEach(async (market) => {
      let {data} = await axios.get(`/marketDetails/${market.id}`);
      data.marketdetails.myResponseUrlId = market.id;
      data.marketdetails.myMarketName = market.marketname;
      marketDetails_list.push(data);
      this.setState({marketDetails: marketDetails_list});
    });
  }

  async getMarkets(zip) {
    await this.getZip(zip);
    this.getDetails();
  }


render()  {
  return(
    <BrowserRouter>
      <div>
        <Route path = '/' render = {props => <MarketForm {...props} getMarkets={this.getMarkets} getZip={this.getZip} /> } />
        <Route path = '/Home' component = {Home} />
        <Route path = '/Markets' render = { props => <Markets {...props} marketList={this.state.marketDetails} marketDetails={this.state.marketDetails} /> } />
        <Route path = '/About' component = {About} />


        // <MarketForm getZip={this.getZip} getMarkets={this.getMarkets}/>
        // <Markets marketList={this.state.marketDetails} marketDetails={this.state.marketDetails}/>
      </div>
    </BrowserRouter>
    )
  }
};
