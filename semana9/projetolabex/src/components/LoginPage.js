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
`

const useForm = initialValues => {

  const [form, setForm] = useState(initialValues);


  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };


  
  return { form, onChange };
};


const baseUrl=
"https://us-central1-labenu-apis.cloudfunctions.net/labeX/pedro-turing";






















export default function LoginPage() {

const [email, setEmail]= useState("")
const [password, setPassword]= useState("")

const onChangeEmail = (e) =>{

  setEmail(e.target.value)
}


const onChangePassword = (e) =>{

  setPassword(e.target.value)
}

console.log(email, password)












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

    
    <Positionformtwo> 
    <Form onSubmit={handleSave}>
 

 
      <input
        name="email"
        placeholder="E-mail"
        type="email"
        value={email}
        value={form.email}
        onChange={onChangeEmail, handleInputChange}
        
        required
      />

    <input
        name="password"
        placeholder="Password"
        type="Password"
        value={password}
        value={form.Password}
        onChange={onChangePassword, handleInputChange}
      
        required
      />
   <br/>
   
 


  <button>Salvar</button>

    </Form>
    </Positionformtwo>
   

  );
}
