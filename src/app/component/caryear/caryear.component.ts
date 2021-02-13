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

  })
  }


}
