import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import App from './components/App';


// const Browser = () =>{
//   return(
//     <BrowserRouter>
//         <div>
//           <Route path = '/' component = {Header} />
//           <Route path = '/' component = {MarketForm} />
//           <Route path = '/Markets' component = {App} />
//           // <Route exact path ='/Home' component = {Home} />
//           <Route path = '/Markets' component = {Markets} />
//           <Route path = '/About' component = {About} />
//         </div>
//       </BrowserRouter>
//   )
// }


ReactDOM.render(<App />, document.getElementById('root'));
