const dotenv = require("dotenv")
dotenv.config();

// Here we are exporting all the env variables that yhe project uses
module.exports = {
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL
}