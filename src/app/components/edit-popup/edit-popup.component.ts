import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../../types';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss'
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  @Output() confirm = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  @Input() product: Product = {
    name: '',
    price: '',
    image: '',
    rating: 0,
  }

  onConfirm() {
    this.confirm.emit(this.product);

  }

  onCancel(){
    this.display = false;
  }



}
