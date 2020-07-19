import React from 'react'
import styled from 'styled-components'
import mostralike from '../Images/mostralike.png'

const Footerx = styled.div`
    
      border-radius: 19px;
background: #ffffff;
box-shadow: inset 11px 11px 22px #c7c7c7, 
            inset -11px -11px 22px #ffffff;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 90px;


`
const Footerbot = styled.button`
  background-color: ${props => props.backGroundColor};
    outline: none;
    cursor: pointer;
    width: 46px;
    height: 46px;
    justify-content: center;
    transform: 0.5s;
    opacity: 0.75;
    font-size: 20px;
    color: #FFF;
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.borderColor};
    border-radius: 50%;
  
    :hover{
        background:#c7c7c7;
        transform: scale(1.1);
        opacity: 5;
    }
`

export default function FooterxCardx (props) {
    return (
           <Footerx>
            {props.profile ? 
            <Footerbot backGroundColor="#403F37" borderColor="#403F37">X</Footerbot> :
            <Footerbot onClick={props.onClickReject} backGroundColor="#403F37" borderColor="#403F37">X</Footerbot>
            }
            {props.profile ? 
            <Footerbot backGroundColor="#00ff80" borderColor="#00ff80"><img src={mostralike} width="50px" height="50px" alt="mostra like"/></Footerbot> :
            <Footerbot onClick={props.onClickMatch} backGroundColor="#00ff80" borderColor="#00ff80"><img src={mostralike} width="50px" height="50px" alt="mostra like"/></Footerbot>
            }
           </Footerx>
    )
}
