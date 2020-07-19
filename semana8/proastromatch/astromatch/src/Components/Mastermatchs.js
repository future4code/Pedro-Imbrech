import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MatPadre = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    justify-content: space-between;
    overflow: auto;
`

const ExMatch = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;
    margin: 0 10px;
    :hover {
        background-color: #E5E5E5; 
    }
`

const Imgenes = styled.img`
 
    border-radius: 100%;
 
`

const Buttonclea = styled.button`
    width: 50%;
    margin: 5px auto;


    
`

const MatchesX = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
`
const getMatches = async (baseURL) => {
    const response = await
    axios.get(`${baseURL}/matches`)
    return response.data.matches;
}

export default function Mastermatchs (props) {
    const [matches, setMatches] = useState([])
    
    useEffect (() => {
     getMatches(props.baseURL).then (matches => {
      setMatches(matches)
     })
    }, [ props.baseURL])

    const clearMatches = () => {
        const body = {
         "id": "dROmKe0ohRxVMpYAnXZE"
        }
        if(window.confirm('Você deseja realmente limpar?')) {
          axios.put(`${props.baseURL}/clear`, body)
         .then(() => {
          setMatches([])
        }).catch((err) => {
            console.log(err)
        })}
    }

            return (
            <MatPadre>
            <MatchesX>    
           
            {matches.length === 0 ? <div/> :
             matches.map((match) => {
             return(
            <ExMatch key={match.id}>
            <Imgenes src={match.photo} />
            <span><strong>{match.name},</strong> {match.age} anos.</span>
            </ExMatch>
            )
            }) }
            </MatchesX>
            <Buttonclea onClick={clearMatches}>Limpar swipes e matches</Buttonclea>
           </MatPadre>
        )
        }
