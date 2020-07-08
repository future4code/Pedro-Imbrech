import React from "react";
import styled from "styled-components";
import axios from "axios";

const axiosConfig={
headers:{
  Authorization: "nome-artista-genero"
 }
}


const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const DeleteButton = styled.span`
  color: red;
`;

class UsersListPage extends React.Component {
  state = {
    usersList: [

{
    nome:"pedro",
    email:"jdkjednkej@gmail.com"
}


    ]
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    

    axios
      .get(baseUrl, axiosConfig)
      .then(response => {
        this.setState({ usersList: response.data });
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  deleteUser = userId => {
    axios
      .delete(`${baseUrl}/${userId}`, axiosConfig)
      .then(() => {
        this.getAllUsers();
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <ul>
        {this.state.usersList.length === 0 && <div>Carregando...</div>}
        {this.state.usersList.map(user => {
          return (
            <li key={user.id}>
              {user.name}
              <DeleteButton
                onClick={() => {
                  this.deleteUser(user.id);
                }}
              >
                X
              </DeleteButton>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default UsersListPage;
