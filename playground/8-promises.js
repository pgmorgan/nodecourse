const add = (a, b) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1, 2).then((sum) => {
    console.log(sum)
}).catch((error) => {
    console.log(error)
})

// const doWork2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([1, 4, 7])
//         reject("This is my error!")
//     }, 2000)
// })

// doWork2.then((result) => {
//     console.log("Success!", result)
// }).catch((error) => {
//     console.log("Error!", error)
// })

// /*
// **  Once resolve() or reject() are called the promise is completed.
// */