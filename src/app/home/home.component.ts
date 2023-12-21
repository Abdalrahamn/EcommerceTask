import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private _ApiDataService: ApiDataService) {}

  allProducts: any[] = [];
  ngOnInit(): void {
    this._ApiDataService.getProducts().subscribe({
      next: (data) => {
        this.allProducts = data.data;
        console.log(this.allProducts);
      },
      error: (error) => console.error('There was an error!', error),
    });
  }

  AddToCart() {
    this._ApiDataService.productNum.next(
      this._ApiDataService.productNum.value + 1
    );
  }
}
