import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ParentComponents } from './components/parent-components/parent-components';
import { Notfound } from './components/notfound/notfound';
import { ProductDetails } from './components/product-details/product-details';
import { TemplateDrivenSigup } from './components/template-driven-sigup/template-driven-sigup';

export const routes: Routes = [

//default route  http://localhost:4200/

{path:'',redirectTo:'home',pathMatch:'full'}, //http://localhost:4200/

{path:'home',component:Home,title:'home page'},
 //http://localhost:4200/home

 {path:'products-parent',component:ParentComponents,title:"product"},
 //http://localhost:4200/products-parent ,
 //dynamic route   /:anyname
 //step1
{path:'products-parent/:idFromUrl',component:ProductDetails},
{path:'sigup',component:TemplateDrivenSigup},
 //wild card route == not found
 {path:'**',component:Notfound}
];
