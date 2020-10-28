interface MovieCharacter {
    [index: string]: string | number | null
}

const character: MovieCharacter = {
    name: "Hermione Granger",
    movie: "Harry Potter e Pedra Filosofal",
    phrase: "É Leviosa, não Leviosáaaaaaaa"
}

character.age = 15

console.log(character)