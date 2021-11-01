import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product!: Product;
  productService: ProductService;
  product_id: string;

  constructor(private actRoute: ActivatedRoute, productService: ProductService) { 
    this.product_id = this.actRoute.snapshot.params.id;
    this.productService = productService;
  }

  ngOnInit(): void {
    this.getOneProduct(this.product_id);

  }

  getOneProduct(id: string) {
    this.productService.getOneProduct(id).subscribe(p => this.product = p);
    
  }

}
