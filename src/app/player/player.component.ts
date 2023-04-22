import { Component, Input } from '@angular/core';
// import { EditProfilComponent } from '../edit-profil/edit-profil.component';
// import { GlobalService } from '../global.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  // providers: [GlobalService]
})
export class PlayerComponent {
  @Input() name;
  @Input() playerActive = false;
  @Input() imgProfile;

  @Input() imgP;
  

  constructor() {
    
  }
  

}
