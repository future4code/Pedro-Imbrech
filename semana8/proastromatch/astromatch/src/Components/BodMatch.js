import React from 'react'
import styled from 'styled-components'

const BodyPadre = styled.div`
    background-image: url(${props => props.photo});
    background-size: cover;
    background-position: top;
    color: #000;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: #FFF;
    width: 90%;
    height: 100%;
    margin: 16px;
    display: flex;
    flex-direction: column-reverse;
    text-align: start;
    border-radius: 10px;

`

const Letter = styled.h1`
    margin: 0 16px;
    padding: 0;
`
const Xletter = styled.p`
    margin: 16px 16px;
    padding: 0;
    font-size: 2 rem;
    font-weight: bold;
`

export default function BodMatch (props) {
    const photo = props.photo
    return (
        <BodyPadre photo={photo}>
            <Xletter>{props.bio}</Xletter>
            {props.name && <Letter>{props.name}, {props.age}</Letter>}
        </BodyPadre>
    )
}
