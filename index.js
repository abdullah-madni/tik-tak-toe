var prompt = require('prompt-sync')();


class TikTakToe {

    constructor() {
        this.array = [];
        this.isGameOver = false;
        this.turn = 1;
        for (let i = 0; i < 9; i++) {
            this.array[i] = i;
        }
    }

    startGmae() {
        while (!this.isGameOver) {
            this.printGame();
            this.input();
            this.printGame();
            this.check();
            this.changeTurn();
        }
        if (this.isGameOver) {
            console.log(`player ${this.turn == 1 ? 2 : 1} win!`);
            console.log('Game Over');
            var x = prompt('would you like to replay Y/N : ');
            if (x == 'y' || x == 'Y') {
                this.isGameOver = false;
                this.turn = 1;
                for (let i = 0; i < 9; i++) {
                    this.array[i] = i;
                }
                this.startGmae();
            } else {
                process.exit();
            }
        }
    }

    printGame() {
        console.clear();
        console.log('Enter "q" to quite the game.');
        console.log('player 1 : ✓');
        console.log('player 2 : ⨉');
        console.log(`turn : ${this.turn == 1 ? 1 : 2}`);
        console.log();
        console.log(`${this.array[0]} | ${this.array[1]} | ${this.array[2]}`);
        console.log(`---------`);
        console.log(`${this.array[3]} | ${this.array[4]} | ${this.array[5]}`);
        console.log(`---------`);
        console.log(`${this.array[6]} | ${this.array[7]} | ${this.array[8]}`);
        console.log();
    }

    changeTurn() {
        this.turn == 1 ? this.turn = 2 : this.turn = 1;
    }

    input() {
        var isValid = false;
        var x = prompt('please enter a number : ');
        if (x == 'q') {
            process.exit();
        }
        while ((x > 8 || x < 0) || isNaN(x)) {
            x = prompt('please enter a valid number : ');
        }
        if (this.array[x] == '✓' || this.array[x] == '⨉') {
            x = prompt('Box is already used please, enter another number : ');
        } else {
            this.array[x] = this.turn == 1 ? '✓' : '⨉';
        }
    }

    check() {
        if (this.array[0] == this.array[1] && this.array[0] == this.array[2]) {
            this.isGameOver = true;
        }
        if (this.array[3] == this.array[4] && this.array[3] == this.array[5]) {
            this.isGameOver = true;
        }
        if (this.array[6] == this.array[7] && this.array[6] == this.array[8]) {
            this.isGameOver = true;
        }
        if (this.array[0] == this.array[3] && this.array[0] == this.array[6]) {
            this.isGameOver = true;
        }
        if (this.array[1] == this.array[4] && this.array[1] == this.array[7]) {
            this.isGameOver = true;
        }
        if (this.array[2] == this.array[5] && this.array[2] == this.array[8]) {
            this.isGameOver = true;
        }
        if (this.array[0] == this.array[4] && this.array[0] == this.array[8]) {
            this.isGameOver = true;
        }
        if (this.array[2] == this.array[4] && this.array[2] == this.array[6]) {
            this.isGameOver = true;
        }
    }

}

const game = new TikTakToe();
game.startGmae();