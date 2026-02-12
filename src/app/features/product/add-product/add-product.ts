import { Component, output, OutputEmitterRef, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { iProduct } from '../../../shared/models/interfaces/iProduct';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

  nameSignal = signal("");
  priceSignal = signal(0);

  product: iProduct = {
    name: this.nameSignal(),
    price: this.priceSignal()
  }
  
  valueEmittedSignal: OutputEmitterRef<iProduct> = output();
  
  
  sendToParent() {
    this.valueEmittedSignal.emit(this.product)
  }
}
