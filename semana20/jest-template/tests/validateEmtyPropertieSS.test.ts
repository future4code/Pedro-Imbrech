//Saida

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
  interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }



//datos de entrada

  enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
  enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
  interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
  interface Casino {
    name: string;
    location: LOCATION;
  }

export function verifyAge(casino: Casino, users: User[]): Result {
    
    const allowed: User[] = [];
    const unallowed: User[] = [];
  
  
    
    for (const user of users) {
      if (casino.location === LOCATION.EUA) {
        if (user.age >= 21) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
      } else if (casino.location === LOCATION.BRAZIL) {
        if (user.age >= 18) {
          allowed.push(user);
        } else {
          unallowed.push(user);
        }
        break;
      }
    }
  

    
    return {
      brazilians: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
      },
      americans: {
        allowed: allowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
        unallowed: unallowed
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
      },
    };
  }

  describe("Testing validateEmtyProperties -- Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil", ()=>{

    test("1 brazilian allowed", () => {
        const brazilian: User = {
          name: "Astrodev",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Astrodev"]);
      });


      test("1 american allowed -- Escreva um teste que receba um usuário americando que possa entrar em um estabelecimento no Brasil", () => {
        const brazilian: User = {
          name: "Astrodev",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.allowed).toEqual(["Astrodev"]);
      });

    
      test("No one allowed  --  Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.", () => {
        const brazilian: User = {
          name: "Astrodev BR",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
          name: "Astrodev EUA",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.unallowed).toEqual([
          "Astrodev EUA",
          "Astrodev EUA",
        ]);
      });

      test("2 american allowed and 2 brazilians unallowed  --  Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.", () => {
        const brazilian: User = {
          name: "Astrodev BR",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
          name: "Astrodev EUA",
          age: 21,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
      });


      test("1 brazilian allowed -- Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil. Verifique que o tamanho do array allowed da propriedade brasilians tenha tamanho menor do que 2 e maior do que 0.", () => {
        const brazilian: User = {
          name: "Astrodev",
          age: 19,
          nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
      });

      test("1 american allowed  -- Escreva um teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil.  Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho igual a 0", () => {
        const brazilian: User = {
          name: "Astrodev",
          age: 19,
          nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.unallowed.length).toBe(0);
      });

      
test("No one allowed  -- Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos. Verifique que os arrays unallowed possuam o nome de algum dos usuários que você criou", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);

    expect(result.brazilians.unallowed).toContain("Astrodev BR");
    expect(result.americans.unallowed).toContain("Astrodev EUA");
  });

  test("2 american allowed and 2 brazilians unallowed -- Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Verifique que o tamanho do array unallowed da propriedade brasilians tenha tamanho maior do que 1. Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho menor do que 1. Verifique que o tamanho do array allowed da propriedade americans tenha tamanho igual a 2", () => {
    const brazilian: User = {
      name: "Astrodev BR",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "Astrodev EUA",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian,
      american,
      american,
    ]);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  });

  })