const doWork = async () => {
    throw new Error("Something went wrong")
    return "Peter"
}

doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log("Error: ", e)
})