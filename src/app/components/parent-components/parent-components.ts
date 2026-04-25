import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from '../products/products';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-parent-components',
  imports: [Products, FormsModule],
  templateUrl: './parent-components.html',
  styleUrl: './parent-components.css',
})
export class ParentComponents {

  searchInParent:string=''

  prdList:Iproduct[]=[]
  AddToCartInParent(prd:Iproduct){

    let obj=this.prdList.find((items:Iproduct)=>items.id==prd.id)
    if(obj){
      obj.productQuantity++
    }else{

      this.prdList.push({...prd,productQuantity:1})
    }

console.log(this.prdList)

  }
}
