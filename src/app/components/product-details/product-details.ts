import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductStatic } from '../../services/product-static';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
import { ProductsDynamic } from '../../services/products-dynamic';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  //step3==> get id from url
currentId:number=0
productData:Iproduct|undefined={} as Iproduct
// productData=signal<Iproduct|undefined>({} as Iproduct)
currenIndex:number=0
arrOfIds:number[]=[]
constructor(
  private active:ActivatedRoute,
  private  prdService:ProductStatic,
  private locate:Location,
  private router:Router,
  private PrdWithApi:ProductsDynamic,
  private cd:ChangeDetectorRef
){

//  this.currentId=Number(this.active.snapshot.paramMap.get('idFromUrl'))
//routing Observable .params.subscribe(next ,error,complete)
this.active.params.subscribe((x)=>{
  this.currentId=x['idFromUrl']
 console.log(this.currentId)
 //step4==> send id service
// this.productData=this.prdService.getProductById(this.currentId)
//Day6
this.PrdWithApi.getProductById(this.currentId).subscribe((data)=>{

  // this.productData.set(data)
  this.productData=data

  this.cd.detectChanges()
})
 console.log(this.prdService.getProductById(this.currentId))
})



 this.arrOfIds=this.prdService.getAllIds()
 console.log(this.arrOfIds)
 }

goPrev(){
//arr.indexof(value)
this.currenIndex=this.arrOfIds.indexOf(this.currentId)
 console.log(this.currenIndex)

// arr[1]
// arr[0]
this.router.navigate(['/products-parent/',this.arrOfIds[--this.currenIndex]])
}

goNext(){
this.currenIndex=this.arrOfIds.indexOf(this.currentId)
 console.log(this.currenIndex)

// arr[1]
// arr[0]
this.router.navigate(['/products-parent/',this.arrOfIds[++this.currenIndex]])
}


 goBack(){
this.locate.back()
 }

}
