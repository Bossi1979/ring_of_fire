import { Injectable } from '@angular/core';
import { PlayerComponent } from './player/player.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  playerImage: string;

  

  constructor() {
    
   }

  getInfo1(){
    return this.playerImage;
  }

  setImage(img){
    this.playerImage = img;
  }
}
