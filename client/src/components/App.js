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
    this.setState({marketList: data})
  }

  async getDetails() {
    console.log('IM RUNNIN');
    //[{"id":"1007325","marketname":"3.1 Youth Stands!"},
    //{"id":"1003550","marketname":"6.7 Barry University Green Market"}]
    let marketDetails_list = []
    this.state.marketList.forEach(async (market) => {
      //console.log(market);
      let {data} = await axios.get(`/marketDetails/${market.id}`);
      // console.log(marketDetails);
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
      <Markets marketList={this.state.marketDetails} marketDetails={this.state.marketDetails}/>
    </div>
    )
  }
};
