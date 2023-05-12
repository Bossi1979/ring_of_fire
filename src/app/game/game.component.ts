import { Component, OnInit, inject } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { EditProfilComponent } from '../edit-profil/edit-profil.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game: Game = new Game();
  gameId: string = '';
  gameOver = false;
  disableEntry = false;
  imageProfileArray: string = '';
  profileSelected = false;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
    this.createFirestoreArray();
  }


  createFirestoreArray(){
    this.route.params.subscribe(params => {
      // console.log('params', params['id']);
      this.gameId = params['id'];
      this.firestore.collection('games').doc(this.gameId).valueChanges().subscribe((game: any) => {
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCard = game.playedCard;
          this.game.players = game.players;
          this.game.imgProfile = game.imgProfile;
          this.game.stack = game.stack;
          this.game.pickCardAnimation = game.pickCardAnimation;
          this.game.currentCard = game.currentCard;
        });
    });
  }

  newGame() {
    this.game = new Game();

  }

  takeCard() {
    if (this.enoughPlayersAndRoundNotEnds()) this.drawCard();
    if (this.blankCardDraw()) this.gameOver = true;
    if (this.stackClickedWithBlankCardDraw()) this.startNewRound();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);
    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0 && this.profileSelected){
        this.game.players.push(name);
        this.game.imgProfile.push(this.imageProfileArray);
      } 
      this.saveGame();
      this.imageProfileArray = '';
      this.profileSelected = false;
    });
  }

  openEditDialog(): void {
    const editProfilDialog = this.dialog.open(EditProfilComponent);
    editProfilDialog.afterClosed().subscribe(imgProfil1 => {
      if (imgProfil1 && imgProfil1.length > 0){
        this.imageProfileArray = imgProfil1;
        this.profileSelected = true;
      } 
    });
  }

  editPlayer(): void {
    // console.log('edit player');
  }

  saveGame() {
    this.firestore
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJSON())
  }

  enoughPlayersAndRoundNotEnds(){
    return !this.game.pickCardAnimation && this.game.players.length > 1 && !this.gameOver;
  }

  drawCard() {
    this.game.currentCard = this.game.stack.pop();
    this.game.pickCardAnimation = true;
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
    this.saveGame();
    setTimeout(() => {
      this.game.playedCard.push(this.game.currentCard);
      this.game.pickCardAnimation = false;
      this.saveGame();
    }, 1000);
  }

  blankCardDraw(){
    return this.game.playedCard.length == 52;
  }

  startNewRound(){
    this.game.playedCard = [];
    this.newGame();
    this.gameOver = false;
  }

  stackClickedWithBlankCardDraw(){
    return this.game.playedCard.length == 53;
  }  

}
