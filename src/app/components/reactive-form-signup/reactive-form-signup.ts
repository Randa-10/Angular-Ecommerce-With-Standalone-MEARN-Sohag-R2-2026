import { Component } from '@angular/core';
import { User } from '../../services/user';
import { Iuser } from '../../Models/iuser';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-signup',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-form-signup.html',
  styleUrl: './reactive-form-signup.css',
})
export class ReactiveFormSignup {

  // userProp:Iuser={} as Iuser

UserProp:FormGroup
    constructor(private userService:User , private FormBuilder:FormBuilder, ){
// this.UserProp=new FormGroup({
//   fname:new FormControl('',[Validators.required,Validators.minLength(3)]),
//   lname:new FormControl('',[Validators.required]),
//   email:new FormControl(''),
//   password:new FormControl('')
// })

this.UserProp=this.FormBuilder.group({
  fname:['',[Validators.required,Validators.minLength(3)]],
  lname:[''],
  email:[''],
  password:[''],
//   address:this.FormBuilder.group({
// street:[''],
//   })
// num:this.FormBuilder.array([])
})
    }

get fnameInput(){
  return this.UserProp.get('fname')
}


    AddNewUser(){
  //     let u:Iuser={
  //       fname:'ahmed'
  //     ,
  //   lname:'ali',
  // email:'email',
  // password:'password'
  // }

  this.userService.AddNewUser(this.UserProp.value).subscribe((data)=>{
    console.log(data)

  })

    }
}
