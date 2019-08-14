// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age:    userAge,
    location:   'Philadelphia',
}

console.log(user)

// Object destructuring

const product = {
    label:  'Red notebook',
    price:  3,
    stock:  201,
    salePrice:  undefined,
}

// One way
// const label = product.label
// const stock = product.stock

// Destructured shorthand syntax

let {label:productLabel, stock} = product
console.log(productLabel)
console.log(stock)

// NOTE this creates new variables, so doing:
stock++
// Will not affect the stock inside the object.

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)