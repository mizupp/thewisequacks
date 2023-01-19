const { init } = require('../db/init');


class HighScore {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    static create(name, category, difficulty, score){
        return new Promise (async (resolve,reject) => {
            try {
                const db = await init();
                await db.collection('highscores').insertOne({name, score});
                let newHighScore = new HighScore(name, score);
                resolve(newHighScore);
            } catch (error){
                reject(error);
            }
        })
    }

    static all(){
        return new Promise (async (resolve,reject) => {
            try {
                const db = await init();
                const data = await db.collection('highscores').find().toArray();
                resolve(data);
            } catch (error){
                reject(error);
            }
        })
    }
}

module.exports = HighScore;
