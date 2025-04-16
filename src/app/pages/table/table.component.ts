import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from "../../components/btn/btn.component";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NavbarComponent, 
    HttpClientModule, 
    CdkTableModule, 
    CommonModule, 
    BtnComponent, 
    ReactiveFormsModule
  ],
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  constructor(private http: HttpClient) {}
  
  dataSource = new DataSourceProduct();
  displayedColumns: string[] = ['No', 'title', 'price', 'actions'];
  input = new FormControl('', {nonNullable: true});

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        this.dataSource.updateData(data);
      });

    this.input.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.dataSource.filter(value);
      });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}