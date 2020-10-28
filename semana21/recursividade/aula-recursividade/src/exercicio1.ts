//Escreva uma função recursiva que:
//a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente

//b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente

const printNumbers = (n: number) => {
    if (n >= 0) {
      printNumbers(n - 1);
      console.log(n);
    }
  };

  const printNumbersr = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbersr(n - 1);
    }
  };