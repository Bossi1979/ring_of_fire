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
    "../../assets/img/woman1.png",
    "../../assets/img/penguin.png",
    "../../assets/img/panda.png",
    "../../assets/img/duck.png",
    "../../assets/img/lion.png",
    "../../assets/img/zebra.png",
    "../../assets/img/tiger.png",
    "../../assets/img/pug.png"
  ];

  constructor(public editProfilDialog: MatDialogRef<EditProfilComponent>) {
  }


  closeProfiles(){
    this.editProfilDialog.close();
  
  }

  selectedProfile(index){
    let i=0;
    this.imgProfil = this.profileArray[index];
    // console.log(this.imgProfil);
    // this.closeProfiles();
    for (let i = 0; i < this.profileArray.length; i++) {
      document.getElementById(`profil${i}`).classList.remove('img-selected');
    }
    document.getElementById(`profil${index}`).classList.add('img-selected');
  }
}
