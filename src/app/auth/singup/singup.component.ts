import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private authService: AuthService) { }
  ngOnInit() {
  }
  onSignUp(form: NgForm) {

const email: string =  form.value.email;
const password: string =  form.value.password;
if ( password.length > 5 ) {
   this.authService.signupUser(email.toLowerCase(), password);
} else {
  alert('password should be greater than 5 characters');
}

  }
}
