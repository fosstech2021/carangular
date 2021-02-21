import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AaheoService } from 'src/app/service/aaheo.service';

@Component({
  selector: 'app-caryear',
  templateUrl: './caryear.component.html',
  styleUrls: ['./caryear.component.css']
})
export class CaryearComponent implements OnInit {

  constructor(  private route: ActivatedRoute , private register: AaheoService ) { }

  parmsId:any;
  CarYearList: any;
  searchedValue : '';
  Data : any;
  ngOnInit(): void {
    debugger;
    this.route.params.subscribe((val) => {
      this.parmsId = val.id;
     });
     this.GetCarYear(this.parmsId)
  }

  GetCarYear(Value)
  {
  this.register.GetCarYear(Value).subscribe((res: any) => {
    this.CarYearList = res.data.car_year_models;
    this.Data = [];
    for (let i = 0; i < this.CarYearList.length; i++) {
      this.Data.push({
        id: this.CarYearList[i].id,
        name: this.CarYearList[i].name,
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
