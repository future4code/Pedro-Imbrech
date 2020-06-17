import React from 'react';
import './App.css';
import { CardGrande } from "./components/CardGrande/CardGrande";
import { ImagemButton } from "./components/ImagemButton/ImagemButton";
import { CardPequeno } from "./components/CardPequeno/CardPequeno";

function App() {
    return ( <
        div className = "App" >

        <
        div className = "page-section-container" >
        <
        h2 > Dados pessoais < /h2> <
        CardGrande imagem = { "http://www.aescotilha.com.br/wp-content/uploads/2018/04/femme-au-beret-et-a-la-robe-quadrillee-pablo-picasso.jpg" }
        nome = { "Astrodev" }
        descricao = { "Olá, sou Pedro Imbrech. Eu sou um estudante do Labenu. Adoro programar, adoro ciência, no meu tempo livre costumo nadar e ler um bom livro." }
        />

        <
        ImagemButton imagem = { "http://www.aescotilha.com.br/wp-content/uploads/2018/04/femme-au-beret-et-a-la-robe-quadrillee-pablo-picasso.jpg" }
        texto = { "Ver mais" }

        />

        <
        /div>

        <
        div className = "bigcard-container1" >
        <
        CardPequeno email = { "Email: elprograregrgemador@gmail.com" }
        />

        <
        /div>

        <
        div className = "bigcard-container1" >
        <
        CardPequeno email = { "Endereco: Jardin Oceanico" }
        /> <
        /div>

        <
        div className = "page-section-container" >
        <
        h2 > Experiências profissionais < /h2> <
        CardGrande imagem = { "http://www.aescotilha.com.br/wp-content/uploads/2018/04/femme-au-beret-et-a-la-robe-quadrillee-pablo-picasso.jpg" }
        nome = { "Labenu" }
        descricao = { "Sou estudante e não tenho experiência na área de IT.!" }
        /> <
        div className = "bigcard-container1" >
        <
        CardPequeno email = { "Endereco: Jadin Oceanico" }
        /> <
        /div> <
        CardGrande imagem = { "http://www.aescotilha.com.br/wp-content/uploads/2018/04/femme-au-beret-et-a-la-robe-quadrillee-pablo-picasso.jpg" }
        nome = { "NASA" }
        descricao = { "Apontando defeitos." }
        /> <
        /div>

        <
        div className = "page-section-container" >
        <
        h2 > Minhas redes sociais < /h2> <
        ImagemButton imagem = { "http://www.aescotilha.com.br/wp-content/uploads/2018/04/femme-au-beret-et-a-la-robe-quadrillee-pablo-picasso.jpg" }
        texto = "Facebook" /
        >

        <
        ImagemButton imagem = { "http://www.aescotilha.com.br/wp-content/uploads/2018/04/femme-au-beret-et-a-la-robe-quadrillee-pablo-picasso.jpg" }
        texto = { "Twitter" }
        />         <
        /div> <
        /div>
    );
}

export default App;