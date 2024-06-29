import { Component, input } from '@angular/core';
import { Product } from '../../../types';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @input() product!: Product;

}
