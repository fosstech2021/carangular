import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AaheoService } from 'src/app/service/aaheo.service';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.css']
})
export class ServiceTypeComponent implements OnInit {

 
  constructor(  private route: ActivatedRoute , private register: AaheoService ) { }

  parmsId:any;
  ServiceTypeList: any;
  ngOnInit(): void {
    debugger;
    this.route.params.subscribe((val) => {
      this.parmsId = val.id;
     });
     this.GetServiceType(this.parmsId)
  }

  GetServiceType(Value)
  {
  this.register.GetServiceType(Value).subscribe((res: any) => {
    this.ServiceTypeList = res.data.service_types;

  })
  }

}
