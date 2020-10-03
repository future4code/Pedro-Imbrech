

/*export class addShow{

    public async addShows(req: Request, res: Response){

        try{

            const token = req.headers.authorization!;

            const authenticator = new Authenticator();
            const verifiedToken = authenticator.getData(token);

            const input: addtInputDTO = new addShowtInputDTO();

            const postBusiness = new addshowBusiness();
            await postBusiness.createPost(input);

            res.send({message: "Post created succesfully"}).status(200);

        }catch(error){
            res.status(400).send({error: error.message});
        }

    }*/