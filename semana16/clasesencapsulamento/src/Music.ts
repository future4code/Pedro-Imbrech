export class Music {

    private name: string;
    private artist: string;
    private album: string;
    private year: number;

constructor (name:string, artist:string, album:string, year:number){
    this.name=name;
    this.artist=artist;
    this.album=album;
    this.year=year;
}

public playMusic():void {
    console.log(`a musica ${this.name}, de ${this.artist}, esta tocando`)
 }
}

export const itsMyLife: Music = new Music ("It's my life", "Bon Jovi","Crush",2000);
//itsMyLife.playMusic();

//adicionar una nova musica a meu json 
export const iwan: Music = new Music ("I wan't it that", "backstreest boys", "Milleun", 1999);