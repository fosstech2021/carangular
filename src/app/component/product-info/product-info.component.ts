import { Component, OnInit } from "@angular/core";
import { AaheoService } from "../../service/aaheo.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.css"],
})
export class ProductInfoComponent implements OnInit {
  parmsId: any;
  ProductInformation: any;
  ProductReviewInformation: any;
  changeImg: any;
  changeContent: any = 1;
  SaveProductReview : any ;

  Rateselected = 0;
  constructor(
    private register: AaheoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.changeImg = 1;
    this.route.params.subscribe((val) => {
      this.parmsId = val.id;
    });
    this.register.productlists(this.parmsId).subscribe((res: any) => {
      this.ProductInformation = res.data;
    });
this.ProductReviewlist();
  }

  ProductReviewlist()
  {
    this.register.productReview(this.parmsId).subscribe((res: any) => {
      this.ProductReviewInformation = res.data.reviews;
    });
  }

  changeImage(val) {
    console.log(val);
    this.changeImg = val;
  }
  changeREVIEWS(val) {
    console.log(val);
    this.changeContent = val;
  }

  ShareRating(val) { 
    debugger;
    this.SaveProductReview = {
      "name": "",
      "email": "",
      "review": "",
      "rating": this.Rateselected,
      "approved": false,
      "product_id": this.parmsId,
      "users_id": 0
    }
    this.register.SaveproductReview(this.SaveProductReview).subscribe((res: any) => {
      this.ProductReviewlist();
    });
  }
}
