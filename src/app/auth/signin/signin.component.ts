import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }
  onSignIn(form: NgForm) {
    const email: string =  form.value.email;
    const password: string =  form.value.password;
    if ( password.length > 5 ) {
       this.authService.signinUser(email.toLowerCase(), password);
    } else {
      alert('password should be greater than 5 characters');
    }

}
  ngOnInit() {
  }

}
