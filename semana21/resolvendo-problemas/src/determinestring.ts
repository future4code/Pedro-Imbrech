function isOneEdit(stringA: string, strB: string): boolean {
    
if (Math.abs(strB.length - stringA.length) > 1) return false

if (stringA.length > strB.length) return stringA.includes(strB)
if (strB.length > stringA.length) return strB.includes(stringA)

let charsDiffCount = 0
for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] !== strB[i]) charsDiffCount++
}

return charsDiffCount === 1
}