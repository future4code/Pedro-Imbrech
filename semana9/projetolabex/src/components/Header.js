import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import logonave from '../images/logonave.png'

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

margin-left:720px;
`



const Divtwo = styled.div`
margin-left:20px;
:hover {
    color: #C5C5C5
  }
`

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;  
    font-family: 'Rajdhani', sans-serif;
  }
`

export function Header (){

    return(
        <React.Fragment>
        <   GlobalStyle/>
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


        {/*   <Linkssdereita>     
         <Divtwo >Login</Divtwo>
         <Divtwo>Missões</Divtwo>
         </Linkssdereita>
*/}
          </Cubre>


        </HeaderPosition>
    </React.Fragment>
    )
}