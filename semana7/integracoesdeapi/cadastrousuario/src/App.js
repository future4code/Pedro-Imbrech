import React from 'react';
import styled from 'styled-components'
import axios from 'axios'


const Buttons= styled.button`
color:${props=>props.fonte};
margin:${props=>props.margins};
`

const Buttons2= styled.button`

color:${props=>props.fonte};
margin-left:${props=>props.margins};
`

const Div1= styled.div`
display:flex;
justify-content:center;
margin:30px;
`

const Cuadrocadastro= styled.div`

width: ${props=>props.widthx};
height:${props=>props.heigtx};
border:${props=>props.bordex};
`
const Div2= styled.div`
display:flex;
justify-content:center;
flex-direction:column;

`


const Inputs= styled.input`
margin: ${props=>props.margins};

`


export class App extends React.Component {



  render(){

  return (
    <div>
     <Buttons colorfonte="blue" margins="20px">Ir a la pagina de la lista</Buttons>
     <Div1>
  
     <Cuadrocadastro widthx="350px " heigtx="150px" bordex="1px solid black">

     <Div2>
     Nome:<Inputs margins="10px"/>
    
     E-mail:<Inputs margins="10px"/>
     </Div2>

     <Buttons2 colorfonte="blue" margins="150px">Salvar</Buttons2>

     </Cuadrocadastro>
     
    </Div1>

    </div>

    );
  }
}

export default App;
