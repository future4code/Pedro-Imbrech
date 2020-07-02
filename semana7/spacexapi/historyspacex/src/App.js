import React from 'react';
import './App.css';
import Axios from 'axios';

export class App extends React.Component {
//declaramos nuestro estado pegamos el objeto de la api 
  state = {
misions :[ ]
    
  }



componentDidMount=()=>{
  Axios.get("https://api.spacexdata.com/v3/missions").then(response =>{
  console.log(response.data)
  this.setState({misions: response.data})
  }).catch(err=>{
    console.log(err.message)
  })

}




  render(){

  return (
    <div className="App-header">
      <h1>Olá, sou Elon Musk e essas são algumas das missões mais destacadas da empresa que administro.</h1>
      {this.state.misions.map(misions=> {
        return(
        <div>
        <p><strong>Nome: </strong>{misions.mission_name}</p>  
        <p><strong>Id mission: </strong>{misions.mission_id}</p>
        <p><strong>Fabricantes: </strong>{misions.manufacturers.map(manufacturer =>{
          return <span>{manufacturer}; </span>
        })}</p>
        <a href={misions.wikipedia}>link</a>
        </div>

         )

      })}


    </div>
   );
  }
}

export default App;
