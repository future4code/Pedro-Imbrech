import React from 'react'
    import { useParams } from "react-router";

    const LoginPage = () => {
      const pathParams = useParams();
    return(
        <div>
       <p>Sobre</p>
      <p>Linguagem selecionada: {pathParams.linguagem}</p>
        <h1>//Para fazermos login como administrador (Hola soy a pagina Loginpage)   </h1>
        </div>
    )
}

export default LoginPage;
