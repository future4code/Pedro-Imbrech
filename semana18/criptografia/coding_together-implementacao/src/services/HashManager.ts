import * as bcrypt from 'bcryptjs'

export class HashManager{
    
    public async hash(
        plainText: string
    ): Promise<string>{
        const cost: number = Number(process.env.BCRYPT_COST)
        const salt: string = await bcrypt.genSalt(cost)
        const cypherText: string = await bcrypt.hash(plainText, salt)
        console.log(cypherText)
        return cypherText
    }

    public async compare(
        plainText: string, // bananinha
        cypherText: string //$2a$12$ud.m6nVThpy.J4VdDHh.kOiwAl0JcdD4afWWwk9FfS9CkS43gFATS
    ): Promise<boolean>{
        return await bcrypt.compare(plainText, cypherText)
    }
}