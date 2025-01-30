import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private productService: ProductService) {}


  ngOnInit(): void {
    this.productService.getCategories().subscribe(
      (categories) => {
        this.categories = categories; 
      },
      (error) => {
        console.error('Error fetching categories:', error);  
      }
    );
  }
  
  
}