import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  /**
   *
   */
  constructor(private auth: AuthService) {
      }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: '----Add----api---key',
      authDomain: '---Add---url------------'
    });

  }

}
