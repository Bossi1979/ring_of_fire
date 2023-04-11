import { Component } from '@angular/core';
import { inject } from '@angular/core';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // todos$: Observable<any>;
  // firestore: Firestore = inject(Firestore);
  // todos: any[] = [];
  // todoText:string = '';

  // constructor(firestore: Firestore) {
  //   const coll = collection(firestore, 'todos');
  //   this.todos$ = collectionData(coll);

  //   //diese Funkion ist nur eine Hilfsfunktion, diese wird nicht zwingend
  //   //benötigt, da man in der Vorschleife auch auf todos$ mit | async zugreifen kann.
  //   this.todos$.subscribe((newtodos)=> {
  //     console.log(newtodos);
  //     this.todos = newtodos;
  //   });
  // }
}
