import { Product, Products } from './../../types';
import { ProductsService } from './../services/products.service';
import { Component } from '@angular/core';
import { ProductComponent } from '../component/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private ProductsService: ProductsService) {}

  products: Product[] = [];

  ngOnInit() {
    this.ProductsService.getProducts('http://localhost:3000/clothes', {
      page: 0,
      perPage: 5,
    }).subscribe((products: Products) => {
      this.products = products.items;
    });
  }
}
