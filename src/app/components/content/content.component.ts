import { Component } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService){}

  ngOnInit(): void{
    this.productsService.getProducts().subscribe((products) => this.products = products)
  }
}
