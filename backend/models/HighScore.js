const { init } = require('../db/init');


class HighScore {
    constructor(name, category, difficulty, score){
        this.name = name;
        this.category = category;
        this.difficulty = difficulty;
        this.score = score;
    }

    static create(name, category, difficulty, score){
        return new Promise (async (resolve,reject) => {
            try {
                const db = await init();
                await db.collection('highscores').insertOne({name, category, difficulty, score});
                let newHighScore = new HighScore(name, category, difficulty, score);
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

    static getByCategoryAndDifficulty(cat, dif){
        return new Promise (async (resolve,reject) => {
            try {
                const db = await init();
                const data = await db.collection('highscores').find({ $and: [ {category: {$eq: cat}}, {difficulty: {$eq: dif}} ]}).toArray();
                const sortedData = data.sort((a,b) => Number(b.score) - Number(a.score));
                resolve(sortedData);
            } catch (error){
                reject(error);
            }
        })
    }

    static checkUsername(username){
        return new Promise (async (resolve,reject) => {
            try {
                const db = await init();
                const data = await db.collection('highscores').find({name: {$eq: username}}).toArray();
                const doesUserExist = data.length === 0 ? false : true;
                const message = doesUserExist ? 'username taken' : 'username does not exist'
                resolve(message);
            } catch (error){
                reject(error);
            }
        })
    }

}

module.exports = HighScore;