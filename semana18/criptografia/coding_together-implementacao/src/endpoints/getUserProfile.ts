import { Request, Response } from 'express'
import { BaseDatabase } from '../data/BaseDatabase';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator';

export const getUserProfile = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization as string;

        const authenticator = new Authenticator();
        const authenticationData = authenticator.getData(token);

        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserById(authenticationData.id)


        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        if (authenticationData.role !== "ADMIN") {
            throw new Error("Não autorizado")
        }

        res.status(200).send(user)

    } catch (e) {
        res.status(e.statusCode || 400).send({
            message: e.message
        })
    } finally {
        await BaseDatabase.destroyConnection()
    }

}