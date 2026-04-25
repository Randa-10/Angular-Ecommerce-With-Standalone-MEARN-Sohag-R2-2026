import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { ImgSyle } from '../../directives/img-syle';
import { CommonModule } from '@angular/common';
import { DiscoutPipe } from '../../pipes/discout-pipe';
import { ProductStatic } from '../../services/product-static';
import { Router, RouterModule } from '@angular/router';
import { ProductsDynamic } from '../../services/products-dynamic';

@Component({
  selector: 'app-products',
  imports: [FormsModule, ImgSyle, CommonModule, DiscoutPipe, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  //propinterface

  productProp!: Iproduct[]; //non null assertion operator
  toggleProp: boolean = true;
  //Day3

  username: string = 'hoda';

  data: Date = new Date();

  //dependancy injection
  constructor(
    private prdStaticService: ProductStatic,
    private router: Router,
    private prdWithApi: ProductsDynamic,
    private cdr: ChangeDetectorRef,
  ) {
    // this.productProp=[{
    //         productId: 1,
    //         productName: 'Apple iPhone 15',
    //         productImgUrl:
    //           'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
    //         productQuantity: 20,
    //         productPrice: 200,
    //         categoryId: 1,
    //         productDetails:
    //           'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //       },
    //       {
    //         productId: 2,
    //         productName: 'Samsung Galaxy frontend ',
    //         productImgUrl:
    //           'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&wproductIdth=240',
    //         productQuantity: 20,
    //         productPrice: 200,
    //         categoryId: 2,
    //         productDetails:
    //           'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //       },
    //       {
    //         productId: 3,
    //         productName: 'Apple iPhone 13',
    //         productImgUrl:
    //           'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&wproductIdth=240',
    //         productQuantity: 0,
    //         productPrice: 200,
    //         categoryId: 1,
    //         productDetails:
    //           'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //       },
    //       {
    //         productId: 4,
    //         productName: 'Samsung Galaxy ',
    //         productImgUrl:
    //           'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&wproductIdth=240',
    //         productQuantity: 1,
    //         productPrice: 200,
    //         categoryId: 2,
    //         productDetails:
    //           'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //       },
    //       {
    //         productId: 5,
    //         productName: 'OPPO Reno 12F 5G ',
    //         productImgUrl:
    //           'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&wproductIdth=240',
    //         productQuantity: 20,
    //         productPrice: 200,
    //         categoryId: 2,
    //         productDetails:
    //           'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //       },
    //       {
    //         productId: 6,
    //         productName: 'iphone',
    //         productImgUrl:
    //           'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
    //         productQuantity: 20,
    //         productPrice: 200,
    //         categoryId: 2,
    //         productDetails:
    //           'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //       },
    //       {
    //         productId:7,
    //         productName: 'iphone',
    //         productImgUrl:
    //           'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&wproductIdth=240',
    //         productQuantity: 20,
    //         productPrice: 200,
    //         categoryId: 3,
    //         productDetails:
    //           'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //       },
    //       {
    //         productId: 8,
    //         productName: 'Reno 11F',
    //         productImgUrl:
    //           'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&wproductIdth=240',
    //         productQuantity: 20,
    //         productPrice: 200,
    //         categoryId: 1,
    //         productDetails:
    //           'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //       },
    //       {
    //         productId:9,
    //         productName: 'iphone',
    //         productImgUrl:
    //           'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
    //         productQuantity: 20,
    //         productPrice: 200,
    //         categoryId: 1,
    //         productDetails:
    //           'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //       }]

    console.log(this.productProp);
    //step4
    // this.productsAfterSearch=this.productProp
  }
  ngOnInit(): void {
    //  this.productProp=this.prdStaticService.getAllProduct() //[{},{}]
    //Day6
    // this.prdWithApi.getAllProduct().subscribe({
    //   next: (next) => {
    //     console.log(next);
    //   },

    //   error: () => {},
    //   complete: () => {},
    // });

    //Observer
    this.prdWithApi.getAllProduct().subscribe((data) => {
      console.log(data);

      this.productProp = data;

      this.productsAfterSearch = this.productProp;
      //zone js
      this.cdr.detectChanges();
    });
  }

  toggleMethod() {
    this.toggleProp = !this.toggleProp;
  }
  //Day3
  // filterProduct:string=''
  //set , get

  //step3
  productsAfterSearch: Iproduct[] = [];

  //step2
  //Day4
  //parent to child   filterProduct    @Input()
  @Input() set filterProduct(valuSet: string) {
    //as a function , html as aprop
    // console.log(valuSet);

    // console.log(this.doSearch(valuSet)
    // );

    // this.productsAfterSearch=this.doSearch(valuSet)
    //Day5
    // this.productsAfterSearch = this.prdStaticService.doSearch(valuSet);
    //Day6
    this.prdWithApi.getAllProduct().subscribe((data) => {
      this.productsAfterSearch = data.filter((prd: Iproduct) =>
        prd.productName.toLowerCase().includes(valuSet),
      );

      this.cdr.detectChanges();
    });
  }

  //step1
  // doSearch(value:string):Iproduct[]{
  //    value=value.toLowerCase()               //[{},{}]
  //   return   this.productProp.filter((prd:Iproduct)=>
  //   prd.productName.toLowerCase().includes(value))
  // }

  //child to parent  ==>   @OutPut()

  //1-create event
  @Output() prdEvent: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();

  AddToCartInChild(prd: Iproduct) {
    //2-fire event
    this.prdEvent.emit(prd);
  }
}
