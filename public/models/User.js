// Initializing a class definition
class User {
    // constructor
    constructor(username, score) {
        this.username = username;
        this.score = score;
    }

    // retrieve username
    getUsername() {
        return `${this.username}`;
    }

    // retrieve the score
    getScore() {
        return `${this.score}`;
    }

    // set the username
    setUsername(username) {
        this.username = username;
    }

    // set the score
    setScore(score) {
        this.score = score;
    }
}

