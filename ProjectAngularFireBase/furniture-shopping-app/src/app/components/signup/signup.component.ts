import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @ViewChild('signInForm', { static: false })
  signInForm!: NgForm;
  name: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  address: string = '';
  signup(form: any) {
    console.log(form, 'my form');
  }
}
