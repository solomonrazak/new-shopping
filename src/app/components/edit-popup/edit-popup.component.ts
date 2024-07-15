import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../../types';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule, CommonModule, FormsModule, RatingModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss'
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  
  @Output() cancel = new EventEmitter<void>();
  @Input() header!: string; // this property will always be provided. // this will always have a value

  @Input() product: Product = {
    name: '',
    price: '',
    image: '',
    rating: 0,
  }

  @Output() confirm = new EventEmitter<Product>();

  onConfirm() {
    this.confirm.emit(this.product);

  }

  onCancel(){
    this.display = false;
  }



}
