import { Component, OnInit } from '@angular/core';
import { AaheoService } from "../../service/aaheo.service";
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ProductList:any;
  constructor(
    private register: AaheoService,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.register.getproduct().subscribe((res: any) => {
      console.log(res.data.products);
      this.ProductList = res.data.products;

    })

  }
  // product(id){
  //   this.router.navigate(['/ProductInfo',{id}])

  // }
}
