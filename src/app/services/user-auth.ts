import { Signals } from './../components/signals/signals';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuth {

//step1
// UserPopBehavSubj:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)

//Signals
userPropSignal=signal<boolean>(false)
  login(userName:string,pass:string){
 //call api  /login
 // res==>token
 let token='12333333333';
 localStorage.setItem('myToken',token)
 //step2
//  this.UserPopBehavSubj.next(true)
this.userPropSignal.set(true)
  }

  logout(){
 localStorage.removeItem('myToken')
  //step3
//  this.UserPopBehavSubj.next(false)
this.userPropSignal.set(false)


  }

get  isUserLogged():boolean{
return localStorage.getItem('myToken')?true:false
  }
//step4
  methodSubject(){
    // return this.UserPopBehavSubj.asObservable()
    return this.userPropSignal

  }
}
