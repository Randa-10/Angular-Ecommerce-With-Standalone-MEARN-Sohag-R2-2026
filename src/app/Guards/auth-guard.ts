import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const authGuard: CanActivateFn = (route, state) => {
  //v16 Gaurds class
  //v17 class inject==> function  inject
 let userAuth=inject(UserAuth)
 let router=inject(Router)

 if(userAuth.isUserLogged){
   return true;
 }else{
  alert('loginnnnnnnnnnnnnnnnnnnnnnn')
  router.navigate(['/'])
   return false;

 }
 
};
