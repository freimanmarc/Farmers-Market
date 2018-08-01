import React from 'react';
class Home extends React.Component{
  render(){
    return(
      <div id="HomePage">
      <div>
        <h1 id="HeaderOne">My Local Market: Local is fresh</h1>
        </div>
        <div>
          <img id="HomeImage" src={process.env.PUBLIC_URL + "/thankfarmer.jpg"}/>
        </div>
      <div id="HomeMainCont" alt="thankfarmer">
        <h3 className='HomeContent'>Philosophy
        <p className ="HomeText">Buying your produce in your local farmers market promotes the local economy, as well as improving our food choices
        in order to achieve a healthier and more sustainable lifestyle. </p></h3>
      <h3 className='HomeContent'>Contact
        <p className ="HomeText">manuelamarcrobert@localfarmers.com</p></h3>
      </div>
    </div>
    )
  }
}

export default Home;
