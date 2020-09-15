### *a. Explique o código acima com as suas palavras.*
Resposta: É uma estrutura para conectar com meu banco de dados.

### *b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*

CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);



### *c. Pela mesma justificativa do exercício anterior, crie uma classe para ser responsável pela comunicação do usuário com a tabela de usuários. Ela deve possuir um método que cria o usuário no banco; além disso, as variáveis necessárias para realizar as queries devem ser atributos dessa classe*

import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME: string = 'Users';

  public async createUser(id: string, name: string, email: string, password: string): Promise<void> {
    await this.getConnection()
    .insert({
      id,
      name, 
      email,
      password
    }).into(UserDatabase.TABLE_NAME)
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select('*')
      .from(UserDatabase.TABLE_NAME)
      .where({email})
      return result[0]
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select('*')
      .from(UserDatabase.TABLE_NAME)
      .where({id})
      return result[0]
  }
}


### *d. Crie um usuário utilizando somente a classe que você criou*

