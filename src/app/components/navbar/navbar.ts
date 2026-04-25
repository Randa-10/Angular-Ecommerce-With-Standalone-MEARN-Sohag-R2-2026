import { Component } from '@angular/core';
import { ImgSyle } from '../../directives/img-syle';
import { RouterModule } from '@angular/router';
import { ProductStatic } from '../../services/product-static';

@Component({
  selector: 'app-navbar',
  imports: [ImgSyle,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private prdservic:ProductStatic){

  }
}
