import React from 'react';
import './App.css';
import Post from './components/Post/Post';



class App extends React.Component {

    state = {

        postDaPessoa: [

            {
                nomeUsuario: 'future4.br',
                fotoUsuario: 'https://picsum.photos/50/50',
                fotoPost: 'https://picsum.photos/200/150'
            },
            {
                nomeUsuario: 'future4.br',
                fotoUsuario: 'https://picsum.photos/50/50',
                fotoPost: 'https://picsum.photos/200/150'
            },
            {
                nomeUsuario: 'future4.br',
                fotoUsuario: 'https://picsum.photos/50/50',
                fotoPost: 'https://picsum.photos/200/150'
            }

        ],

        valorImputNomeUsuairio: '',
        valorImputFotoUsario: '',
        valorImputFotoPost: ''

    }

    adicionaPost = () => {
        const novoPostDaPessoa = {
            nomeUsuario: this.state.valorImputFotoUsario,
            fotoUsuario: this.state.valorImputFotoUsario,
            fotoPost: this.state.valorImputFotoPost

        }

        const novoPost = [...this.state.postDaPessoa, novoPostDaPessoa]

        this.setState({ postDaPessoa: novoPost })
    }


    onChangeImputNomeUsuario = event => {
        this.setState({ valorImputFotoUsario: event.target.value })
    }

    onChangeImputFotoUsuario = event => {
        this.setState({ valorImputFotoUsuario: event.target.value })
    }

    onChangeImputFotoPost = event => {
        this.setState({ valorImputFotoPost: event.target.value })
    }

    render() {

        const postAtualizado = this.state.postDaPessoa.map((dado) => {
            return ( <
                Post nomeUsuario = { dado.nomeUsuario }
                fotoUsuario = { dado.fotoUsuario }
                fotoPost = { dado.fotoPost }
                />
            )
        })


        return ( <
            div className = { 'app-container' } >
            <
            div >

            <
            input value = { this.state.valorImputNomeUsuairio }
            onChange = { this.onChangeImputNomeUsuario }
            placeholder = { "Nome de usuario" }
            />  <
            input value = { this.state.valorImputFotoUsario }
            onChange = { this.onChangeImputFotoUsuario }
            />  <
            input value = { this.state.valorImputFotoPost }
            onChange = { this.onChangeImputFotoPost }
            /> <
            div > { postAtualizado } < /div> <
            /div>    <
            /div>      
        )
    }
}



export default App;