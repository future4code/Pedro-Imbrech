import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const HomePage = () => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/sobre/portugues");
  };

  const goToApplicationFormPage = () => {
    history.push("/sobredia/español");
  };


  return (
    <div>
      <p>Home</p>

      <p>ir a login</p>
      <button onClick={goToLoginPage}>Ir para página de sobre</button>

      <hr/>

      <p>Cadastro</p>
      <button onClick={goToApplicationFormPage}>Ir para página de cadastro</button>


    </div>
  );
};

export default HomePage;
