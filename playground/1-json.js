const fs = require('fs')

const dataBuffer = fs.readFileSync('./1-json.json')
let dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Peter Morgan"
data.age = '29'

dataJSON = JSON.stringify(data)
fs.writeFileSync('./1-json.json', dataJSON)
console.log(dataJSON)