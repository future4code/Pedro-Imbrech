import React from 'react';
import styled from 'styled-components'
import Reproducir from './components/Reproducir';
import { UserPlaylist } from './components/UserPlaylist';


const PositionRepro = styled.div`
display:flex;
justify-content: center;

`

class App extends React.Component{
  state = {
    currentPage: "signUp"
  };

  changePage = () => {
    if (this.state.currentPage === "signUp") {
      this.setState({ currentPage: "users" });
    } else {
      this.setState({ currentPage: "signUp" });
    }
  };

  render(){ 
  return (
   <div>
     <button onClick={this.changePage}>PlaylistS</button>   
        {this.state.currentPage === "signUp" ? <Reproducir /> : <UserPlaylist />}
   
  </div>
  );

  }
}

export default App;
