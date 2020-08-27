const now: Date= new Date();
console.log(now);



console.log('Timestamp', now.getTime())//muestra en milisegundos desde 1970 hasta ahora 
console.log('Mes', now.getMonth()) //mes 

//gerando date com data predefinida

// pega o dia com um timestamp em MILISEGUNDOS
let date: Date = new Date(705266330000);
//console.log(date);

//pega o dia de hoje
date = new Date('197-10-19');
//console.log(date)

//// pega o dia de hoje
date = new Date(1987, 9, 19);
console.log(date);


const quedaConstantinopla: Date= new Date('1452-05-29');
console.log('Queda de Constantinopla', quedaConstantinopla.getTime())

const revolucaoFrancesa: Date= new Date(1979, 7, 17);
console.log('Queda Francia', revolucaoFrancesa.getTime())

const proclamacaoRepublicaBrasileira: Date= new Date(1889, 11, 15);
console.log('Queda de Brasil', proclamacaoRepublicaBrasileira.getTime())


import moment from 'moment';

const today: moment.Moment = moment();
moment.locale('pt-br')//para troca de idioma a portugues brasil
console.log(today)


//formatacao de horario
console.log('HORA Y FECHA BRASIL:' , today.utcOffset('-0500').format('DD/MM/YYYY HH:mm A')); // LA "A" RESTORNA SI ES PM O AM
console.log('Data formatada: ', today.format('DD/MM/YYY'))
console.log('Data formatada: ', today.format('DD MM [dd] YYYY'))
console.log('Data formatada: ', today.format('DD/MMMM/YYYY'))

//formatacao con texto
console.log('Data formatada: ', today.format('DD[th]/MM/YYYY HH:mm:ss'))

//datas antigas

const datee: moment.Moment = moment.unix(1595894400).utc();
console.log(datee )


//data antiga 
//let dateee= moment('19/10/1987', 'DD/MM/YYYY');

 //dateee= moment('19 de Octubro de 1987', 'DD [de] MMMM [de] YYYY');
//console.log(dateee.format('DD/MM/YYY'));  //resultado invalido minuti 1h.7

const date2: Date = new Date();
// 1 hora representada em milisegundos 

console.log(date2);

const hoursInMilissegundos = 60 * 60 * 1000;
//timestamp em milisegundos 
// le sume uuna hora a la siguiente hhora 
const timestamp: number= date2.getTime();
const date3: Date = new Date(hoursInMilissegundos+timestamp);
console.log(date3)

//1h:24