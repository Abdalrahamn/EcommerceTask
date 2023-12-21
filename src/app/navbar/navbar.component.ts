import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../api-data.service';
import { LanguageService } from '../language.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [TranslateService]
})
export class NavbarComponent implements OnInit{

  
  productCount:number = 0;

  constructor(private _ApiDataService:ApiDataService ,
    private languageService: LanguageService) {
   }

  ngOnInit(): void {
    this._ApiDataService.productNum.subscribe((data)=>{
      this.productCount = data;
    })


  }


  // toggleLanguage()
  toggleLanguage() {
    //console.log("toggleLanguage");
    this.languageService.toggleLanguage();
  }
}
