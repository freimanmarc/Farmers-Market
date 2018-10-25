import React from 'react';
import marc from '../images/FreimanMarc.jpg'
import robert from '../images/GarciaRobert.jpg'
import manuela from '../images/CardenasManuela.jpg'
class About extends React.Component{
 render(){
   return(
     <div id="AboutPage">
       <div>
     <h1 id="HeaderAbout">About Us</h1>
     <p>MyLocalMarket came to be as a realization that local farmers are misrepresented and under marketed, causing the community to shop at chain markets instead of supporting their local farmers and boosting the local economy.</p>
     </div>
     <div id="AboutMainContent">
       <h2 className="AboutMembers">Manuela Cardenas
       </h2>
           <img className="Photos" src={manuela} alt="people"/>
         <p>Manuela is a former teacher with a passion for farming.</p>
       <h2 className="AboutMembers">Marc Freiman
       </h2>
           <img className="Photos" src={marc} alt="people"/>
         <p>Marc is a Mechanical and Electrical Engineer who enjoys working with new people to solve
         everyday problems.</p>
       <h2 className="AboutMembers">Robert Garcia
       </h2>
         <img className="Photos" src={robert} alt="people"/>
         <p>Robert is a former retail manager who understands the need for good cutomer/supplier relationships</p>
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
