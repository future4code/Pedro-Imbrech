import { Character, validateCharacter } from "../src/Character";

describe(" testes unitarios da fincao character", ()=> {

test("Should return false for empty name", () => {
    expect.assertions(1)
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for forca 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });


  test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 0,
      defense: 0,
    });

    expect(result).toBe(false);
  });


  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });





});

