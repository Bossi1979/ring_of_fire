import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';
@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  constructor(private router: Router, private firestore: AngularFirestore){

  }

  newGame(){
    let game = new Game();
    this.firestore
    .collection('games')
    .add(game.toJSON())
    .then((gameId:any) =>{
      this.router.navigate(['/game/' + gameId.id]);
    });

  }

}
