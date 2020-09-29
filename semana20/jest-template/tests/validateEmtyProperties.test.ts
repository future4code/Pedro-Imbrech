   interface User {
            name: string
            balance: number
        }
        
        function performPurchase(user: User, value: number): User | undefined {
            if(user.balance >= value) {
                return {
                    ...user,
                    balance: user.balance - value		
                }
            }
            return undefined

            
        }

        

describe("Testing validateEmtyProperties", ()=>{

    test("Testing balance greater than value -- Faça um teste com um usuário com o saldo maior do que o valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })

    

    test("Testing balance greater than value -- Faça um teste com um usuário com o saldo igual ao valor de compra", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })


    test("Testing balance greater than value  -- c*. Faça um teste com um usuário com o saldo menor do que o valor de compra*", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual(undefined)
    })



});