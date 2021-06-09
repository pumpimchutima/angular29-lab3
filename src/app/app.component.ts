import { Component ,OnInit,ViewChild} from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('productList')
  productList: ProductListComponent = new ProductListComponent;

  title = 'angular29-lab2';

  ngOnInit():void{
    this.productList.products=[
      {
        name:'Apple1',
        price:111
      },
      {
        name:'Apple2',
        price:1112
      },
      {
        name:'Apple3',
        price:11123
      }
    ];
  }
}
