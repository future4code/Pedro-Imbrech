import React from "react";
import styled from 'styled-components'
import Adicionartarefa from "./Adicionartarefa";


const TelaPosition=styled.div`
width:100vw;
height:100vh;
`

const PositionPlanner=styled.div`
display:flex;
justify-content:center;
align-items:center;

`
const Diasdasemana=styled.div`
margin:3px;
width:15vw;
height:80vh;
border:1px solid black;
border-radius:5px;
`
const Dia=styled.h3`
display:flex;
justify-content:center;
`
const TitllePosition=styled.div`
display:flex;
justify-content:center;

`

const Title=styled.h1`
display:flex;
justify-content:center;
`

export  function Planner ()   {
    
   return(
    <div>
     
   <TelaPosition>   
    <TitllePosition>
    <Title>Planner</Title> 
    </TitllePosition> 


        <PositionPlanner>

                  <Diasdasemana>
                      
                  <Dia>Segunda Feira</Dia>
                    <Adicionartarefa/>
                  </Diasdasemana> 

                  <Diasdasemana>
                  <Dia> Terça-feira</Dia>
                    <Adicionartarefa/>
                  </Diasdasemana> 

                  <Diasdasemana>
                  <Dia>Quarta-Feira</Dia> 
                    <Adicionartarefa/>
                  </Diasdasemana> 

                  <Diasdasemana>
                  <Dia>Quinta-Feira</Dia>
                    <Adicionartarefa/>
                  </Diasdasemana> 

                  <Diasdasemana>
                  <Dia>Sexta-Feira</Dia>
                    <Adicionartarefa/>
                  </Diasdasemana> 

                  <Diasdasemana>
                  <Dia>Sábado</Dia>
                    <Adicionartarefa/>
                 </Diasdasemana> 

                 <Diasdasemana>
                  <Dia>Domingo</Dia>
                    <Adicionartarefa/>
                 </Diasdasemana> 
        </PositionPlanner>
   </TelaPosition>
   </div>
)
}

export default Planner