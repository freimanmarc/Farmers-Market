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
      marketDetails: []
    }
    this.getMarkets = this.getMarkets.bind(this);
    this.getZip = this.getZip.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  async getZip(ZipId) {
    let {data} = await axios.get(`/zipCode/${ZipId}`);
    let results = data.map(result => result.id);
    this.setState({marketList: results})
  }

  async getDetails(marketList, marketDetails) {
    console.log('IM RUNNIN');
    let list = marketList.map(async (mktId) => {
      let {data} = await axios.get(`/marketDetails/${mktId}`);
      marketDetails.push(data)
      this.setState({marketDetails});
    });
  }

  async getMarkets(zip) {
    await this.getZip(zip);
    this.getDetails(this.state.marketList, this.state.marketDetails);
  }

  // async componentDidMount() {
  //   await this.getZip();
  //   let list = this.marketList.map(async mkt => await axios.get(`/marketDetails/${this.marketList}`));
  //   this.setState({marketDetails: list.data.marketdetails});
  //   console.log(list.data.marketdetails);
  // }

render()  {
  return(
    <div>
      <MarketForm getZip={this.getZip} getMarkets={this.getMarkets}/>
      <Markets marketList={this.state.marketList} marketDetails={this.state.marketDetails}/>
    </div>
    )
  }
};
