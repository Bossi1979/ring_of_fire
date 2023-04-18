import { Component, Input, OnChanges, OnInit } from '@angular/core';
// import { Game } from 'src/models/game';
// import { GameComponent } from '../game/game.component';
@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit, OnChanges  {
  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start to drinking at the same time. As soon as player 1 stops drinking, player' },
    { title: 'You', description: 'The player who drew the card picks someone to drink.' },
    { title: 'Me', description: 'The player who drew the card drinks.' },
    { title: 'Female', description: 'All those who identify as female drink.' },
    { title: 'Thumbmaster', description: 'The player who drew the card must put their thumb on the table at a chosen time (before the next five gets picked though, or they lose the right). The last person to put their thumb on the table must drink. In Perfect Match, Francesca says five is jive, where the player has to do a dance move, which is a fun variation too.' },
    { title: 'Male', description: 'All those who identify as male drink.' },
    { title: 'Heaven', description: 'The player who drew the card must point to the sky (at any chosen time before the next 7 is drawn). The last person who points to the sky must drink.' },
    { title: 'Mate', description: 'The player who drew the card picks a drinking mate, who must drink every time they drink. As a secondary rule, you can decide whether that means you always have to drink when they drink, too.' },
    { title: 'Rhyme', description: 'the player who drew the card says a word, and you go around the circle rhyming with that word until someone messes up, and has to drink.' },
    { title: 'Categories', description: 'the player who drew the card thinks of a category (e.g. dogs, cars, types of alcohol), and you go around the circle naming words in that category until someone messes up, and has to drink.' },
    { title: 'Jack', description: "Make a rule. The player who drew the card makes a new rule (e.g. you can't say the word 'yes' or you can't put your drink down) and anyone who breaks the rule at any time throughout the rest of the game has to drink." },
    { title: 'Queen', description: 'Question master. You become the question master, and if anybody answers a question asked by you (the player who drew the card), they have to drink. This applies to ANY question.' },
    { title: 'King', description: 'the player who drew the card must pour some of their drink into the cup in the middle. The person to draw the last King has to drink whatever is in the cup in the middle.' },
  ];

  startDialog = [
    {
      title: 'Add Player',
      description: 'Please add a player.',
    },
    {
      title: 'Add Player',
      description: 'Please add a second player.',
    },
    {
      title: 'Pick Card',
      description: 'Please pick a card or add next Player.',
    },
  ];

  

  title = '';
  description = '';
  @Input() card;
  @Input() ply;
  @Input() gameEnd;
  @Input() plyCards;
  
  
  // game: Game;
  // game;


  constructor() {
    // this.game = game;
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.cardDraw()) this.cardDrawText();
    if(this.playerAmountNotGreaterOne()) this.playerAmountText();
    if(this.roundEnds())this.roundEndsText();
  }

  roundEnds(){
    return this.gameEnd && this.plyCards.length == 52;
  }

  roundEndsText(){
    this.title = 'Round Over1';
    this.description = 'All cards are played. Click on stack to start a new round.';
  }

  playerAmountNotGreaterOne(){
    return this.ply && this.ply.length < 3 && this.card == '';
  }

  playerAmountText(){
    let index = this.ply.length;
    this.title = this.startDialog[index].title;
    this.description = this.startDialog[index].description;
  }

  cardDraw(){
    return this.card && this.plyCards.length < 52;
  }

  cardDrawText(){
    let cardNumber = +this.card.split('_')[1].split('.')[0];
    this.title = this.cardAction[cardNumber - 1].title;
    this.description = this.cardAction[cardNumber - 1].description;
  }

}
