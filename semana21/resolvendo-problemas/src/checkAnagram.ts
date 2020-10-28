// roma, amor -> true
// pedra, perda -> true
// banana, ananab -> true
// roma, amora -> false

interface HashCountCharacters {
    [index: string]: number
}

const checkAnagram = (inputA: string, inputB: string): boolean => {
    if (inputA.length !== inputB.length) { // checa se tamanhos são diferentes
        return false
    }

    let hashTableA: HashCountCharacters = {}
    let hashTableB: HashCountCharacters = {}

    for (let char of inputA) {
        if (hashTableA[char]) {
            hashTableA[char] += 1
        } else {
            hashTableA[char] = 1
        }
    }

    for (let char of inputB) {
        if (hashTableB[char]) {
            hashTableB[char] += 1
        } else {
            hashTableB[char] = 1
        }
    }

    // console.log(hashTableA)
    // console.log(hashTableB)

    for (let key in hashTableA) {
        if (hashTableA[key] !== hashTableB[key]) {
            return false
        }
    }

    return true
}

console.log(checkAnagram("roma", "amor")) // true
console.log(checkAnagram("banana", "ananab")) // true
console.log(checkAnagram("roma", "amora")) // false