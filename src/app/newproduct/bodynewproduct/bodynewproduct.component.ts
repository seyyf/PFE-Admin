import { ProductService } from './../../product.service';
import { CategorieService } from './../../categorie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodynewproduct',
  templateUrl: './bodynewproduct.component.html',
  styleUrls: ['./bodynewproduct.component.css']
})
export class BodynewproductComponent implements OnInit {
  categories$;

  constructor(categorieService: CategorieService, private productService: ProductService) { 
    this.categories$ = categorieService.getCategories();
  }

  save(product){
    this.productService.create(product);
  }

  ngOnInit(): void {
  }

}
