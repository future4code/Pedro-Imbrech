import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";

export class BandaController {
    async deteailsbanda(req: Request, res: Response) {
        try {

            

          

            res.status(200).send();

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }


  
        async addshow(req: Request, res: Response) {
            try {
    
                
    
              
    
                res.status(200).send();
    
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
    
            await BaseDatabase.destroyConnection();
        }

        async allshow(req: Request, res: Response) {
            try {
    
                
    
              
    
                res.status(200).send();
    
            } catch (error) {
                res.status(400).send({ error: error.message });
            }
    
            await BaseDatabase.destroyConnection();
        }

   
 
}

