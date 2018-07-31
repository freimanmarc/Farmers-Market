import React from 'react';

class About extends React.Component{
  render(){
    return(
      <div id="AboutPage">
        <div>
      <h1 id="HeaderAbout">About Us</h1>
      <p>'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'</p>
      </div>
      <div id="AboutMainContent">
        <h2 className="AboutMembers">Manuela Cardenas
        </h2>
            <img className="Photos" src={process.env.PUBLIC_URL + "/CardenasManuela.jpg"}/>
          <p>Manuela is a former teacher with a passion for farming.</p>
        <h2 className="AboutMembers">Marc Freiman
        </h2>
            <img className="Photos" src={process.env.PUBLIC_URL + "/FreimanMarc.jpg"}/>
          <p>Marc is a Mechanical and Electrical Engineer who enjoys working with new people to solve
          everyday problems.</p>
        <h2 className="AboutMembers">Robert Garcia
        </h2>
          <img className="Photos" src={process.env.PUBLIC_URL + "/GarciaRobert.jpg"}/>
          <p>Robert is a former retail manager who understands the need for good cutomer/supplier relationships,
          he is currently a web devoloper and founding member of Farm Baket.</p>
      </div>
      <div id="MisVis">
        <div>
        <h2>Mission
          <p>Create an environment for local farmers to engage with residents of their area
          in order to promote the local economy and improve eating habits. </p>
        </h2>
        <h2>Vision
          <p>Create a nationwide communication path between vendors and cosumers to keep them updated on their product selection.</p>
        </h2>
      </div>
    </div>
  </div>
    )
  }
}

export default About;
