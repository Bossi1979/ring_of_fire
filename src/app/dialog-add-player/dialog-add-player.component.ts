import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Game } from 'src/models/game';


@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent{
  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>, 
    ) {
      // this.users = this.game.players;
      // console.log(this.users);
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
