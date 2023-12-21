import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../api-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{

  productId:any = "";
  productDetails: any = {};
  constructor(private _ActivatedRoute: ActivatedRoute , private _ApiDataService: ApiDataService) {
    this._ActivatedRoute.paramMap.subscribe((params) =>{
      console.log(params.get('id'));
      this.productId = params.get('id');
    });
  }
  ngOnInit(): void {
    this._ApiDataService.getProductById(this.productId).subscribe({
      next: (data) => {
        this.productDetails = data.data;
      },
      error: (error) => console.error('There was an error!', error),
    })
  }
}
