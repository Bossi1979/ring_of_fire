import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { GameDescriptionComponent } from '../game-description/game-description.component';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent{
  name: string = '';
  
  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {}

  onNoClick(){
    this.dialogRef.close();
  }

}
