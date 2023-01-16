//class used for sockets to determine the game state for each game

class GameState {
    constructor(category, difficulty, host, roomName, questions){
        this.roomName = roomName;
        this.category = category;
        this.difficulty= difficulty;
        this.host = host;
        this.users = [
            {
                userId: 0,
                name: host,
                score: 0,
                quizisCompleted: false,
                winner: false
            }
        ]
        this.questionNumber = 1;
        this.questions = questions;
        this.hasGameStated = false;
    }


}

module.exports = { GameState } 