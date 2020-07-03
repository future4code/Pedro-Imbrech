import React from 'react';
import styled from 'styled-components';


const Div01= styled.div`
border:3px solid;
width:500px;
height:500px;
background:chocolate;
border-radius:6px;
`


export class Reproducir extends React.Component{

    render(){
        return(



            <Div01>
         
            <input placeholder="Nome" type="text"/>
             <button>Criar Playlist</button>
            </Div01>
        )
    }



}
export default Reproducir;