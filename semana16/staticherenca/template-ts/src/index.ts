//no ndex se costuman a intanciar as clases
import {User} from "./User"
import {Customer} from  "./Customer"

//Exercicio 1
const newUser: User = new User('1', 'astrodev@labenu.com.br', 'Astrodev', '12345');
console.log(newUser.getId());
console.log(newUser.getName());
console.log(newUser.getEmail());

// A) Nao e possivel imprimir a senha no terminal, pois se trata de atributo com o encapsulador
//private, que torna o atributo accesivel 

//B) Uma vez.

//Exercicio 2

const newCustomer: Customer= new Customer('2', 'jones@Labenu.com.br' , 'Joao', 'dsAbdC123', '156151615156')
//A) Uma vez
//B) Duas vezes, pois toda vez que chamamos o constructor da classe filha, chamamos tambem o contructor da classe pai.