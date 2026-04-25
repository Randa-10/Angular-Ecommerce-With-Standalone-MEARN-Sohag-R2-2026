import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discout',
})
export class DiscoutPipe implements PipeTransform {
  transform(price:number,disc:number=20): number {
    let disccount=disc/100;
    let priceDiscunt=price*disccount;
    let priceAfterDisc=price-priceDiscunt
    return priceAfterDisc;
  }
}
