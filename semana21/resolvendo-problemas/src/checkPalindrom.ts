// ana -> true
// turing -> false
// A dama admirou o rim da amada -> true

const checkPalindrom = (input: string): boolean => {
    input = input.toLowerCase()

    for (let i = 0;  i < input.length; i++) {
        input = input.replace(" ", "")
    }

    let reversedString = ""
    for (let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i] // reversedString = reversedString + input[i]
    }

    console.log(reversedString)

    return input === reversedString
}

console.log(checkPalindrom("turing")) // false
console.log(checkPalindrom("ana")) // true
console.log(checkPalindrom("bob")) // true
console.log(checkPalindrom("A dama admirou o rim da amada")) // true