import axios from 'axios';

//base Url 
const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const main = async () => {

    try {
        console.log('Criando una noticia');
        await axios.put(`${baseUrl}/news`, {
            title: "DEMOSTRANDO ASYNC E AWAY [2]",
            content: "Refatorando o codigo!",
            date: 1589818936000
        }); 
        console.log('Ja criei a noticia');
    
        console.log('Vou pegar os assinantes');
        const allSubscribers = await axios.get(`${baseUrl}/subscribers/all`,)
        console.log('Ja peguei todos os assinantes');
        const subscribers = allSubscribers.data; 
    
      for (const subscriber of subscribers) {
          await axios.post( `${baseUrl}/notifications/send`, {
            subscriberId: subscriber.Id,
            message: "Veja a noticia 'Asinc Awayt [2]'"  
        });
        console.log('Terminei de envias as notificacao para o assinante: ', subscriber.name)
      }
    console.log('terminei tudo')
    }catch (e){
        console.log(e.response.data)
    }
 
};

main(); 

/*
*a. Qual endpoint você deve utilizar para isso?*
subscribers/all

*b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?*

*c. Implemente uma função nomeada que faça o que foi pedido.**/