import { Component, input } from '@angular/core';
import { iProduct } from '../../../shared/models/interfaces/iProduct';

@Component({
  selector: 'app-list-product',
  imports: [],
  templateUrl: './list-product.html',
  styleUrl: './list-product.css',
})
export class ListProduct {

  products = input<iProduct[]>([]);

}
