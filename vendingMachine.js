/* 
write a function called vendingMachine
it should take 2 arguments:
– number for the amount of money entered
– number which refers to a snack you want to buy

It should return 
"You -snack- has been served", instead of a -snack- it should output 
a name of selected snack

If selected snack is not available in the vending machine it should return
"Sorry, selected snack is not available" .  

If selected snack is more expensive than the money amount given it should return
"Sorry, you have to insert more coins"

This is the content of our vending machine:
1. Espresso, cost: 1€
2. Cappuccino, cost: 2,50€
3. Chocolate bar, cost 2€
4. Potato chips, cost 3,50€
*/

const snacks = [
    [1, 1],
    [2, 2.50],
    [3, 2],
    [4, 3.50]
]
const snackName = ["Espresso", "Cappuccino", "Chocolate bar", "Potato chips"]

function vendingMachine(snack, money){
    for (var i = 0; i < snacks.length; i++) {
        if (snack == snacks[i][0]){
            if (money >= snacks[i][1]) {return "Your " + snackName[i] + " has been served";}
            else {return "Sorry, you have to insert more coins";}
        }
    }
    return "Sorry, selected snack is not avalible"
}

console.log(vendingMachine(1,1));
console.log(vendingMachine(2,2));
console.log(vendingMachine(2, 3.50));
console.log(vendingMachine(5,6));

