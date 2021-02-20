import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

  constructor(private fb: FormBuilder, private register: AaheoService) {}

  ngOnInit(): void {
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
    this.GetserviceCategory()
  }
  logout() {}

  GetserviceCategory() {
    this.register.GetserviceCategory().subscribe((res: any) => {
      this.ServicecategoryList = res.data.service_categories;
    });
  }
}
