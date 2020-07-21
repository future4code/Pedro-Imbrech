import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Headermatch from './Headermatch'
import BodMatch from './/BodMatch'
import FooterxCardx from './FooterxCardx'
import axios from 'axios'
import Mastermatchs from './Mastermatchs'

const PriCard = styled.div`
height: 600px;
display: flex;
border-radius: 13px;
background: #ffffff;
box-shadow:  12px 12px 25px #cccccc, 
             -12px -12px 25px #ffffff;
flex-direction: column;
align-items: center;
justify-content: space-between;
background-color: #FFF;
width: 400px;

`

const Constcarg= styled.div`
    display: inline-block;
    transform: translateZ(1px);
`

const Carg = styled.div`
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    background: #32BCC7;
    
`

export default function Cardprimeiro () {
    const [Matchesapi, setMatchesapi] = useState({})
    const [renderMatches, setRenderMatches] = useState(false)

    const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"

    const getProfiles = () => {
        axios.get(`${baseURL}/person`)
        .then((response) => {
       setMatchesapi(response.data.setMatchesapi)
        })
        }

       useEffect (() => {
        getProfiles()
       }, [])

       const onClickMatch = () => {
        const body = {
       "id": Matchesapi.id,
       "choice": true 
        }
        axios.post(`${baseURL}/choose-person`, body)
        .then(() => {
        alert("Você deu match!")
        getProfiles()
        })
        .catch(err => {
       console.log(err)
        })
        }
    
         const onClickReject = () => {
        const body = {
        "id": Matchesapi.id,
       "choice": false 
        }
        axios.post(`${baseURL}/choose-person`, body)
        .then(() => {
        alert("Você deu um Reject!")
         getProfiles()
        })
        .catch(err => {
        console.log(err)
        })
        }
    
    useEffect(() => {
     window.addEventListener("keydown", onKeyPressed);
      return () => {
            window.removeEventListener("keydown", onKeyPressed) 
        }
     function onKeyPressed (event) {
     if(event.code === "ArrowRight"){
      onClickMatch()
       }else if (event.code === "ArrowLeft") {
      onClickReject()
            }
        }
    }, );
    
    const onClickRender = () => {
        setRenderMatches(!renderMatches)
    }

    const renderBody = () => {
        if(renderMatches === false){
            return(
                <PriCard >
                    <Headermatch onClickRender={onClickRender}/>
                    {Matchesapi ? <BodMatch name={Matchesapi.name} age={Matchesapi.age} bio={Matchesapi.bio} photo={Matchesapi.photo}/> : <Constcarg><Carg></Carg></Constcarg>}
                    <FooterxCardx profiles={Matchesapi} onClickMatch={onClickMatch} onClickReject={onClickReject}/>
                </PriCard >
            )
        } else if (renderMatches === true){
            return(
                <PriCard >
                    <Headermatch onClickRender={onClickRender}/>
                    <Mastermatchs baseURL={baseURL}/>
                </PriCard>
            )
        }
    }

    return (
        renderBody()
    )
}

