
import React from 'react';
import './App.css';
import Cardprimeiro from './Components/Cardprimeiro';
import styled from 'styled-components';

const Mastermain = styled.div`
align-items: center;
height: 100vh;
display: flex;
justify-content: center;

`

function App() {
  return (
    <Mastermain className="App">
      <Cardprimeiro />
    </Mastermain>
  );
}

export default App;

















   
