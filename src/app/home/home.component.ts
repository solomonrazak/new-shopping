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
  onProductOutput(product: Product) {
    console.log(product, 'Output');
  }
  totalRecords: number = 0;
  rows: number = 5;
  // for paginator
  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.ProductsService.getProducts('http://localhost:3000/clothes', {
      page: 0,
      perPage: 5,
    }).subscribe({
      next: (data) => {
        console.log(data); // for successful request
      },
      error: (error) => {
        console.log(error); // for error message
      },

    });
  }
  editProduct(product: Product, id: number) {
    this.ProductsService.editProduct(
      `http://localhost:3000/clothes/${id}`,
      product
    ).subscribe({
      next: (data) => {
        console.log(data); // for successful request
      },
      error: (error) => {
        console.log(error); // for error message
      },
    });
  }

  deleteProduct( id: number) {
    this.ProductsService.deleteProduct(
      `http://localhost:3000/clothes/${id}`
      
    ).subscribe({
      next: (data) => {
        console.log(data); // for successful request
      },
      error: (error) => {
        console.log(error); // for error message
      },
    });
  }

  addProduct(product: Product) {
    console.log(product, 'Add');
  }

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }
}
