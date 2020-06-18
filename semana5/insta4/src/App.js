import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
    render() {
        return ( <
            div className = { 'app-container' } >
            <
            div >
            <
            Post nomeUsuario = { 'future4.br' }
            fotoUsuario = { 'https://picsum.photos/40/40' }
            fotoPost = { 'https://picsum.photos/202/151' }
            /> <
            /div> <
            div >
            <
            Post nomeUsuario = { 'future4.br' }
            fotoUsuario = { 'https://picsum.photos/50/50' }
            fotoPost = { 'https://picsum.photos/200/150' }
            /> <
            /div> <
            div >
            <
            Post nomeUsuario = { 'future4.br' }
            fotoUsuario = { 'https://picsum.photos/20/20' }
            fotoPost = { 'https://picsum.photos/201/151' }
            /> <
            /div> <
            /div>
        );
    }
}



export default App;