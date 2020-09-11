import axios, { AxiosResponse } from 'axios';

//base Url 
const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

//Pegamos las requisiciones 

/*
axios.get( `${baseUrl}/subscribers/all`)
 .then((res :AxiosResponse ) => {
      console.log(res.data)
 });*/

// temos todos nossos asignantes         node ./build/primeraparte.js

////////////////////////////////////////////////////////////



//crear noticias  
// a diferenca e que tenho que pasar un body.
//si quito title me vai dar um error


////////////////////////////////////////////////////////////
/*
axios.put( `${baseUrl}/news`, {
    title: "Hamilton saiu do Frontend",
	content: "Para a alegria de muitos, e a tristeza de alguns, a turma Hamilton está, agora, no backend!",
	date: 1589818936000
})

.then((res :AxiosResponse ) => {
    console.log(res.data)
})
.catch((e) => {
    console.log(e.response.data)
});
*/
////////////////////////////////////////////////////////////

/*Agora, vamos fazer algo um pouco diferente. Nós vamos criar
uma notícia nova!
● O ponto aqui é que as regras da nossa aplicação exigem que:
sempre ao criar uma nova notícia, temos que enviar uma
notificação a todos os assinantes
● Atualmente, temos os endpoints:
○ Cria a notícia: PUT - /news
○ Pega todos os assinantes: GET - /subscribers/all
○ Manda a notificação para um usuário: POST -/notifications/send
○ Vamos ter que usar os 3*/

//pegar primeiro noticias depois asignates


//dentro de .then vou a fazer arequisisicion de buscar todos os asignantes 

/* podemos mandar una totificacion para cada usuario iterando o array y mandar
 uma notificacao para cada usuario de esse array, fazemos isso com um for*/

 axios.put( `${baseUrl}/news`, {
    title: "Hamilton saiu do Frontend",
	content: "Para a alegria de muitos, e a tristeza de alguns, a turma Hamilton está, agora, no backend!",
	date: 1589818936000
})

.then((res :AxiosResponse ) => {
    axios.get(`${baseUrl}/subscribers/all`,)
    .then((res :AxiosResponse )=> {
        const subscribers=res.data;
        for(const subscriber of subscribers ) {
            axios.post( `${baseUrl}/notifications/send`, {
                subscriberId: subscriber.Id,
                message: "Veja a noticia 'a turing saiu do frontend'"  
            }
            ).catch((e) => {
                console.log(e.response.data)

            })
        }
    })
    .catch((e) => {
        console.log(e.response.data)
    })
})
.catch((e) => {
    console.log(e.response.data)
});