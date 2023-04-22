import { Component, Input } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss'],
})
export class EditProfilComponent {
  imgProfil: string = '';
  profileArray: string[] = [
    "../../assets/img/businessman.png",
    "../../assets/img/male.png",
    "../../assets/img/woman.png",
    "../../assets/img/woman1.png"
  ];

  constructor(public editProfilDialog: MatDialogRef<EditProfilComponent>) {
  }


  closeProfiles(){
    this.editProfilDialog.close();
  
  }

  selectedProfile(index){
    this.imgProfil = this.profileArray[index];
    console.log(this.imgProfil);
    // this.closeProfiles();
  }
}
