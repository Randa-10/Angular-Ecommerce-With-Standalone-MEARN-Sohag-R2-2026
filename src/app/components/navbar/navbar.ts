import { Component, signal } from '@angular/core';
import { ImgSyle } from '../../directives/img-syle';
import { RouterModule } from '@angular/router';
import { ProductStatic } from '../../services/product-static';
import { UserAuth } from '../../services/user-auth';

@Component({
  selector: 'app-navbar',
  imports: [ImgSyle, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isUserLogged=signal<boolean>(false)
  constructor(
    private prdservic: ProductStatic,
    private Auth: UserAuth,
  ) {
    // this.isUserLogged=this.Auth.isUserLogged
//     this.Auth.methodSubject().subscribe((data) => {
//       // this.isUserLogged = data;
// // this.isUserLogged.set()
//     });
    this.isUserLogged=this.Auth.methodSubject()
  
  }
}
