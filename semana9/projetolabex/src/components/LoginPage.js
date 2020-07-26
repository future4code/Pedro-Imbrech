import React, { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import axios from "axios"
import { useHistory } from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import {Header} from '../components/Header'


const Buttonx=styled.button`
margin-bottom:20px;
border:none;
width:200px;
height:50px;
color:#444444;
border-radius: 50px;
background: black;
box-shadow:  5px 5px 10px #363636, 
             -5px -5px 10px #525252;     
`
const Position = styled.div`
width:100vw;
height:100vh;
background-color:#444444;
`

const Positionformtwo= styled.div`
 
justify-content:center;
display:flex;
padding:100px;
`

const Form= styled.form`
justify-content:center;
display:flex;
flex-direction:column;


`

const Inputuno = styled.input`
margin-bottom:20px;
border:none;
width:200px;
height:50px;
border-radius: 4px;
background: #444444;
box-shadow:  5px 5px 8px #2f2f2f, 
             -5px -5px 8px #595959;
`

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;  
   
  }
`



const baseUrl =
"https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-turing";

const useForm = initialValues => {

  const [form, setForm] = useState(initialValues);


  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };


  return { form, onChange };
};





export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

const onChangeEmail = (e) =>{

  setEmail(e.target.value)
}


const onChangePassword = (e) =>{

  setPassword(e.target.value)
}

//console.log(email, password)

const handleLogin = () => {

  const body ={
    email: email,
    password:password
  }


  axios
      .post(`${baseUrl}/login`, body)
      .then(response => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/trip");
      })
      .catch(err => {
        console.log(err.message);
      });
  };




  const pathParams = useParams();
  const { form, onChange } = useForm({
   
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
        name="email"
        placeholder="E-mail"
        type="email"
        value={email}
        value={form.email}
        onChange={onChangeEmail, handleInputChange}
        
        required
      />

    <Inputuno
        name="password"
        placeholder="Password"
        type="Password"
        value={password}
        value={form.Password}
        onChange={onChangePassword, handleInputChange}
      
        required
      />
   <br/>
   
 


  <Buttonx onClick={handleLogin}>Fazer Login</Buttonx>

    </Form>
    </Positionformtwo>
  </Position>
</React.Fragment>



  );
}


