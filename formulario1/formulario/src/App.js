import React from 'react';
import Etapas from './components/Etapas'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Acabou from './components/Acabou'
import logo from './logo.svg';
import styled from "styled-components";

const AppContainer = styled.div`
text-align:center;
`

export class App extends React.Component {

state ={
  etapa1:false
};

handleClickEtapasOrEtapa2= () => {
  this.setState({ login: !this.state.etapa1 });
};

render() {   
   const renderiza = () => {
   if (this.state.etapa1) {
   return <Etapa2 handleClickEtapa2={this.handleClickEtapasOrEtapa2}/>;
   }else{
   return <Etapas handleClickEtapas={this.handleClickEtapasOrEtapa2}/>;
   }
};


  return <AppContainer>{renderiza()}</AppContainer>;
    
  }
}

export default App;
