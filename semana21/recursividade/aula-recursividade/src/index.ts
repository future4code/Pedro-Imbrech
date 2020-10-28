// ----------------- Fatorial

// Fatorial recursivo => n! = n * (n-1)!
// Condição de parada => 0! = 1

// const factorial = (n: number): number => {
//     if (n <= 0) {
//         return 1
//     }
//     return n * factorial(n-1)
// }

// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))
// console.log(factorial(-1))

// ----------------- Fibonacci

// Fibonacci Recursivo => fib(n) = fib(n - 1) + fib(n - 2)
// fib(1) = 1, fib(2) = 1

// const fibonacci = (n: number): number => {
//     if (n <= 2) {
//         return 1
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))

// ----------------- Imprimir caracteres recursivo

// const printCharacters = (s: string, index: number = 0): void => {
//     if (index === s.length) {
//         return
//     }
//     printCharacters(s, index + 1)
//     console.log(s[index])
// }

// printCharacters("arroz")

// ----------------- Imprimir caracteres iterativo

// const printCharactersIterative = (s: string): void => {
//     for(let i = 0; i < s.length; i++) {
//         console.log(s[i]);
//     }
// }

// printCharacters("feijao")