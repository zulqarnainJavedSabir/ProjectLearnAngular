import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';
@Injectable()
export class AuthService {
  AuthStatusChanged = new Subject<string>();
  constructor() { }
token: string;
  signupUser(email: string, password: string) {
firebase.auth().createUserWithEmailAndPassword(email, password)
.catch( error => console.log(error));
  }

signinUser(email: string, password: string) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then( response => {
    firebase.auth().currentUser.getToken().then(
     (token) =>  {this.token = token;
      this.AuthStatusChanged.next(firebase.auth().currentUser.email);
    }
    );
  })
  .catch( error => console.log(error));
}
getToken() {
  firebase.auth().currentUser.getToken().then(
    (token) =>  this.token = token
   );
  return this.token;
}
signOutUser() {
  firebase.auth().signOut().catch(
    (error) => console.log(error)
  );
  this.token = null;
  this.AuthStatusChanged.next(null);
}
isAuthenticated() {
  return this.token != null;
}
}

