const { init } = require('../db/init');

class HighScore {
    constructor(name, category, difficulty, score){
        this.name = name;
        this.category = category;
        this.difficulty = difficulty;
        this.score = score;
    }

static all(){
    return new Promise (async (resolve, reject) => {
        try {
            const db = await init();
            const data = await db.collection('highscores').find().toArray();
            resolve(data)
        } catch (error) {
           console.log(error);
           reject("Could not get high scores") 
        }
    })

}

static create(scores) {
    return new Promise (async (resolve, reject) => 
    {
        try {
            const db = await init();
            const data = await db.collection('highscores').insertMany(scores);
            resolve("Scores added")
        }catch(error){
            reject(error);
        }
    })
}

static getByFilter (category, difficulty){
    return new Promise( async (resolve, reject) => {
        try{
            const db = await init();
            const data = await db.collection('highscores').find({ category: {$eq: category}}, {difficulty: {$eq: difficulty}}).toArray();
            const sortedData = data.sort((a,b) => Number(b.score) - Number(a.score));
                resolve(sortedData);
        }catch(error){
            reject(error);
        }
    })
}

static checkUser(username) {
    return new Promise (async (resolve, reject) => {
        try {
            const db = await init();
            const data = await db.collection("highscores").find({name: {$eq: username}}).toArray();
            const doesUserExist = data.length === 0 ? false: true;
            const message = doesUserExist ? "username taken" : "username does not exist"
        }
        catch (error){
            reject(error);
        }
    })
}


}

module.exports = HighScore;