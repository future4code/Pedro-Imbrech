import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

    state = {

        Post: [

            {
                nomeUsuario: 'future4.br',
                fotoUsuario: 'https://picsum.photos/40/40',
                fotoPost: 'https://picsum.photos/200/150'
            },
            {
                nomeUsuario: 'future4.br',
                fotoUsuario: 'https://picsum.photos/50/50',
                fotoPost: 'https://picsum.photos/200/150'
            },
            {
                nomeUsuario: 'future4.br',
                fotoUsuario: 'https://picsum.photos/20/20',
                fotoPost: 'https://picsum.photos/200/150'
            }

        ]

    };


    render() {
        const listaDePost = this.state.Post.map((Post) => {
            return ( <
                div className = { 'app-container' } > { Post.nomeUsuario } - { Post.fotoUsuario } - { Post.fotoPost } <
                /div>
            )
        })


        return (

            <
            div > { listaDePost } <
            /div>

        );
    }
}



export default App;