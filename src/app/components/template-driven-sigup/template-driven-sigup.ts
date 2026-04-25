import { Component } from '@angular/core';
import { Iuser } from '../../Models/iuser';
import { User } from '../../services/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-sigup',
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven-sigup.html',
  styleUrl: './template-driven-sigup.css',
})
export class TemplateDrivenSigup {

  userProp:Iuser={} as Iuser

  constructor(private userService:User ){

  }
  AddNewUser(){
//     let u:Iuser={
//       fname:'ahmed'
//     ,
//   lname:'ali',
// email:'email',
// password:'password'
// }

this.userService.AddNewUser(this.userProp).subscribe((data)=>{
  console.log(data)
  
})

  }
}
