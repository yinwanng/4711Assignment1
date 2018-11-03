// Initializing a class definition
class User {
    constructor(username, score) {
        this.username = username;
        this.score = score;
    }

    getUsername() {
        return `${this.username}`;
    }

    getScore() {
        return `${this.score}`;
    }

    setUsername(username) {
        this.username = username;
    }

    setScore(score) {
        this.score = score;
    }
}

