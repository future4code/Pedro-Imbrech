import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import SignUpPage from './components/SignUpPage';
import UserListPage from './components/UsersListPage';



//1)el primer paso es convertir un componente de clase en un componente funcional.


export class App extends React.Component {

  //3)el tercer paso y sirve para crear uma rederizacacao condicional es crear un estado 

  state={
//4) esta constante simplemente va a guardar la pagina actual 
    currentPage: "signUpPage"

  }

//7) crear una logica para mudar o valor do estado esto e uma logica que me permite renderizar o mostrar
//si estoy en user usersListPage o signUpPage
changePage = () => {
    if (this.state.currentPage === "signUpPage") {
      this.setState({ currentPage: "usersListPage" });
    } else {
      this.setState({ currentPage: "signUpPage" });
    }
  };


  render(){
//5 dento del rende voy a crear una contante  para llamar al estado los los llamamos creando una constante page igua a y pegamos el estado this.state.signUpPage
//5.1) yo voy a renderizar o SingUppage o UsersListPage asi se lee lo que esta  abajo que no es mas q un ternario

//es aqui en esta parte donde se unen mis dos componentes y son llamados signUpPage" ?  <SignUpPage/>: <UserListPage/>
  
// yo pego el valor de mi estado y mediante un ternario le digo si no <SignUpPage/>: entonce es  <UserListPage/>
const page= this.state.currentPage === "signUpPage" ?  <SignUpPage/>: <UserListPage/>



    return (
    <div>
      
      
      {/*//llamamos a page para ver si esta funcionando
      //vou a crear un boton y ese boton va a contener el 
      nombre de una fucion(hangePage) que va a ser llamada*/}

<button onClick={this.changePage}>Trocar de paginas</button>

      {page}
 
    </div>

    );
  }
}

export default App;
