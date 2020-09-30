import { Character } from "../src/Character";
import { performAttack } from "../src/performAttack";


describe (" perform Attack", () => { 


    test("Should perform attack", () => {


try {
      const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Scorpionn",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock as any);
} catch (error) {
    
        expect(error.defender.life).toEqual(1300);
        expect(error.validatorMock).toHaveBeenCalled();
        expect(error.validatorMock).toHaveBeenCalledTimes(2);
        expect(error.validatorMock).toHaveReturnedTimes(2);
}

             
      });


      test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
          name: "Scorpion",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
          performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
          expect(err.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });

});