import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './models/product';
import { IPagination } from './models/pagination';
/*import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Skinet';
  products: IProduct[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('https://localhost:44394/api/products?pageSize=50').subscribe(
      (response: IPagination) => {
      //console.log(response);
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }

  /*constructor(private basketService: BasketService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(() => {
      console.log('loaded user');
    }, error => {
      console.log(error);
    });
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('initialised basket');
      }, error => {
        console.log(error);
      });
    }
  }*/

}
