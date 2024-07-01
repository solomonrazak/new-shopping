import { Product, Products } from './../../types';
import { ProductsService } from './../services/products.service';
import { Component } from '@angular/core';
import { ProductComponent } from '../component/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private ProductsService: ProductsService) {}

  products: Product[] = [];
  onProductOutput(product: Product){
  console.log(product, 'Output');

  }
  ngOnInit() {
    this.ProductsService.getProducts('http://localhost:3000/clothes', {
      page: 0,
      perPage: 5,
    }).subscribe((products: Products) => {
      this.products = products.items;
    });
  }
}
