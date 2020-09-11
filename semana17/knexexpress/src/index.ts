import knex from 'knex'
import dotenv from 'dotenv'
import express, {Request, Response} from "express"



/***********************************************/
dotenv.config()
//console.log(

   // process.env.DB_PASSWORD
//)
/**configurar express*********************************************/

const app = express()
app.use(express.json())

/*******************configura knex****************************/

 const connection = knex({ // Estabelece conexão com o banco
 client: "mysql",
 connection: {
 host:process.env.DB_HOST,
 port:3306,
 user:process.env.DB_USER,
 password:process.env.DB_PASSWORD,
 database:process.env.DB_NAME
 }
})

/***********************************************/
// a este punto ja temos a conexion establecida com mysql 

async function createPokemonTable(): Promise<void>{
try{
    await connection.raw(`
    CREATE TABLE pokemons(
        id INT PRIMARY KEY,
        name VARCHAR (255) UNIQUE NOT NULL,
        type VARCHAR (255) NOT NULL

     );
    `)

        console.log('Sucesso!')
  }catch(error){
     console.log(error)
 }
}

//createPokemonTable()  //comento esta funcao para que no crie de novo a tabela de pokemon 

//O Query Builder é uma funcionalidade do Knex que tende a
//facilitar a criação das queries


async function createNewPokemonWithQueriBuilder(

    id: number,
    name:string,
    type:string

): Promise<void>{

   try{
       await connection
       .insert({
           id,
           name,
           type
    })
        .into("pokemons")
           

       console.log("pokemon novo sucesso!")
   }catch (error){
       console.log(error)
   }

}

//createNewPokemonWithQueriBuilder(150, "Mew", "psiquico")



// con esta funcao inserimos un novo pokemos oseja o conteudo da tabela 
async function createNewPokemon(

     newId: number,
     newName:string,
     newType:string

): Promise<void>{

    try{
        await connection.raw(`
            INSERT INTO pokemons (id, name, type)
         VALUES(
             ${newId},
            "${newName}",  
            "${newType}"
         )

            `)

        console.log("pokemon novo sucesso!")
    }catch (error){
        console.log(error)
    }

}

// createNewPokemon(1, "Bulbasour", "grama")  ya crie un novo pokemon por isso la comento
//createNewPokemon(2, "Charmander", "fogo") 
//createNewPokemon(3, "Ivis", "normal") 

// con esta funcao para buscar ver todo de uma tabela 


async function getAllPokemons(): Promise<any>{
    try{
 const result =await connection.raw(`
     SELECT * FROM pokemons
    `)
  
  console.log(result[0])
  return result [0]

    }catch (error) {
      console.log(error)
    }

}

//getAllPokemons()


//busca pokemones usando query builder

async function searchPokemons(name: string): Promise<any>{

    try{
     const result = await connection
        .select("*")
        .from("pokemons")
        .where("name","LIKE",`%${name}%`)

       console.log(result)

    } catch(error){
        console.log(error)
    }

}

//searchPokemons("a")

/****criando um endpoind de tipo get**************/

app.get("/pokemon", async function(req: Request, res:Response){

try{
    const result = await searchPokemons(req.query.name as string)

    res.status(200).send(result)
}catch (error){
    res.status(400).send({message: error.message})
}
})


//endpoint deleta pokemon 
app.delete("/pokemon/:id", async function(req: Request, res:Response){

    try{

        await connection.raw(`
            DELETE FROM pokemon
            WHERE id = ${Number(req.params.id)}
        `)
        const result = await searchPokemons(req.query.name as string)
    
        res.status(200).end()
    }catch (error){
        res.status(400).send({message: error.message})
    }
    })


app.listen(3000, ()=>{("servidor rodando na porta 3000")})


