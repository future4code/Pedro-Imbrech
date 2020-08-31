import fs from 'fs';

export class FileManager{

    private fileName: string

    constructor(fileName: string){
        this.fileName=fileName
    }

    public writeInJson(data: any): void{
    const dataAsString: string= JSON.stringify(data, null, 2)
    fs.writeFileSync(this.fileName, dataAsString)
    }

    //vamos a leer o arquivo porq queremos adicionar mais informacoes

    public readFromJson(): any{
//metodo para escreber arquivo eno aconteca un erro
        try{
            const musicFromJson = fs.readFileSync(this.fileName).toString();
            return JSON.parse(musicFromJson)
        }catch(e){
            console.log(e);
            return[]
         }
    }








}