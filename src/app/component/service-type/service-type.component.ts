import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AaheoService } from "src/app/service/aaheo.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "app-service-type",
  templateUrl: "./service-type.component.html",
  styleUrls: ["./service-type.component.css"],
})
export class ServiceTypeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private register: AaheoService,
    private DomSanitizer: DomSanitizer
  ) {}

  parmsId: any;
  ServiceTypeList: any;
  ServiceTypeData: any;

  ngOnInit(): void {
    debugger;
    this.route.params.subscribe((val) => {
      this.parmsId = val.id;
    });
    this.GetServiceType(this.parmsId);
  }

  GetServiceType(Value) {
    this.register.GetServiceType(Value).subscribe((res: any) => {
      this.ServiceTypeList = res.data.service_types;
    });
  }

  ShowData(data) {
    debugger;
    this.ServiceTypeData = data;
   
  }

  PDFURL() {
    return this.DomSanitizer.bypassSecurityTrustResourceUrl(
      this.ServiceTypeData.content_url
    );
  }
}
