const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID



const atlasUser = "root"
const atlasPassword = "root"
const clusterName = "cluster0"
const databaseName = "taskManager"

let connectionURL = "mongodb+srv://" + atlasUser + ":" + atlasPassword
connectionURL += "@" + clusterName + "-a6bbr.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!")
    }

    const db = client.db(databaseName)

    db.collection("tasks").updateMany({
        completed:  false,
    }, {
        $set: {
            completed:  true,
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection("users").deleteMany({
        name:   "Peter",
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection("users").updateOne({
    //     _id: new ObjectID("5d7a8c060e6d1034ea0d8916"),
    // }, {
    //     $set: {
    //         name:   "Mike",
    //     },
    //     $inc:   {
    //         age:    1,
    //     },
    // }).updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})
    

    // db.collection("tasks").insertMany([
    //     {
    //         description:    "Brush Gina",
    //         completed:      false,
    //     }, {
    //         description:    "Pick-up Gina from Stadium Road",
    //         completed:      true,
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log("Unable to insert users.")
    //         return
    //     }

    //     console.log(result.ops)
    // })
// })