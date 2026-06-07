

import { Component, signal } from '@angular/core';
import { form, FormField, required, email, minLength, submit } from '@angular/forms/signals';
import { Iuser } from '../../Models/iuser';
import { User } from '../../services/user';

@Component({
   selector: 'app-form-signals',
   imports: [FormField],
  templateUrl: './form-signals.html',
  styleUrl: './form-signals.css',
})
export class FormSignals {

  // 1. Define the signal model
  userModel = signal<Iuser>({
    fname: '',
    lname: '',
    email: '',
    password: ''
  });

  // 2. Create the form with validation schema
  userForm = form(this.userModel, (s) => {
    required(s.fname,     { message: 'First name is required' });
    minLength(s.fname, 3, { message: 'First name must be at least 3 characters' });

    required(s.lname,     { message: 'Last name is required' });
    minLength(s.lname, 3, { message: 'Last name must be at least 3 characters' });

    required(s.email,     { message: 'Email is required' });
    email(s.email,        { message: 'Enter a valid email address' });

    required(s.password,  { message: 'Password is required' });
  });

  constructor(private userService: User) {}

  AddNewUser(event: Event) {
    event.preventDefault();
    submit(this.userForm, {
      action: async () => {
        this.userService.AddNewUser(this.userModel()).subscribe((data) => {
          console.log(data);
        });
      }
    });
  }
}
