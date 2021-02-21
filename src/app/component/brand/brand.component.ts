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
  searchedValue : '';
  Oldparam: any = 0;
  parmsId: any;
  Data: any = [];
  keyword = "name";

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
    
      this.Data = [];
      for (let i = 0; i < this.BrandList.length; i++) {
        this.Data.push({
          id: this.BrandList[i].id,
          name: this.BrandList[i].name,
        });
      }
    });
  }

  ngAfterContentChecked() {
    this.GetParameter();
  }

  selectEvent(val) {
    this.searchedValue = val.name;
    debugger;

  }
  onChangeSearch(val) {
    debugger;
    this.searchedValue = val;

  }

  FilterData(val) {
    debugger;
    this.searchedValue = val.name;
    
   
  }

  searchCleared() {
    debugger;
    this.searchedValue ='';
  }
}
