import {
  Component,
  computed,
  inject,
  input,
  output,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';

import { ImgSyle } from '../../directives/img-syle';
import { DiscoutPipe } from '../../pipes/discout-pipe';

import { Iproduct } from '../../Models/iproduct';
import { ProductsDynamic } from '../../services/products-dynamic';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    ImgSyle,
    DiscoutPipe,
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  username = 'hoda';
  date = new Date();

  toggleProp = true;
  private prdWithApi = inject(ProductsDynamic);

  constructor(
    // private prdWithApi: ProductsDynamic,
    private router: Router
  ) {}

  // Angular Signal Input
  filterProduct = input<string>('');

  // Angular Signal Output
  prdEvent = output<Iproduct>();

  // Observable -> Signal
  products = toSignal(
    this.prdWithApi.getAllProduct(),
    {
      initialValue: [] as Iproduct[],
    }
  );

  // Computed Signal
  filteredProducts = computed(() => {
    const searchValue = this.filterProduct()
      .toLowerCase()
      .trim();

    const products = this.products();

    if (!searchValue) {
      return products;
    }

    return products.filter((prd) =>
      prd.productName
        .toLowerCase()
        .includes(searchValue)
    );
  });

  toggleMethod() {
    this.toggleProp = !this.toggleProp;
  }

  addToCart(prd: Iproduct) {
    this.prdEvent.emit(prd);
  }

  goToDetails(id: number) {
    this.router.navigate(['/products', id]);
  }
}