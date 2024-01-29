import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public products = [
    {name: 'Iphone', price: 1000, description: 'This is my iphone'},
    {name: 'Xiaomi', price: 500, description: 'This is android phone'},
    {name: 'Samsung', price: 500, description: "This is samsung"}
  ];
  public share = () => {
    alert("product was shared !")
  };
}
