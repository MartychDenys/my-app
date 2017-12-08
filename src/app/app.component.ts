import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
  loadFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDT0eRpChqnMsPk44bf64XvrF4BICziGzs",
      authDomain: "ng-recipe-book-6245c.firebaseapp.com"
    });
  }

  constructor(){}

  onNavigate(feature: string){
    this.loadFeature = feature;
  }

}
