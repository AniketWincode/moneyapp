const mongoose = require('mongoose')
const serverConfig = require('./serverConfig')

/**
 * The below function helps us to connect to mongo
 */

async function connectDB() {
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log('Succesfully connected to the mango db server .....');
    } catch (error) {
        console.log('Not able to connect to the mangodb server');
        console.log(error);
    }
}

module.exports = connectDB;