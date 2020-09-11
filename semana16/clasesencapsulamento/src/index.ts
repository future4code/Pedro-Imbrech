import {FileManager} from "./FileManager";
import {itsMyLife} from "./Music";
import {iwan} from "./Music";

const fileManager: FileManager = new FileManager('music.json');
//fileManager.writeInJson(itsMyLife);
const musics = fileManager.readFromJson();
console.log(musics);


//musics.push('itsMyLife');
musics.push('iwan');

fileManager.writeInJson(musics);
//quero adicionar ese array e dar un push 


