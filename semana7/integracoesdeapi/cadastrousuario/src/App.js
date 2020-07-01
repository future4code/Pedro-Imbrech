import React from "react";
import styled from "styled-components";
import SignUpPage from "./components/SignUpPage";
import UsersListPage from "./components/UsersListPage";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export class App extends React.Component {
  state = {
    currentPage: "signUpPage"
  };

  changePage = () => {
    if (this.state.currentPage === "signUpPage") {
      this.setState({ currentPage: "usersListPage" });
    } else {
      this.setState({ currentPage: "signUpPage" });
    }
  };

  render() {
    const page =
      this.state.currentPage === "signUpPage" ? (
        <SignUpPage />
      ) : (
        <UsersListPage />
      );

    const buttonName =
      this.state.currentPage === "signUpPage"
        ? "Ir para lista"
        : "Ir para cadastro";

    return (
      <AppContainer>
        <button onClick={this.changePage}>{buttonName}</button>
        {page}
      </AppContainer>
    );
  }
}

export default App;
