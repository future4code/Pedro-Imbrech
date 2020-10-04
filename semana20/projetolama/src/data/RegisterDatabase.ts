import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";


export class RegisterDatabase extends BaseDatabase {

  private static TABLE_NAME: string = "NOME_TABELA_BANDAS";

  public async createBanda(
    id: string,
    namebanda: string,
    generomusical: string,
    nomeresponsabel: string,
  
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id, 
          namebanda,
          generomusical,
          nomeresponsabel
      
        })
        .into(RegisterDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}
