import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void{

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAxkMWMARjn_CPF4PKTIpptbv1CPQ4Yh04",
      authDomain: "projeto-instagram-clone.firebaseapp.com",
      databaseURL: "https://projeto-instagram-clone.firebaseio.com",
      projectId: "projeto-instagram-clone",
      storageBucket: "",
      messagingSenderId: "595905023713"
    };
    firebase.initializeApp(config);
  }
  
}
