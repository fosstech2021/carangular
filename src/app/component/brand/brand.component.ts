import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AaheoService } from "src/app/service/aaheo.service";

@Component({
  selector: "app-brand",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.css"],
})
export class BrandComponent implements OnInit {
  constructor(private register: AaheoService, private route: ActivatedRoute) {}

  BrandList: any;
  Oldparam: any = 0;
  parmsId: any;
  ngOnInit(): void {
    debugger;
    this.GetParameter();
  }
  GetParameter() {
    this.route.params.subscribe((val) => {
      this.Oldparam = this.parmsId;
      this.parmsId = val.id;
      if (this.Oldparam != this.parmsId) {
        this.GetBrand(this.parmsId);
      }
    });
  }

  GetBrand(value) {
    this.register.GetBrand(value).subscribe((res: any) => {
      this.BrandList = res.data.brands;
    });
  }

  ngAfterContentChecked() {
    this.GetParameter();
   
  }
}
