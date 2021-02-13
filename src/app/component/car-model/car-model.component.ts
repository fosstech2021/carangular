import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AaheoService } from 'src/app/service/aaheo.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.css']
})
export class CarModelComponent implements OnInit {

  constructor(     private route: ActivatedRoute , private register: AaheoService ) { }
  parmsId:any;
  CarModelList: any;
  ngOnInit(): void {
    debugger;
    this.route.params.subscribe((val) => {
      this.parmsId = val.id;
     });
     this.GetCarModel(this.parmsId)
  }

  GetCarModel(Value)
  {
  this.register.GetCarModel(Value).subscribe((res: any) => {
    this.CarModelList = res.data.car_models;

  })
  }

}
