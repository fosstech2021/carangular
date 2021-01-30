import { Component, OnInit } from '@angular/core';
import { AaheoService } from "../../service/aaheo.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  parmsId:any;
  ProductInformation:any;
  changeImg:any;
  changeContent:any =1;
  constructor(
    private register: AaheoService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.changeImg = 1;
    this.route.params.subscribe((val) => {
     this.parmsId = val.id;
    });
        this.register.productlists(this.parmsId).subscribe((res: any) => {
      this.ProductInformation = res.data;


    })
  }
  changeImage(val){
console.log(val)
this.changeImg = val;
  }
  changeREVIEWS(val){
    console.log(val)
    this.changeContent = val;

  }

}
