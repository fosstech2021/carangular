import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AaheoService } from "src/app/service/aaheo.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  UserId: any;
  UserName: any;
  SearchForm: FormGroup;
  ServicecategoryList: any;
  LogInInfo: any;
  Data: any;
  ProductsList: any;
  searchedValue: any;
  Name: any;
  get isLoggedIn() { return this.register.Getlogindetail(); }
  constructor(
    private fb: FormBuilder,
    private register: AaheoService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    // this.register.getLoggedInData.subscribe(name => {
    //   alert(name)
    //   this.loginData()   
    // });


    this.GetProduct("");
    this.loginData();
    this.SearchForm = this.fb.group({
      Search: ["", Validators.required],
    });

    var header = document.getElementById("nav");
    var btns = header.getElementsByClassName("bar");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    this.GetserviceCategory();
  }
  logout() {}

  GetserviceCategory() {
    this.register.GetserviceCategory().subscribe((res: any) => {
      this.ServicecategoryList = res.data.service_categories;
    });
  }
ngOnChange()
{
  this.loginData() ;
}

  loginData() {
    debugger;
    this.LogInInfo = this.register.Getlogindetail();
    this.Name = this.LogInInfo.first_name;
  }

  Logout() {
    debugger;
    this.register.Setlogindetail(null);
    localStorage.removeItem("UserLogIn");
    this.LogInInfo = null;
  }

  GetProduct(value) {
    this.register.GetSearchData(value).subscribe((res: any) => {
      debugger;
      this.ProductsList = res.data.products;

      this.Data = [];
      for (let i = 0; i < this.ProductsList.length; i++) {
        this.Data.push({
          id: this.ProductsList[i].id,
          name: this.ProductsList[i].title,
        });
      }
    });
  }

  selectEvent(val) {
    this.searchedValue = val.name;
    let productid = val.id;
    this.router.navigate(["/ProductInfo/" + productid]);
    debugger;
  }
  onChangeSearch(val) {
    debugger;
    this.GetProduct(val);
    this.searchedValue = val;
  }

  FilterData(val) {
    debugger;
    this.searchedValue = val.name;
  }

  searchCleared() {
    debugger;
    this.searchedValue = "";
  }
}
