import React, { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import {Header} from '../components/Header'


const GlobalStyle = createGlobalStyle`
  * {
    margin:0;  
  
  }
`

const Position = styled.div`
width:100vw;
height:100vh;
background-color:#444444;
`

const Inputuno = styled.input`
border:none;
width:200px;
height:50px;
border-radius: 4px;
background: #444444;
box-shadow:  5px 5px 8px #2f2f2f, 
             -5px -5px 8px #595959;
`

const Positionformtwo= styled.form`
justify-content:center;
display:flex;
margin-top:45px;

`

const Form= styled.form`
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
width:300px;
height:500px;

border-radius: 10px;
background: #444444;
box-shadow: inset 8px 8px 16px #3d3d3d, 
            inset -8px -8px 16px #4b4b4b;

`

const FortInttwo = styled.div`

width:200px;
height:400px;

`

const Buttonx=styled.button`

border:none;
width:200px;
height:50px;
color:#444444;
border-radius: 50px;
background: black;
box-shadow:  5px 5px 10px #363636, 
             -5px -5px 10px #525252;
     
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
<React.Fragment>
    <GlobalStyle/>
    <Position>
    <Header/> 
    <Positionformtwo> 
    <Form onSubmit={handleSave}>
 
    
    <Inputuno
        name="primeiroNome"
        placeholder="Primeiro Nome"
        pattern={"[A-Za-z]{3,}"}
        title="O nome deve ter no mínimo 3 letras"
        value={form.primeiroNome}
        onChange={handleInputChange}
        required
      />
   <br/>
   <br/>
      <Inputuno
        name="email"
        placeholder="E-mail"
        type="email"
        value={form.email}
        onChange={handleInputChange}
        required
      />
   <br/>
   <br/>
      <Inputuno
        name="senha"
        placeholder="Senha"
        type="Password"
        
        value={form.Password}
        onChange={handleInputChange}
        required
      />
  <br/>
  <br/>

    
  <Buttonx>Salvar</Buttonx>
 
    </Form>
    </Positionformtwo>
    </Position> 
  </React.Fragment> 

  );
}