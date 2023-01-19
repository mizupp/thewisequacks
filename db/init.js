require('dotenv').config();
const { MongoClient } = require('mongodb');
// const uri = process.env.MONGODB_URI;
// const dbName = process.env.DB_NAME;
const uri = "mongodb+srv://mizupp:Mizna123@cluster0.4soxi1r.mongodb.net/";
const dbName = "QuackDB";
const init = async () => {
    try {
        let client = await MongoClient.connect(uri, {useUnifiedTopology: true})
        console.log('connected to database!');
        return client.db(dbName);
    } catch (error){
        console.log(error);
    }
}

module.exports = { init };