import React from 'react';
import styled from 'styled-components'
import axios from 'axios'


//paso 7 creando paginas estaticas 

export class SignUpPage extends React.Component {



  render(){

  return (
    <div>
       {/* //paso  8 creamos todos los input*/}
    <input type="text" placeholder="nome do usuario"/>
    <input type="text" placeholder="Email do usuario"/>
    <button>Enviar Cadastro</button>
    </div>
    );
  }
}

export default SignUpPage;


//paso  8 creamos todos los input

