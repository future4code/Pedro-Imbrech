//subitrair Data
import moment from 'moment';
const data1: moment.Moment= moment('10/10/2019', 'DD/MM/YYYY')
const data2: moment.Moment= moment('20/10/2019', 'DD/MM/YYYY')
const diff = data2.diff(data1, 'day');
console.log(diff)

//node  ./build/exercicio2.js



















