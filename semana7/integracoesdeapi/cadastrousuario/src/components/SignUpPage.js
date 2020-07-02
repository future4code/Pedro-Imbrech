import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const axiosConfig={
headers:{
  Authorization: "nome-artista-genero"
 }
}



//paso 7 creando paginas estaticas 

export class SignUpPage extends React.Component {

  //VAMOS A CRIAR UN ESTADO PARA CONTROLAR INPUTS//segunda parte integracion de la Api 1)
 
//este dato lo tomamos de la Api y creamos el estado

state={

  name:"",
  email:"",
};

////segunda parte integracion de la Api 3) recuerda que a cada evento onchange a q crearle sua funcao 

onChangeName= (event) =>{
  this.setState({name:event.target.value})
}

onChangeEmail= (event) =>{
  this.setState({email:event.target.value})
}










//segunda parte integracion de la Api paso 5) creamos la funcao create user y nos basamos en los 
//parametros de la api, recuerda que dentro va la funcao de axios* el paso 6 esta en el componente UserList

createUser =()=>{
  const body ={ 
    name: this.state.name,
    email: this.state.email
  }

 axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,axiosConfig)
  .then(()=>{
  alert("Usuario criado com sucesso")
//luego de criar mis usuarios limpio mis campos como se indica abajo
 this.setState({name: "", email: ""})
 }).catch(error=>{
  console.log(error.data)
 })
}




  render(){
    console.log(this.state) //este console me permite ver si de verdad estoy controlando mis input
  return (
    <div>
       {/* //paso  8 creamos todos los input*/}

       {/*//segunda parte integracion de la Api 2) VAMOS A IMPLEMENTA INPUT CONTROLADOS Y ESO 
       SE HACE CON    value={this.state.value} y  value={this.state.value}     y luego llamamos las funciones onchange para email y para usuario*/}


    <input type="text" placeholder="nome do usuario" value={this.state.name} onChange={this.onChangeName}/>
    <input type="text" placeholder="Email do usuario" value={this.state.email}onChange={this.onChangeEmail}/>
    
      {/*//segunda parte integracion de la Api 4) esta funcion onclick va a crear mi usuario, luego
      de eso va a precisar axio para hacer la integracion, para eso debo importar la biblioteca y me voy 
      al paso 5 para crear minha funca */} 
    <button onClick={this.createUser}>Enviar Cadastro</button>


    </div>
    );
  }
}

export default SignUpPage;


//paso  8 creamos todos los input

