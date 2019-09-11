setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     const data = {
//         latitude:   0,
//         longitude:  0,
//     }

//     return data
// }

// const data = geocode('Philadelphia')
// console.log(data)

/* 
A call-back function is nothing other than a function that
is provided as an argument to another function.
*/

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})