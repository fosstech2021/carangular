import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AaheoService } from 'src/app/service/aaheo.service';

@Component({
  selector: 'app-service-type-container',
  templateUrl: './service-type-container.component.html',
  styleUrls: ['./service-type-container.component.css']
})
export class ServiceTypeContainerComponent implements OnInit {

  
  constructor(  private route: ActivatedRoute , private register: AaheoService ) { }

  parmsId:any;
  ServiceTypeContainerList: any;
  ngOnInit(): void {
    debugger;
    this.route.params.subscribe((val) => {
      this.parmsId = val.id;
     });
     this.GetServiceTypeContainer(this.parmsId)
  }

  GetServiceTypeContainer(Value)
  {
  this.register.GetServiceTypeContainer(Value).subscribe((res: any) => {
    this.ServiceTypeContainerList = res.data.service_type_containers;

  })
  }

}
