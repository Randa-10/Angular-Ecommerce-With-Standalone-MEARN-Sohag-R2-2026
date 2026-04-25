import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

//class decorator  meta data
@Directive({
  selector: '[appImgSyle]',
})
export class ImgSyle implements OnInit ,OnChanges{

  //life cycle component  1constructor, 2-OnInit ,3-OnChanges  @Input(),@Output()

  //property decorator
@Input() color:string="red"
  constructor(public elem:ElementRef) {
    //1
    //document.getElementById().style
    //  this.elem.nativeElement.style.border="2px solid red"
  //  this.elem.nativeElement.style.border=`2px solid  ${this.color}`

  }
  ngOnChanges(): void {
    console.log("ngOnChanges")
    //3
   this.elem.nativeElement.style.border=`2px solid  ${this.color}`

  }
  ngOnInit(): void {
    console.log("ngOnInit")

    //2
  //  this.elem.nativeElement.style.border=`2px solid  ${this.color}`

  }

  //method decorator @HostListener('event')
 @HostListener('mouseover')    mouseOver(){
     this.elem.nativeElement.style.border="2px solid blue"
   }
     @HostListener('mouseout') mouseOut(){
    //  this.elem.nativeElement.style.border="2px solid red"
    this.elem.nativeElement.style.border=`2px solid  ${this.color}`

   }
}
