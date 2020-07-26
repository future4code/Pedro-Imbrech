import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import logonave from '../images/logonave.png'
const GlobalStyle = createGlobalStyle`
  * {
    margin:0;  
    padding:0;
    box-sizing:border-box;
  }
`

const Imglogo = styled.img`

`

const HeaderPosition = styled.div`
background: #FF6347;
padding:15px;
display:flex;
justify-content:center;


`

const Cubre= styled.div`

width:100vw;
border-radius: 7px;
display:flex;


`
const Linkss = styled.div`
align-items:center;
display:flex;
justify-content:flex-end;
`

const DivOne = styled.div`
margin-left:20px;
:hover {
    color: #C5C5C5
  }
`


const Linkssdereita = styled.div`
align-items:center;
display:flex;

margin-left:620px;
`



const Divtwo = styled.div`
margin-left:20px;

:hover {
    color: #C5C5C5
  }
`


const Positionxxs = styled.div`
width:100vw;
height:100vh;
background-color:#444444;
`

const DivColorbackground= styled.div`

`

const Sh1 = styled.h1`

  color:white;
  display:flex;
  justify-content:center;
 letter-spacing:12px;
font-size:200px;
  :hover {
    color: red
  }
`
const Sp1= styled.p`
  color:white;
  display:flex;
  justify-content:center;
 letter-spacing:5px;
 :hover {
    color: gray;
  }
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
    <React.Fragment>
    <GlobalStyle/> 
    <Positionxxs>
    <HeaderPosition>
         
         <Cubre>
        <Linkss>     
        <DivOne><Imglogo src={logonave} height="40px" alt="Match Icon"/></DivOne>
        <DivOne>Labex</DivOne>
        <DivOne>Missões</DivOne>
        <DivOne>Cápsulas</DivOne>
        <DivOne>Contatos</DivOne>
        <DivOne>Duvidas</DivOne>
        </Linkss> 

        <Linkssdereita>     
        <Divtwo onClick={goToLoginPage}>Login</Divtwo>
        <Divtwo onClick={goToApplicationFormPage}>Create Account</Divtwo>
        </Linkssdereita>

         </Cubre>


       </HeaderPosition>



    
   
    <DivColorbackground>
      <div>
      <Sh1>LABEX</Sh1> 
      </div>
     
      <div>
      <Sp1 onClick={goToApplicationFormPage}>Inscreva-se para uma viagem, vamos voar por todo o Universo</Sp1> 
      </div>

    </DivColorbackground>
    </Positionxxs>
    </React.Fragment>
  );
};

export default HomePage;
