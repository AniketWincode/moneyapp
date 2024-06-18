const express = require("express")
const bodyParser = require('body-parser')

const serverConfig = require('./config/serverConfig')
// const { connect } = require("mongoose")
const connectDB = require('./config/dbConfig')
const todo = require("./schema/userschema")


const app = express()

app.use(bodyParser.json()); // how to read json()
app.use(bodyParser.text()); // how to read text()
app.use(bodyParser.urlencoded()); // how to read urlencoded()


require("../src/routes/todoroutes")(app)

app.listen(serverConfig.PORT, async () => {
    // console.log(process.env.PORT)
    await connectDB();
    console.log(`Server started at port ${serverConfig.PORT}`);
    // console.log("New todo is created")
    // console.log(newTodo)
})



// localhost:3000 (socket address)

// ambedreb21
// enxm4Kb0p1sZmSqI
// mongodb+srv://ambedreb21:enxm4Kb0p1sZmSqI@cluster0.19jjzxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0        
