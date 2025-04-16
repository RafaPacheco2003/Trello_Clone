import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';

interface Product{
  id: string;
  title: string;
  images: string[];
  price: number;
}

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, CommonModule, HttpClientModule, ScrollingModule],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {
  constructor(private http: HttpClient) {}


  products: Product[] = [];

  

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data =>{
        this.products = data;
      });
  }
}
