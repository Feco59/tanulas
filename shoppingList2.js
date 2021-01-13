'use strict'
// Represent the following products with their prices

// Product	Amount
// Milk	1.07
// Rice	1.59
// Eggs	3.14
// Cheese	12.60
// Chicken Breasts	9.40
// Apples	2.31
// Tomato	2.58
// Potato	1.75
// Onion	1.10
const products = new Map()

products.set('Milk', 1.07)
products.set('Rice', 1.59)
products.set('Eggs', 3.14)
products.set('Cheese', 12.60)
products.set('Chicken Breasts', 9.40)
products.set('Apples', 2.31)
products.set('Tomato', 2.58)
products.set('Potato', 1.75)
products.set('Onion', 1.10)
 
// Represent Bob's shopping list
// Product	Amount
// Milk	3
// Rice	2
// Eggs	2
// Cheese	1
// Chicken Breasts	4
// Apples	1
// Tomato	2
// Potato	1
const bobList = new Map()

bobList.set('Milk',3)
bobList.set('Rice',2)
bobList.set('Eggs',2)
bobList.set('Cheese',1)
bobList.set('Chicken Breasts',4)
bobList.set('Apples',1)
bobList.set('Tomato',2)
bobList.set('Potato',1)

// Represent Alice's shopping list
// Product	Amount
// Rice	1
// Eggs	5
// Chicken Breasts	2
// Apples	1
// Tomato	10
const aliceList= new Map()

aliceList.set("Rice",1)
aliceList.set("Eggs",5)
aliceList.set("Chicken Breasts",2)
aliceList.set("Apples",1)
aliceList.set("Tomato",10)

// Create an application which solves the following problems.
// How much does Bob pay?
// How much does Alice pay?

const spendings = (person) =>{
    let total = 0;
    person.forEach((v,k) => {
        if(products.get(k)) {
            total += products.get(k) * v
        }
    })
    return total
}

// Who buys more Rice?
// Who buys more Potato?
const whoBuysMore = (product) => {
    return aliceList.get(product) > bobList.get(product) ? 'Alice':'Bob'
}

// Who buys more different products?
const moreDifferent = () =>{
    return aliceList.size > bobList.size ? 'Alice':'Bob'
}

// Who buys more products? (piece)
const morePieceProduct = () => {
    return [...aliceList.values()].reduce((acc,n) => acc + n) > [...bobList.values()].reduce((acc,n) => acc + n) ? 'Alice' : 'Bob'
}
