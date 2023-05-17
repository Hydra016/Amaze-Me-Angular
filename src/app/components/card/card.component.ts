import { Component } from '@angular/core';
import {  Input } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product?: Product;
}
