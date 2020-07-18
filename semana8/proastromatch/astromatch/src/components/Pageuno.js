import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import dos from '../dos.svg';


const PositionTargcentral=styled.div`
padding-top:5vh;
display:flex;
justify-content:center;
text-align:center;
text-align:center;
`
const Targcentral=styled.div`
border-radius:3px;
width:25vw;
height:90vh;
border:1px solid black;
`
const Titleposition=styled.div`
display:flex;
justify-content: center;
`
const Title=styled.p`
font-size:10px;
font-weight:bold;
`
const Icone=styled.div`
display:flex;
justify-content:flex-end;
`

export function Pageuno() {
    
    return(
    <div> 
      <PositionTargcentral>
         <Targcentral> 
         <Titleposition>
         <Title>
           ASTROMATCH
         </Title>
         <Icone>
             <img src={dos} className="App-usuario" alt="usuario"/>
         </Icone>
        </Titleposition>
         <Button variant="contained" >
        Default
      </Button>
        
         </Targcentral> 
      </PositionTargcentral> 
    </div> 
 ) 
 
}

export default Pageuno