import { Product, Products } from './../../types';
import { ProductsService } from './../services/products.service';
import { Component } from '@angular/core';
import { ProductComponent } from '../component/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private ProductsService: ProductsService) {}

  products: Product[] = [];
  onProductOutput(product: Product){
  console.log(product, 'Output');

  }
  totalRecords: number = 0;
rows: number = 5
  // for paginator
  onPageChange(event: any){
    this.fetchProducts(event.page, event.rows)

  }


  fetchProducts(page: number, perPage: number){
    this.ProductsService.getProducts('http://localhost:3000/clothes', {
      page: 0,
      perPage: 5,
    }).subscribe((products: Products) => {
      this.products = products.items;
      this.totalRecords = products.total;
    });

  }


  ngOnInit() {
    this.fetchProducts(0, this.rows)
  }
}
