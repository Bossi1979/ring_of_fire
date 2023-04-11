import { Component, OnInit, inject } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
// import { EditPlayerComponent } from '../edit-player/edit-player.component';

// import { Firestore, collectionData, collection, docData, doc, setDoc, DocumentData } from '@angular/fire/firestore';
// import { Observable, timeout } from 'rxjs';
import { timeout } from 'rxjs';

// import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/compat/firestore';



// import { EditPlayerComponent } from '../edit-player/edit-player.component';
// import { timeout } from 'rxjs';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  // firestoreF: Firestore = inject(Firestore);
  // items$: Observable<any[]>;

  pickCardAnimation = false;
  currentCard: string;
  game: Game = new Game();
  gameId: string = '';
  gameOver = false;
  disableEntry = false;

  firebaseData: any = {};



  constructor(private route: ActivatedRoute,  private firestore: AngularFirestore, public dialog: MatDialog) {
    // const aColl = collection(firestore, 'games');
    // this.items$ = collectionData(aColl);
    // console.log(this.items$);
    // this.items$.subscribe((newgame)=> {
    //   console.log(newgame);
    //   this.firebaseData = newgame;
    // });

    

  }

  ngOnInit(): void {
    this.newGame();

    this.route.params.subscribe(params => {
      console.log('params', params['id']);
      this.gameId = params['id'];
      this.firestore
      .collection('games')
      .doc(this.gameId)
      .valueChanges()
      .subscribe((game:any) =>{
        console.log('Game update', game)
        this.game.currentPlayer = game.currentPlayer;
        this.game.playedCard = game.playedCards;
        this.game.players = game.players;
        this.game.stack = game.stack;
    });
      
      
    });

    

  }

  newGame() {
    this.game = new Game();
    // this.firestore.collection('games').add({this.game.toJSON()});

    // this.updateDatabase();

  }


  // updateDatabase() {
  //   const coll = collection(this.firestoreF, 'games');
  //   setDoc(doc(coll), this.game.toJSON());
  // }

  // addDatabase() {
  //   const coll = collection(this.firestoreF, 'games');
  //   let gameInfo = addDoc(coll, this.game.toJSON());
  //   console.log('addInfo: ', (gameInfo));
  // }




  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCard.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) this.game.players.push(name);
    });
  }

  saveGame() {
    this.firestore
    .collection('games')
    .doc(this.gameId)
    .update(this.game.toJSON())
  }

}
