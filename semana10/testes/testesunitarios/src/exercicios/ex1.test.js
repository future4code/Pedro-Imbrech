import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => {
  test("retorna true pra 1600", () => {
    const resultado = checaBissexto(1600);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 2000", () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 1996", () => {});

  test("retorna true pra 2008", () => {});

  test("retorna false pra 2007", () => {});
});



    describe("Checa bissexto", () => {
        test("retorna true pra 1996", () => {
          const resultado = checaBissexto(1996);
      
          expect(resultado).toEqual(true);
        });
      
        test("retorna true pra 2000", () => {
          const resultado = checaBissexto(2000);
      
          expect(resultado).toEqual(true);
        });
      
        test("retorna true pra 2004", () => {});
      
        test("retorna true pra 2008", () => {});
      
        test("retorna false pra 2012", () => {});

        test("retorna false pra 2012", () => {});

      });

