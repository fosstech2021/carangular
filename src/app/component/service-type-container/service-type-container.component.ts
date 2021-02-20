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

  YearID:any;
  FolderID : any;
  ServiceTypeContainerList: any;
  ngOnInit(): void {
    debugger;
    this.route.params.subscribe((val) => {
      this.YearID = val.YearID;
      this.FolderID = val.FolderID;
     });
     this.GetServiceTypeContainer(this.YearID , this.FolderID)
  }

  GetServiceTypeContainer(YearID , FolderID )
  {
  this.register.GetServiceTypeContainer(YearID ,FolderID).subscribe((res: any) => {
    this.ServiceTypeContainerList = res.data.service_type_containers;

  })
  }

}
