import React from 'react';
import axios from 'axios';

class Markets extends React.Component{

  render(){
    if(this.props.marketList.length) {
      // for map here  NOT WORKING RIGHT
      // function marketItems()  {
      //   console.log('TESTING MARKETLIST')
      // let list = this.props.marketList.map(async list => await axios.get(`/marketDetails/${this.props.marketList}`));
      // console.log(list.data.marketdetails);
      // }
      // marketItems();


      return(
        <div>
          <h1>These are your area's markets</h1>
          <p>"Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo)."</p>
        </div>
      )
    } else {
      return (
        <h1>Please search for markets.</h1>
      )
    }

  }
}
export default Markets;
