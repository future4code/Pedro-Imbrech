import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import naveespacial from '../images/naveespacial.jpg'
import Button from '@material-ui/core/Button';


const DivColorbackground= styled.div`


`

const Sh1 = styled.h1`

  color:pink;
`








const HomePage = () => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/sobre/portugues");
  };

  const goToApplicationFormPage = () => {
    history.push("/sobredia/español");
  };


  return (
    <DivColorbackground>
      <div>
      <Sh1>LABEX</Sh1>
      <p>Home</p>


   <p>ir a login</p>
      <Button variant="contained" color="primary"   onClick={goToLoginPage}>
        Login
      </Button>


     
     
      <hr/>

      <p>Cadastro</p>

      <Button variant="contained" color="primary"   onClick={goToApplicationFormPage}>
      Create your  Account
      </Button>
      

      <hr/>
      <img src={naveespacial} height="400px" alt="Match Icon"/>
    </div>

    </DivColorbackground>
  );
};

export default HomePage;
