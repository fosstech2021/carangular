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
  searchedValue : '';
  Data : any;
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
    this.Data = [];
    for (let i = 0; i < this.CarModelList.length; i++) {
      this.Data.push({
        id: this.CarModelList[i].id,
        name: this.CarModelList[i].name,
      });
    }
  })
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
