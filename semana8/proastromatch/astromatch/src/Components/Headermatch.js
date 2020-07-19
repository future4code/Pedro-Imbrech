import React from 'react'
import styled from 'styled-components'
import flaticon from '../Images/flaticon.png'

const HeaderPrimero1 = styled.div`
display: flex;
box-shadow:  11px 11px 22px #c7c7c7, 
             -11px -11px 22px #ffffff;
justify-content: space-between;
width: 100%;
padding-left: 30px;
border-bottom: 1px solid #E5E5E5;
box-sizing: border-box;
height: 70px;
`

const Headers = styled.span`
    letter-spacing:5px;
    color: ${props => props.color};
    opacity: 70%;
   
`

const Letterx = styled.h1`
    padding:0;
    padding-left:30px;
    margin: 10px auto;
`

const ButtonS = styled.button`
    margin: 10px 0;
    margin-right: 24px;
    border: none;
    border-radius: 21px;
    outline: none;
    cursor: pointer;

    :hover{
     
        transform: scale(1.1);
    
    }
   
`

export default function Headermatch (props) {
    return (
        <HeaderPrimero1 >
          <Letterx><Headers color="#403F37">ASTRO</Headers><Headers color="#CCCAAF">MATCH</Headers></Letterx>
         <ButtonS onClick={props.onClickRender}><img src={flaticon} height="40px" alt="Match Icon"/></ButtonS>
        </HeaderPrimero1>
    )
}
