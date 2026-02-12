import { Component } from '@angular/core';
import { ListProduct } from "./list-product/list-product";
import { AddProduct } from "./add-product/add-product";
import { iProduct } from '../../shared/models/interfaces/iProduct';

@Component({
  selector: 'app-product',
  imports: [ListProduct, AddProduct],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  valueFromChild: iProduct[] = []

}
