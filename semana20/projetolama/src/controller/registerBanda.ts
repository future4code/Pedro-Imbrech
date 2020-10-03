/*
async registerBanda(req: Request, res: Response) {
    try {

        const input: UserInputDTO = {
            namemusic: req.body.namemusic,
            genero: req.body.genero,
            nomeabanda: req.body.nomebanda,
         
        }

        const userBusiness = new UserBusiness();
        const token = await userBusiness.createUser(input);

        res.status(200).send({ token });

    } catch (error) {
        res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
}*/