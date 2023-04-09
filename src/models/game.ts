export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCard: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push(`assets/img/cards_img/ace_${i}.png`);
            this.stack.push(`assets/img/cards_img/clubs_${i}.png`);
            this.stack.push(`assets/img/cards_img/diamonds_${i}.png`);
            this.stack.push(`assets/img/cards_img/hearts_${i}.png`);
        }
        shuffle(this.stack);
    }

}




function shuffle(array) {
    let currentIndex = array.length, randomIndex: number;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}