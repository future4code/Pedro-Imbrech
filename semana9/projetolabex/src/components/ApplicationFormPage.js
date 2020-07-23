import React from 'react'
    import { useParams } from "react-router";

    const ApplicationFormPage = () => {
      const pathParams = useParams();
    return(
        <div>
       <p>tela de cadastro</p>
      <p>Linguagem selecionada: {pathParams.linguagem}</p>
        <h1>cadastro </h1>
        </div>
    )
}

export default ApplicationFormPage;
