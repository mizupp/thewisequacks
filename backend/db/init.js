require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;
const init = async () => {
    try {
        let client = await MongoClient.connect(uri);
        console.log('connected to database!', dbName);
        return client.db("QuacksDB");
    } catch (error){
        console.log(error);
    }
}

module.exports = { init };