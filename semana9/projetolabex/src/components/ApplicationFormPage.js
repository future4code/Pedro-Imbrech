import React, { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";




const Positionformtwo= styled.div`
justify-content:center;
display:flex;
padding:60px;
`

const Form= styled.form`
justify-content:center;
display:flex;
flex-direction:column;
width:300px;
height:500px;
border: 1px solid black;

`

const useForm = initialValues => {

  const [form, setForm] = useState(initialValues);


  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };


  
  return { form, onChange };
};

export default function ApplicationFormPage() {
  const pathParams = useParams();
  const { form, onChange } = useForm({
   
    primeiroNome: "",
    email: "",
    password: "",
  });

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const handleSave = event => {
    event.preventDefault();
    console.log("oi");
  };

  return (

    
    <Positionformtwo> 
    <Form onSubmit={handleSave}>
 
    <input
        name="primeiroNome"
        placeholder="Primeiro Nome"
        pattern={"[A-Za-z]{3,}"}
        title="O nome deve ter no mínimo 3 letras"
        value={form.primeiroNome}
        onChange={handleInputChange}
        required
      />
 
      <input
        name="email"
        placeholder="E-mail"
        type="email"
        value={form.email}
        onChange={handleInputChange}
        required
      />
   <br/>
   <br/>
      <input
        name="senha"
        placeholder="Senha"
        type="Password"
        
        value={form.Password}
        onChange={handleInputChange}
        required
      />
  <br/>
  <br/>

    
  <button>Salvar</button>

    </Form>
    </Positionformtwo>
   

  );
}